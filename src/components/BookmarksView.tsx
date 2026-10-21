import React, { useState } from 'react';
import { CourseResource, UsefulWebsite, StudyNote, UserProfile } from '../types';
import { Bookmark, FileText, Trash2, Plus, ArrowRight, ExternalLink, BookOpen, Clock } from 'lucide-react';

interface BookmarksViewProps {
  user: UserProfile | null;
  allCourses: CourseResource[];
  notes: StudyNote[];
  onSelectCourse: (course: CourseResource) => void;
  onRemoveSavedCourse: (courseId: string) => void;
  onRemoveSavedResource: (resourceId: string) => void;
  onAddNote: (courseId?: string, courseTitle?: string) => void;
  onDeleteNote: (noteId: string) => void;
  onExploreCourses: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  user,
  allCourses,
  notes,
  onSelectCourse,
  onRemoveSavedCourse,
  onRemoveSavedResource,
  onAddNote,
  onDeleteNote,
  onExploreCourses,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'courses' | 'resources' | 'notes'>('courses');

  const savedCourses = allCourses.filter((c) => user?.savedCourseIds.includes(c.id));

  // Find all saved web resources across courses
  const allWebsites: UsefulWebsite[] = [];
  allCourses.forEach((c) => {
    c.usefulWebsites.forEach((site) => {
      if (user?.savedResourceIds.includes(site.id) && !allWebsites.some((w) => w.id === site.id)) {
        allWebsites.push(site);
      }
    });
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Миний эрдмийн сан
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {user ? `${user.name} (${user.university.split(' ')[0]}) оюутны хадгалсан хичээлүүд ба тэмдэглэл` : 'Хадгалсан хичээлүүд ба сурах материалууд'}
          </p>
        </div>

        <button
          onClick={() => onAddNote()}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Шинэ тэмдэглэл бичих</span>
        </button>
      </div>

      {/* Sub tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveSubTab('courses')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'courses' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Хадгалсан хичээлүүд ({savedCourses.length})
        </button>
        <button
          onClick={() => setActiveSubTab('resources')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'resources' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Хадгалсан вебүүд ({allWebsites.length})
        </button>
        <button
          onClick={() => setActiveSubTab('notes')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'notes' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Хичээлийн тэмдэглэлүүд ({notes.length})
        </button>
      </div>

      {/* Subtab 1: Saved Courses */}
      {activeSubTab === 'courses' && (
        <div>
          {savedCourses.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">
                Одоогоор хадгалсан хичээл байхгүй байна
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-5">
                Хичээлүүдийн дэлгэрэнгүй хуудас руу орж "Хадгалах" товчийг даран энд цуглуулаарай.
              </p>
              <button
                onClick={onExploreCourses}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
              >
                Хичээлүүдийг үзэх
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {savedCourses.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-indigo-300 transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-mono font-bold text-indigo-700">{c.code || 'ХИЧЭЭЛ'}</span>
                      <button
                        onClick={() => onRemoveSavedCourse(c.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                        title="Хадгалснаас хасах"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                      {c.overview}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectCourse(c)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Хичээлийг нээх</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Subtab 2: Saved Websites */}
      {activeSubTab === 'resources' && (
        <div>
          {allWebsites.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
              <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">
                Хадгалсан веб сайт байхгүй байна
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-5">
                Хичээл бүрийн "Хэрэгтэй веб сайтууд" хэсгээс дурын сайтыг хадгалан энд цуглуулж болно.
              </p>
              <button
                onClick={onExploreCourses}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
              >
                Хичээлүүд рүү очих
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allWebsites.map((site) => (
                <div
                  key={site.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-indigo-700 capitalize">{site.category}</span>
                      <button
                        onClick={() => onRemoveSavedResource(site.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                        title="Устгах"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{site.title}</h3>
                    <p className="text-xs text-slate-600 mb-3">{site.description}</p>
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                  >
                    <span>Веб рүү орох</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Subtab 3: Student Study Notes */}
      {activeSubTab === 'notes' && (
        <div className="space-y-4">
          {notes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
              <FileText className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">
                Тэмдэглэл бичигдээгүй байна
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-5">
                Хичээлийнхээ чухал лекцийн санаа, шалгалтын өмнөх цээжлэх зүйлсээ энд бичиж хадгалаарай.
              </p>
              <button
                onClick={() => onAddNote()}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
              >
                Тэмдэглэл бичих
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-semibold text-indigo-700 truncate max-w-[200px]">
                        {note.courseTitle}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] flex items-center gap-1 text-slate-400">
                          <Clock className="w-3 h-3" /> {note.createdAt}
                        </span>
                        <button
                          onClick={() => onDeleteNote(note.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                          title="Тэмдэглэл устгах"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{note.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {note.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
