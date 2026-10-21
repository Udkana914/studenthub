export interface UserProfile {
  email: string;
  name: string;
  university: string;
  major: string;
  year: number | string;
  savedCourseIds: string[];
  savedResourceIds: string[];
}

export interface UsefulWebsite {
  id: string;
  title: string;
  url: string;
  category: 'interactive' | 'course' | 'tool' | 'documentation';
  language: 'MN' | 'EN' | 'MN/EN';
  isFree: boolean;
  freeTierNote?: string;
  description: string;
  bestFor: string;
  mentorTip?: string;
}

export interface ReadingMaterial {
  id: string;
  title: string;
  author: string;
  type: 'textbook' | 'lecture_notes' | 'monograph' | 'guide' | 'cheat_sheet';
  level: 'Эхлэн суралцагч' | 'Дунд шат' | 'Гүнзгийрүүлсэн';
  description: string;
  format: 'PDF' | 'Ном' | 'Цахим гарын авлага';
  downloadUrl?: string;
  keyChapters: string[];
}

export interface ResearchSource {
  id: string;
  title: string;
  sourceName: string;
  searchQuery: string;
  directUrl: string;
  suggestedTopics: string[];
  citationGuidance: string;
}

export interface SyllabusModule {
  week: number | string;
  title: string;
  keyConcepts: string[];
  summary: string;
  studyTip?: string;
  mentorTip?: string;
}

export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CourseResource {
  id: string;
  code?: string;
  title: string;
  englishTitle?: string;
  faculty: 'stem' | 'business' | 'medicine' | 'law' | 'humanities' | 'engineering' | 'ai_business' | 'social_innovation';
  category: string;
  level: string;
  overview: string;
  keyLearningOutcomes: string[];
  hardSkills?: string[];
  softSkills?: string[];
  academicStrategy?: string;
  examFocus?: string;
  mentorGreeting?: string;
  mentorTip?: string;
  modules: SyllabusModule[];
  usefulWebsites: UsefulWebsite[];
  readingMaterials: ReadingMaterial[];
  researchSources: ResearchSource[];
  practiceQuestions: PracticeQuestion[];
  studyTips: string[];
  isAIGenerated?: boolean;
}

export interface StudyNote {
  id: string;
  courseId: string;
  courseTitle: string;
  title: string;
  content: string;
  createdAt: string;
}

