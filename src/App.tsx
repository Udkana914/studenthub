import React, { useState, useEffect } from 'react';
import { CourseResource, UserProfile, StudyNote } from './types';
import {
  getUserProfile,
  saveUserProfile,
  clearUserProfile,
  getAllAvailableCourses,
  saveCustomCourse,
  updateCourse,
  getStudyNotes,
  saveStudyNote,
  deleteStudyNote,
  addRecentSearch,
} from './services/api';
import { searchCourses } from './utils/courseUtils';
import { Header } from './components/Header';
import { CourseSearchHero } from './components/CourseSearchHero';
import { CourseCard } from './components/CourseCard';
import { CourseDetailView } from './components/CourseDetailView';
import { BookmarksView } from './components/BookmarksView';
import { AuthModal } from './components/AuthModal';
import { ConceptExplainerModal } from './components/ConceptExplainerModal';
import { NewCourseModal } from './components/NewCourseModal';
import { NoteModal } from './components/NoteModal';
import { Sparkles, BookOpen, Search, Plus, GraduationCap } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(() => getUserProfile());
  const [courses, setCourses] = useState<CourseResource[]>(() => getAllAvailableCourses());
  const [selectedCourse, setSelectedCourse] = useState<CourseResource | null>(null);
  const [activeTab, setActiveTab] = useState<'courses' | 'bookmarks'>('courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
  const [notes, setNotes] = useState<StudyNote[]>(() => getStudyNotes());

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isExplainerOpen, setIsExplainerOpen] = useState(false);
  const [explainerCourseTitle, setExplainerCourseTitle] = useState('');
  const [isNewCourseOpen, setIsNewCourseOpen] = useState(false);
  const [newCourseInitialName, setNewCourseInitialName] = useState('');
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [noteTargetCourse, setNoteTargetCourse] = useState<{ id?: string; title?: string }>({});

  // Reload courses and notes
  const refreshCourses = () => {
    setCourses(getAllAvailableCourses());
  };

  const handleSaveUser = (profile: UserProfile) => {
    setUser(profile);
    saveUserProfile(profile);
  };

  const handleLogout = () => {
    clearUserProfile();
    setUser(null);
  };

  const handleToggleSaveCourse = (courseId: string) => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    const exists = user.savedCourseIds.includes(courseId);
    const updatedIds = exists
      ? user.savedCourseIds.filter((id) => id !== courseId)
      : [...user.savedCourseIds, courseId];

    const updatedUser = { ...user, savedCourseIds: updatedIds };
    setUser(updatedUser);
    saveUserProfile(updatedUser);
  };

  const handleToggleSaveResource = (resourceId: string) => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    const exists = user.savedResourceIds.includes(resourceId);
    const updatedIds = exists
      ? user.savedResourceIds.filter((id) => id !== resourceId)
      : [...user.savedResourceIds, resourceId];

    const updatedUser = { ...user, savedResourceIds: updatedIds };
    setUser(updatedUser);
    saveUserProfile(updatedUser);
  };

  const handleOpenExplainer = (courseTitle: string) => {
    setExplainerCourseTitle(courseTitle);
    setIsExplainerOpen(true);
  };

  const handleOpenAddNote = (courseId?: string, courseTitle?: string) => {
    setNoteTargetCourse({ id: courseId, title: courseTitle });
    setIsNoteModalOpen(true);
  };

  const handleSaveNote = (newNote: StudyNote) => {
    saveStudyNote(newNote);
    setNotes(getStudyNotes());
  };

  const handleDeleteNote = (noteId: string) => {
    deleteStudyNote(noteId);
    setNotes(getStudyNotes());
  };

  const handleCourseCreated = (newCourse: CourseResource) => {
    saveCustomCourse(newCourse);
    refreshCourses();
    setSelectedCourse(newCourse);
    setActiveTab('courses');
  };

  const handleUpdateCourse = (updatedCourse: CourseResource) => {
    updateCourse(updatedCourse);
    refreshCourses();
    setSelectedCourse(updatedCourse);
  };

  const handleSelectCourseByName = (courseName: string) => {
    addRecentSearch(courseName);
    const matched = searchCourses(courses, courseName);
    if (matched.length > 0) {
      setSelectedCourse(matched[0]);
    } else {
      // Prompt creation of new course
      setNewCourseInitialName(courseName);
      setIsNewCourseOpen(true);
    }
  };

  // Filtered courses based on current query and faculty tab
  const displayedCourses = searchCourses(courses, searchQuery, selectedFaculty);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
      {/* Top Bar Header */}
      <Header
        user={user}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab === 'bookmarks') setSelectedCourse(null);
        }}
        onOpenAuth={() => setIsAuthOpen(true)}
        onSelectFaculty={(fac) => {
          setSelectedFaculty(fac);
          setSelectedCourse(null);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'bookmarks' ? (
          <BookmarksView
            user={user}
            allCourses={courses}
            notes={notes}
            onSelectCourse={(c) => {
              setSelectedCourse(c);
              setActiveTab('courses');
            }}
            onRemoveSavedCourse={handleToggleSaveCourse}
            onRemoveSavedResource={handleToggleSaveResource}
            onAddNote={() => handleOpenAddNote()}
            onDeleteNote={handleDeleteNote}
            onExploreCourses={() => {
              setActiveTab('courses');
              setSelectedCourse(null);
            }}
          />
        ) : selectedCourse ? (
          <CourseDetailView
            course={selectedCourse}
            user={user}
            onBack={() => setSelectedCourse(null)}
            onToggleSaveCourse={handleToggleSaveCourse}
            onToggleSaveResource={handleToggleSaveResource}
            onOpenConceptExplainer={handleOpenExplainer}
            onAddNote={handleOpenAddNote}
            onUpdateCourse={handleUpdateCourse}
          />
        ) : (
          <div>
            {/* Search Hero Area */}
            <CourseSearchHero
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSelectCourseName={handleSelectCourseByName}
              onOpenNewCourseModal={(initName) => {
                setNewCourseInitialName(initName || '');
                setIsNewCourseOpen(true);
              }}
              selectedFaculty={selectedFaculty}
              onSelectFaculty={setSelectedFaculty}
              totalCoursesCount={courses.length}
            />

            {/* Courses Discovery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    {searchQuery ? `"${searchQuery}" хайлтын үр дүн` : 'Бүх хичээлүүд ба материалын сан'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Нийт {displayedCourses.length} хичээлийн нөөц олдлоо
                  </p>
                </div>

                <button
                  onClick={() => {
                    setNewCourseInitialName(searchQuery);
                    setIsNewCourseOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Өөр хичээлийн мэдээлэл үүсгэх (AI)</span>
                </button>
              </div>

              {displayedCourses.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
                  <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-800 mb-1">
                    "{searchQuery}" нэртэй хичээл бэлэн санд одоогоор алга байна
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                    Санаа зоволтгүй! Манай систем таны бичсэн хичээлийн хөтөлбөр, хэрэгтэй веб сайт, сурах бичиг, судалгааны материалыг Монгол хэл дээр шууд цогцоор үүсгэж өгнө.
                  </p>
                  <button
                    onClick={() => {
                      setNewCourseInitialName(searchQuery);
                      setIsNewCourseOpen(true);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>"{searchQuery || 'Шинэ хичээл'}" хичээлийн нөөцийг бэлтгэх</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedCourses.map((c) => (
                    <CourseCard
                      key={c.id}
                      course={c}
                      isSaved={user?.savedCourseIds.includes(c.id) || false}
                      onSelect={(course) => setSelectedCourse(course)}
                      onToggleSave={handleToggleSaveCourse}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                Э
              </div>
              <span className="font-semibold text-slate-800">Оюутны Эрдмийн Сан (StudentHub)</span>
              <span aria-hidden="true">·</span>
              <span>Их, дээд сургуулийн оюутны нэгдсэн эх сурвалжийн платформ</span>
            </div>
            <div>
              <span>Монгол хэлээрх бүрэн тайлбар, веб сайтууд, ном зүй & судалгааны сан</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={user}
        onSaveUser={handleSaveUser}
        onLogout={handleLogout}
      />

      <ConceptExplainerModal
        isOpen={isExplainerOpen}
        onClose={() => setIsExplainerOpen(false)}
        courseTitle={explainerCourseTitle}
      />

      <NewCourseModal
        isOpen={isNewCourseOpen}
        onClose={() => setIsNewCourseOpen(false)}
        initialCourseName={newCourseInitialName}
        onCourseCreated={handleCourseCreated}
      />

      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        courseId={noteTargetCourse.id}
        courseTitle={noteTargetCourse.title}
        onSaveNote={handleSaveNote}
      />
    </div>
  );
}
