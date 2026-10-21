import { CourseResource, UserProfile, StudyNote } from '../types';
import { SEED_COURSES } from '../data/seedCourses';

const STORAGE_KEY_USER = 'student_hub_user_profile';
const STORAGE_KEY_RECENT_SEARCHES = 'student_hub_recent_searches';
const STORAGE_KEY_CUSTOM_COURSES = 'student_hub_custom_courses';
const STORAGE_KEY_NOTES = 'student_hub_study_notes';

/**
 * Get or load user profile from localStorage
 */
export function getUserProfile(): UserProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to parse user profile', e);
  }
  return null;
}

/**
 * Save user profile to localStorage
 */
export function saveUserProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save user profile', e);
  }
}

/**
 * Clear user session (log out)
 */
export function clearUserProfile(): void {
  localStorage.removeItem(STORAGE_KEY_USER);
}

/**
 * Get recent search history
 */
export function getRecentSearches(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RECENT_SEARCHES);
    return raw ? JSON.parse(raw) : ['Өгөгдлийн бүтэц ба алгоритм', 'Микро эдийн засаг', 'Хүний биеийн анатоми'];
  } catch {
    return [];
  }
}

/**
 * Add a recent search term
 */
export function addRecentSearch(term: string): void {
  try {
    const clean = term.trim();
    if (!clean) return;
    const existing = getRecentSearches().filter((t) => t.toLowerCase() !== clean.toLowerCase());
    const updated = [clean, ...existing].slice(0, 8);
    localStorage.setItem(STORAGE_KEY_RECENT_SEARCHES, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving recent search', e);
  }
}

/**
 * Get saved custom/AI-generated courses from localStorage
 */
export function getCustomCourses(): CourseResource[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_COURSES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Save or update a course (persists user edits to any course)
 */
export function saveCustomCourse(course: CourseResource): void {
  try {
    const existing = getCustomCourses().filter((c) => c.id !== course.id);
    localStorage.setItem(STORAGE_KEY_CUSTOM_COURSES, JSON.stringify([course, ...existing]));
  } catch (e) {
    console.error('Error saving custom course', e);
  }
}

export function updateCourse(updatedCourse: CourseResource): void {
  saveCustomCourse(updatedCourse);
}

export function deleteCourse(courseId: string): void {
  try {
    const existing = getCustomCourses().filter((c) => c.id !== courseId);
    localStorage.setItem(STORAGE_KEY_CUSTOM_COURSES, JSON.stringify(existing));
  } catch (e) {
    console.error('Error deleting course', e);
  }
}

export function resetCoursesToDefault(): void {
  localStorage.removeItem(STORAGE_KEY_CUSTOM_COURSES);
}

/**
 * Get all available courses (Seeds + custom generated/edited)
 */
export function getAllAvailableCourses(): CourseResource[] {
  const custom = getCustomCourses();
  const allMap = new Map<string, CourseResource>();

  // Add seeds first
  SEED_COURSES.forEach((c) => allMap.set(c.id, c));
  // Add/override with user edited/custom
  custom.forEach((c) => allMap.set(c.id, c));

  return Array.from(allMap.values());
}

/**
 * Call server to generate new course pack with Gemini
 */
export async function requestCourseResources(
  courseName: string,
  faculty: string = 'stem',
  level: string = '1-2-р курс'
): Promise<CourseResource> {
  const response = await fetch('/api/generate-course-resources', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courseName, faculty, level }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error || `Серверийн хариу: ${response.status}`);
  }

  const generated: CourseResource = await response.json();
  saveCustomCourse(generated);
  return generated;
}

export interface ConceptExplanationResult {
  conceptTitle: string;
  simpleDefinition: string;
  realWorldAnalogy: string;
  stepByStepExplanation: string[];
  concreteExample: string;
  commonMistakes: string;
  quickSelfCheckQuestion: {
    question: string;
    answer: string;
  };
}

/**
 * Request concept explanation in Mongolian
 */
export async function requestConceptExplanation(
  courseTitle: string,
  conceptQuery: string
): Promise<ConceptExplanationResult> {
  const response = await fetch('/api/explain-concept', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ courseTitle, conceptQuery }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error || 'Ойлголтыг тайлбарлахад алдаа гарлаа');
  }

  return response.json();
}

/**
 * Study notes management
 */
export function getStudyNotes(): StudyNote[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NOTES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveStudyNote(note: StudyNote): void {
  try {
    const existing = getStudyNotes().filter((n) => n.id !== note.id);
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify([note, ...existing]));
  } catch (e) {
    console.error('Error saving study note', e);
  }
}

export function deleteStudyNote(noteId: string): void {
  try {
    const existing = getStudyNotes().filter((n) => n.id !== noteId);
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(existing));
  } catch (e) {
    console.error('Error deleting note', e);
  }
}
