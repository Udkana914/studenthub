import { CourseResource, ResearchSource } from '../types';

/**
 * Validates student email format and detects known Mongolian university domains
 */
export function validateStudentEmail(email: string): { isValid: boolean; universityHint?: string } {
  if (!email || typeof email !== 'string') {
    return { isValid: false };
  }
  const cleanEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { isValid: false };
  }

  const domain = cleanEmail.split('@')[1];
  let universityHint: string | undefined;

  if (domain.includes('num.edu.mn')) {
    universityHint = 'Монгол Улсын Их Сургууль (МУИС)';
  } else if (domain.includes('must.edu.mn')) {
    universityHint = 'Шинжлэх Ухаан, Технологийн Их Сургууль (ШУТИС)';
  } else if (domain.includes('mnums.edu.mn')) {
    universityHint = 'Анагаахын Шинжлэх Ухааны Үндэсний Их Сургууль (АШУҮИС)';
  } else if (domain.includes('ufe.edu.mn')) {
    universityHint = 'Санхүү Эдийн Засгийн Их Сургууль (СЭЗИС)';
  } else if (domain.includes('msue.edu.mn')) {
    universityHint = 'Монгол Улсын Боловсролын Их Сургууль (МУБИС)';
  } else if (domain.includes('muls.edu.mn')) {
    universityHint = 'Хөдөө Аж Ахуйн Их Сургууль (ХААИС)';
  }

  return {
    isValid: true,
    universityHint,
  };
}

/**
 * Normalizes text for search (lowercasing, trimming, cyrillic accents)
 */
export function normalizeCyrillic(str: string): string {
  return (str || '')
    .toLowerCase()
    .trim()
    .replace(/ё/g, 'е')
    .replace(/ө/g, 'о')
    .replace(/ү/g, 'у');
}

/**
 * Extracts possible linguistic search stems in Mongolian
 * e.g. "өгөгдөл" -> ["огогдол", "огогдл"] to match "өгөгдлийн"
 */
export function getMongolianSearchStems(word: string): string[] {
  const norm = normalizeCyrillic(word);
  const stems = new Set<string>([norm]);

  if (norm.length >= 4) {
    // Fleeting vowel: e.g. огогдол -> огогдл
    const fleeting = norm.match(/^(.*[бвгджзклмнпрстфхцчшщ])[аэиоу]([бвгджзклмнпрстфхцчшщ])$/);
    if (fleeting) {
      stems.add(fleeting[1] + fleeting[2]);
    }

    // Common case/plural endings: -ийн, -ын, -ийг, -ыг, -ууд, -үүд, -аар, -ээр, -д, -т
    const withoutSuffix = norm.replace(/(ийн|ын|ийг|ыг|ууд|үүд|аар|ээр|оор|өөр|аас|ээс|оос|өөс|тай|тэй|той)$/, '');
    if (withoutSuffix.length >= 3) {
      stems.add(withoutSuffix);
    }
  }

  return Array.from(stems);
}

/**
 * Filters courses based on Mongolian or English search query and optional faculty filter
 */
export function searchCourses(
  courses: CourseResource[],
  query: string,
  facultyFilter?: string
): CourseResource[] {
  let filtered = courses;

  if (facultyFilter && facultyFilter !== 'all') {
    if (facultyFilter === 'ai_business') {
      filtered = filtered.filter(
        (c) =>
          c.faculty === 'ai_business' ||
          c.title.includes('AI') ||
          c.category.includes('AI') ||
          c.title.includes('Хиймэл оюун')
      );
    } else {
      filtered = filtered.filter((c) => c.faculty === facultyFilter);
    }
  }

  const rawTrimmed = (query || '').trim();
  if (!rawTrimmed) {
    return filtered;
  }

  const normalizedQuery = normalizeCyrillic(rawTrimmed);
  const words = normalizedQuery.split(/\s+/).filter(Boolean);

  return filtered.filter((course) => {
    const titleNorm = normalizeCyrillic(course.title);
    const engTitleNorm = normalizeCyrillic(course.englishTitle || '');
    const codeNorm = normalizeCyrillic(course.code || '');
    const categoryNorm = normalizeCyrillic(course.category);
    const overviewNorm = normalizeCyrillic(course.overview);
    const moduleKeywords = course.modules
      .map((m) => normalizeCyrillic(m.title + ' ' + m.keyConcepts.join(' ')))
      .join(' ');
    const skillsKeywords = [
      ...(course.hardSkills || []),
      ...(course.softSkills || []),
      ...(course.keyLearningOutcomes || [])
    ].map((s) => normalizeCyrillic(s)).join(' ');

    const combined = `${titleNorm} ${engTitleNorm} ${codeNorm} ${categoryNorm} ${overviewNorm} ${skillsKeywords} ${moduleKeywords}`;

    // Each search word must match via at least one of its stems
    return words.every((word) => {
      const stems = getMongolianSearchStems(word);
      return stems.some((stem) => combined.includes(stem));
    });
  });
}

/**
 * Generates academic citation for research papers / sources
 */
export function formatCitation(
  source: ResearchSource,
  format: 'APA' | 'Harvard' = 'APA',
  year: number = new Date().getFullYear()
): string {
  if (format === 'APA') {
    return `${source.sourceName}. (${year}). ${source.title}. Цахим холбоос: ${source.directUrl}`;
  }
  return `${source.sourceName} (${year}) '${source.title}', хандалт хийсэн: ${source.directUrl}`;
}

/**
 * Generates a clean Markdown study guide for the student to save or print
 */
export function generateCourseExportMarkdown(course: CourseResource): string {
  const parts: string[] = [];

  parts.push(`# ${course.title} ${course.code ? `(${course.code})` : ''}`);
  if (course.englishTitle) {
    parts.push(`*${course.englishTitle}* - Түвшин: ${course.level}\n`);
  }

  parts.push(`## 1. Хичээлийн тойм ба зорилго`);
  parts.push(course.overview);
  parts.push('');

  if (course.mentorTip) {
    parts.push(`> 💡 **Найз багшийн зөвлөгөө:** ${course.mentorTip}\n`);
  }

  parts.push(`## 2. Эзэмших ур чадвар, мэдлэг`);
  if (course.hardSkills && course.hardSkills.length > 0) {
    parts.push(`### 🛠️ Техникийн ур чадварууд (Hard Skills):`);
    course.hardSkills.forEach((s) => parts.push(`* [ ] ${s}`));
  }
  if (course.softSkills && course.softSkills.length > 0) {
    parts.push(`### 🤝 Зөөлөн ур чадварууд (Soft Skills):`);
    course.softSkills.forEach((s) => parts.push(`* [ ] ${s}`));
  }
  if ((!course.hardSkills || course.hardSkills.length === 0) && (!course.softSkills || course.softSkills.length === 0)) {
    course.keyLearningOutcomes.forEach((outcome, idx) => {
      parts.push(`${idx + 1}. ${outcome}`);
    });
  }
  parts.push('');

  parts.push(`## 3. Гол сэдвүүд ба лекцийн агуулга`);
  course.modules.forEach((mod) => {
    parts.push(`### Долоо хоног ${mod.week}: ${mod.title}`);
    parts.push(mod.summary);
    parts.push(`- Түлхүүр ойлголтууд: ${mod.keyConcepts.join(', ')}`);
    parts.push('');
  });

  parts.push(`## 4. Хэрэгтэй веб сайтууд ба онлайн хэрэглэгдэхүүн`);
  course.usefulWebsites.forEach((site) => {
    parts.push(`- **[${site.title}](${site.url})** (${site.language}): ${site.description}`);
    parts.push(`  *Зориулалт:* ${site.bestFor}`);
  });
  parts.push('');

  parts.push(`## 5. Санал болгох унших материал, ном зүй`);
  course.readingMaterials.forEach((book) => {
    parts.push(`- **${book.title}** - Зохиогч: ${book.author} [${book.format}]`);
    parts.push(`  ${book.description}`);
  });
  parts.push('');

  parts.push(`## 6. Судалгааны эх сурвалжууд ба хайлтын чиглэл`);
  course.researchSources.forEach((res) => {
    parts.push(`- **${res.title}** (${res.sourceName})`);
    parts.push(`  Хайлтын түлхүүр үг: \`${res.searchQuery}\``);
    parts.push(`  Санал болгох сэдвүүд: ${res.suggestedTopics.join(', ')}`);
  });
  parts.push('');

  parts.push(`## 7. Хичээлийг амжилттай судлах зөвлөгөө`);
  course.studyTips.forEach((tip, idx) => {
    parts.push(`${idx + 1}. ${tip}`);
  });

  return parts.join('\n');
}
