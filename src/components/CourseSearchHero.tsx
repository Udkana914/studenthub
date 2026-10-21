import React, { useState, useRef, useEffect } from 'react';
import { POPULAR_COURSE_SUGGESTIONS } from '../data/seedCourses';
import { Search, Sparkles, BookOpen, Compass, ArrowRight, Layers, HeartHandshake, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CourseSearchHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCourseName: (courseName: string) => void;
  onOpenNewCourseModal: (initialName?: string) => void;
  selectedFaculty: string;
  onSelectFaculty: (faculty: string) => void;
  totalCoursesCount: number;
}

export const CourseSearchHero: React.FC<CourseSearchHeroProps> = ({
  searchQuery,
  onSearchChange,
  onSelectCourseName,
  onOpenNewCourseModal,
  selectedFaculty,
  onSelectFaculty,
  totalCoursesCount,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const matchingSuggestions = POPULAR_COURSE_SUGGESTIONS.filter((item) =>
    item.toLowerCase().includes((searchQuery || '').trim().toLowerCase())
  ).slice(0, 6);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFocused(false);
    if (searchQuery.trim()) {
      onSelectCourseName(searchQuery.trim());
    }
  };

  const faculties = [
    { id: 'all', label: 'Бүх 14 хичээл' },
    { id: 'ai_business', label: '🤖 AI хосолсон (5 хичээл)' },
    { id: 'business', label: '💰 Санхүү, Бизнес, Нягтлан' },
    { id: 'law', label: '⚖️ Эрх зүй' },
    { id: 'social_innovation', label: '🌱 Нийгмийн инноваци' },
  ];

  return (
    <div className="relative bg-gradient-to-b from-indigo-50/70 via-slate-50 to-slate-50 pt-8 pb-8 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Academic Platform Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-200/80 text-indigo-900 text-xs font-semibold mb-4 shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
          <span>Оюутны эрдмийн сан • Сургалтын нэгдсэн хөтөч</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span className="text-emerald-700 font-bold">100% Үнэгүй эх сурвалжууд</span>
        </div>

        {/* Hero headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto mb-3 text-balance">
          Хичээлээ амжилттай дүүргэх <span className="text-indigo-600">Академик хөтөч</span>, Hard & Soft Skills
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          Бизнес, санхүү, хиймэл оюун, эрх зүй, нийгмийн инновацийн 14 суурь хичээлийн лекцийн хөтөлбөр, Монголын тэргүүлэх эрдэмтдийн сурах бичиг, шалгалт ба семинарт бэлтгэх зааварчилгаа, үнэгүй вебүүдийн нэгдсэн сан.
        </p>

        {/* Central Search Box */}
        <div ref={containerRef} className="relative max-w-2xl mx-auto mb-5 text-left">
          <form onSubmit={handleFormSubmit} className="relative">
            <div className="relative flex items-center shadow-lg rounded-xl overflow-hidden bg-white border border-slate-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all">
              <div className="pl-4 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                placeholder="Хичээл эсвэл ур чадвараар хайх (жишээ: Маркетинг AI, Санхүү, SQL, Incoterms...)"
                className="w-full px-3 py-3.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="mr-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Хайх</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Autocomplete Suggestions Dropdown */}
          {isFocused && matchingSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-30">
              <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Санал болгох хичээлүүд
              </div>
              {matchingSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => {
                    onSearchChange(suggestion);
                    onSelectCourseName(suggestion);
                    setIsFocused(false);
                  }}
                  className="w-full px-3.5 py-2 text-left text-xs sm:text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="font-medium">{suggestion}</span>
                  <span className="text-[11px] text-slate-400">Сонгох</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 14 Core Subjects Fast Filter Carousel */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 text-xs text-slate-600 max-w-4xl mx-auto">
          <span className="font-semibold text-slate-500 mr-1 text-[11px]">14 үндсэн хичээл:</span>
          {[
            'Аялал жуулчлал',
            'Бизнесийн удирдлага',
            'Даатгал',
            'Зочлох үйлчилгээний менежмент',
            'Маркетинг (AI)',
            'Мэдээллийн систем (AI)',
            'Нягтлан бодох бүртгэл',
            'Олон улсын худалдаа (AI)',
            'Санхүү / Банк',
            'Санхүүгийн манлайлал (AI)',
            'Эдийн засаг',
            'Эрх зүй',
            'Энтрепренершип (AI)',
            'Нийгмийн инноваци'
          ].map((courseName) => (
            <button
              key={courseName}
              onClick={() => {
                const query = courseName.replace(' (AI)', '');
                onSearchChange(query);
                onSelectCourseName(query);
              }}
              className="px-2 py-0.5 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-400 text-slate-700 hover:text-indigo-700 rounded-md transition-colors cursor-pointer text-[11px] font-medium"
            >
              {courseName}
            </button>
          ))}
        </div>

        {/* Faculty Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-slate-200/60 max-w-3xl mx-auto">
          {faculties.map((f) => {
            const isSelected = selectedFaculty === f.id;
            return (
              <button
                key={f.id}
                onClick={() => onSelectFaculty(f.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
