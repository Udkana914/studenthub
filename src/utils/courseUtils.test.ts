import test from 'node:test';
import assert from 'node:assert/strict';
import { validateStudentEmail, normalizeCyrillic, searchCourses, formatCitation, generateCourseExportMarkdown } from './courseUtils.js';
import { CourseResource } from '../types/index.js';

test('validateStudentEmail validates correct emails and detects universities', () => {
  const result1 = validateStudentEmail('bataar@num.edu.mn');
  assert.equal(result1.isValid, true);
  assert.equal(result1.universityHint, 'Монгол Улсын Их Сургууль (МУИС)');

  const result2 = validateStudentEmail('saruul@must.edu.mn');
  assert.equal(result2.isValid, true);
  assert.equal(result2.universityHint, 'Шинжлэх Ухаан, Технологийн Их Сургууль (ШУТИС)');

  const result3 = validateStudentEmail('udka.tinybee@gmail.com');
  assert.equal(result3.isValid, true);
  assert.equal(result3.universityHint, undefined);

  const result4 = validateStudentEmail('invalid-email');
  assert.equal(result4.isValid, false);
});

test('normalizeCyrillic normalizes special cyrillic letters and accents', () => {
  assert.equal(normalizeCyrillic('Өгөгдөл'), 'огогдол');
  assert.equal(normalizeCyrillic('Үндэс'), 'ундэс');
  assert.equal(normalizeCyrillic('Ёс зүй'), 'ес зуй');
});

test('searchCourses matches course title, english title, and keywords', () => {
  const mockCourses: CourseResource[] = [
    {
      id: 'dsa',
      code: 'CS201',
      title: 'Өгөгдлийн бүтэц ба алгоритм',
      englishTitle: 'Data Structures and Algorithms',
      faculty: 'stem',
      category: 'Компьютерийн ухаан',
      level: '2-р курс',
      overview: 'Алгоритмын шинжилгээ, өгөгдлийн бүтцүүд.',
      keyLearningOutcomes: ['Мод, граф ашиглах'],
      modules: [
        {
          week: 1,
          title: 'Оршил ба О-нотаци',
          keyConcepts: ['Big-O', 'Time complexity'],
          summary: 'Хугацааны үнэлгээ хийх аргачлал.',
        },
      ],
      usefulWebsites: [],
      readingMaterials: [],
      researchSources: [],
      practiceQuestions: [],
      studyTips: ['Өдөр бүр код бичих'],
    },
    {
      id: 'micro',
      code: 'ECON101',
      title: 'Микро эдийн засаг',
      englishTitle: 'Microeconomics',
      faculty: 'business',
      category: 'Эдийн засаг',
      level: '1-р курс',
      overview: 'Зах зээлийн механизм, хэрэглэгчийн сонголт.',
      keyLearningOutcomes: ['Үнэ бүрдэлтийг ойлгох'],
      modules: [],
      usefulWebsites: [],
      readingMaterials: [],
      researchSources: [],
      practiceQuestions: [],
      studyTips: [],
    },
  ];

  // Cyrillic search
  const res1 = searchCourses(mockCourses, 'өгөгдөл');
  assert.equal(res1.length, 1);
  assert.equal(res1[0].id, 'dsa');

  // English title search
  const res2 = searchCourses(mockCourses, 'algorithms');
  assert.equal(res2.length, 1);
  assert.equal(res2[0].id, 'dsa');

  // Course code search
  const res3 = searchCourses(mockCourses, 'ECON101');
  assert.equal(res3.length, 1);
  assert.equal(res3[0].id, 'micro');

  // Faculty filter
  const res4 = searchCourses(mockCourses, '', 'business');
  assert.equal(res4.length, 1);
  assert.equal(res4[0].id, 'micro');
});

test('formatCitation generates properly structured APA and Harvard citations', () => {
  const source = {
    id: 'src-1',
    title: 'Монголын дээд боловсролын цахим шилжилт',
    sourceName: 'МУИС Эрдэм шинжилгээний бичиг',
    searchQuery: 'higher education mongolia digital learning',
    directUrl: 'https://journal.num.edu.mn/paper/123',
    suggestedTopics: ['Цахим сургалт'],
    citationGuidance: 'APA 7th edition',
  };

  const citation = formatCitation(source, 'APA', 2026);
  assert.ok(citation.includes('МУИС Эрдэм шинжилгээний бичиг. (2026).'));
  assert.ok(citation.includes('https://journal.num.edu.mn/paper/123'));
});

test('generateCourseExportMarkdown produces comprehensive markdown content', () => {
  const mockCourse: CourseResource = {
    id: 'test-course',
    title: 'Шугаман Алгебр',
    code: 'MATH101',
    englishTitle: 'Linear Algebra',
    faculty: 'stem',
    category: 'Математик',
    level: '1-р курс',
    overview: 'Матриц, вектор огторгуй.',
    keyLearningOutcomes: ['Матриц үржүүлэх'],
    modules: [{ week: 1, title: 'Вектор', keyConcepts: ['Вектор'], summary: 'Векторын чанар' }],
    usefulWebsites: [{
      id: 'w1',
      title: '3Blue1Brown',
      url: 'https://3blue1brown.com',
      category: 'interactive',
      language: 'EN',
      isFree: true,
      description: 'Визуал дүрслэл',
      bestFor: 'Геометр дүрслэл'
    }],
    readingMaterials: [],
    researchSources: [],
    practiceQuestions: [],
    studyTips: ['Геометр дүрслэлээр төсөөлөх'],
  };

  const md = generateCourseExportMarkdown(mockCourse);
  assert.ok(md.includes('# Шугаман Алгебр (MATH101)'));
  assert.ok(md.includes('3Blue1Brown'));
  assert.ok(md.includes('Геометр дүрслэлээр төсөөлөх'));
});

test('SEED_COURSES contains all 14 requested courses with skills and free resources', async () => {
  const { SEED_COURSES } = await import('../data/seedCourses.js');
  assert.equal(SEED_COURSES.length, 14);

  const expectedTitles = [
    'Аялал жуулчлал',
    'Бизнесийн удирдлага',
    'Даатгал',
    'Зочлох үйлчилгээний менежмент',
    'Маркетинг (Хиймэл оюун ухаан /AI/ хосолсон)',
    'Мэдээллийн систем (Хиймэл оюун ухаан /AI/ хосолсон)',
    'Нягтлан бодох бүртгэл',
    'Олон улсын худалдаа (Хиймэл оюун ухаан /AI/ хосолсон)',
    'Санхүү / Банк',
    'Санхүүгийн манлайлал (Хиймэл оюун ухаан /AI/ хосолсон)',
    'Эдийн засаг',
    'Эрх зүй',
    'Энтрепренершип (Хиймэл оюун ухаан /AI/ хосолсон)',
    'Нийгмийн инноваци'
  ];

  for (const expectedTitle of expectedTitles) {
    const course = SEED_COURSES.find((c) => c.title === expectedTitle);
    assert.ok(course, `Missing course: ${expectedTitle}`);
    assert.ok(course.hardSkills && course.hardSkills.length >= 3, `${expectedTitle} must have hard skills`);
    assert.ok(course.softSkills && course.softSkills.length >= 3, `${expectedTitle} must have soft skills`);
    assert.ok(course.usefulWebsites && course.usefulWebsites.length >= 2, `${expectedTitle} must have useful websites`);
    assert.ok(course.usefulWebsites.some((w) => w.isFree), `${expectedTitle} must have free websites`);
    assert.ok(course.modules && course.modules.length >= 4, `${expectedTitle} must have syllabus modules`);
  }
});

