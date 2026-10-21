import React, { useState, useEffect, useRef } from 'react';
import { UserProfile } from '../types';
import { UserCheck, LogIn, Bookmark, GraduationCap, Edit2, Check, X, Sparkles, HeartHandshake } from 'lucide-react';

interface HeaderProps {
  user: UserProfile | null;
  activeTab: 'courses' | 'bookmarks';
  onTabChange: (tab: 'courses' | 'bookmarks') => void;
  onOpenAuth: () => void;
  onSelectFaculty: (faculty: string) => void;
}

const STORAGE_KEY_BRAND_TITLE = 'student_hub_custom_brand_title';

export const Header: React.FC<HeaderProps> = ({
  user,
  activeTab,
  onTabChange,
  onOpenAuth,
  onSelectFaculty,
}) => {
  const [brandTitle, setBrandTitle] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BRAND_TITLE);
      if (saved && !saved.includes('Найз багш')) {
        return saved;
      }
      return 'Оюутны эрдмийн сан';
    } catch {
      return 'Оюутны эрдмийн сан';
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(brandTitle);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleStartEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditValue(brandTitle);
    setIsEditing(true);
  };

  const handleSaveEdit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const clean = editValue.trim() || 'Оюутны эрдмийн сан';
    setBrandTitle(clean);
    setIsEditing(false);
    try {
      localStorage.setItem(STORAGE_KEY_BRAND_TITLE, clean);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancelEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditValue(brandTitle);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(brandTitle);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          {/* Zone 1: Brand title with inline edit support */}
          <div className="flex items-center gap-2.5 text-left text-slate-900 shrink-0">
            <button
              type="button"
              onClick={() => {
                onTabChange('courses');
                onSelectFaculty('all');
              }}
              className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-xs transition-transform hover:scale-105 shrink-0 cursor-pointer"
              aria-label="Нүүр хуудас руу очих"
            >
              <GraduationCap className="w-5 h-5" />
            </button>

            {isEditing ? (
              <form onSubmit={handleSaveEdit} className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                <input
                  ref={inputRef}
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="px-2.5 py-1 text-sm sm:text-base font-bold text-slate-900 border border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white max-w-[220px] sm:max-w-[340px]"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                  placeholder="Гарчиг бичих..."
                />
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="p-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
                  title="Хадгалах"
                  aria-label="Хадгалах"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="p-1.5 rounded-md bg-slate-200 text-slate-600 hover:bg-slate-300 cursor-pointer"
                  title="Болих"
                  aria-label="Болих"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="group relative flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    onTabChange('courses');
                    onSelectFaculty('all');
                  }}
                  className="text-left cursor-pointer truncate max-w-[200px] sm:max-w-none"
                >
                  <span
                    style={{ fontFamily: 'Times New Roman, serif' }}
                    className="text-sm sm:text-lg font-bold tracking-tight text-slate-900 block leading-tight truncate"
                  >
                    {brandTitle}
                  </span>
                  <span className="text-[11px] font-medium text-indigo-600 flex items-center gap-1 leading-tight truncate">
                    <span>Их, дээд сургуулийн хичээлийн нэгдсэн хөтөч</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-emerald-700 font-semibold">100% Үнэгүй эх сурвалжууд</span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleStartEdit}
                  className="opacity-60 hover:opacity-100 p-1 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-all cursor-pointer"
                  title="Нэрээ өөрөө бичиж засах"
                  aria-label="Гарчгийг өөрчлөх"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600" aria-label="Үндсэн цэс">
            <button
              onClick={() => {
                onTabChange('courses');
                onSelectFaculty('all');
              }}
              className={`transition-colors cursor-pointer py-1 ${
                activeTab === 'courses'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'hover:text-slate-900'
              }`}
            >
              Бүх 14 хичээл
            </button>
            <button
              onClick={() => {
                onTabChange('courses');
                onSelectFaculty('ai_business');
              }}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>AI хосолсон (5)</span>
            </button>
            <button
              onClick={() => {
                onTabChange('courses');
                onSelectFaculty('business');
              }}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Санхүү & Бизнес
            </button>
            <button
              onClick={() => {
                onTabChange('courses');
                onSelectFaculty('law');
              }}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Эрх зүй
            </button>
            <button
              onClick={() => {
                onTabChange('courses');
                onSelectFaculty('social_innovation');
              }}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Нийгмийн инноваци
            </button>
          </nav>

          {/* Zone 3: Bookmarks & User Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onTabChange(activeTab === 'bookmarks' ? 'courses' : 'bookmarks')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                activeTab === 'bookmarks'
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
              title="Хадгалсан хичээлүүд ба материалууд"
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span className="hidden sm:inline">Хадгалсан</span>
              {user && (user.savedCourseIds.length > 0 || user.savedResourceIds.length > 0) && (
                <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">
                  {user.savedCourseIds.length + user.savedResourceIds.length}
                </span>
              )}
            </button>

            {user ? (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="max-w-[100px] truncate">{user.name || user.email.split('@')[0]}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Нэвтрэх / Бүртгүүлэх</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
