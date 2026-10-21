import React from 'react';
import { CourseResource } from '../types';
import { Bookmark, ArrowRight, Globe, BookMarked, Sparkles, CheckCircle2, Wrench, Users, HeartHandshake } from 'lucide-react';

interface CourseCardProps {
  course: CourseResource;
  isSaved: boolean;
  onSelect: (course: CourseResource) => void;
  onToggleSave: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  isSaved,
  onSelect,
  onToggleSave,
}) => {
  const isAICourse =
    course.title.includes('AI') ||
    course.title.includes('Хиймэл оюун') ||
    course.category.includes('AI') ||
    course.faculty === 'ai_business';

  const freeSitesCount = course.usefulWebsites.filter((s) => s.isFree).length;

  return (
    <div
      onClick={() => onSelect(course)}
      className="group bg-white rounded-xl border border-slate-200 hover:border-indigo-400 p-6 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer relative"
    >
      <div>
        {/* Unboxed metadata line with typographic separators */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            {course.code && <span className="font-mono font-bold text-indigo-700">{course.code}</span>}
            {course.code && <span aria-hidden="true">·</span>}
            <span className="font-medium text-slate-600">{course.level}</span>
            {isAICourse && (
              <>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                  <Sparkles className="w-3 h-3 text-purple-600" /> AI хосолсон
                </span>
              </>
            )}
            {course.isAIGenerated && !isAICourse && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-indigo-600 font-semibold flex items-center gap-0.5">
                  <Sparkles className="w-3 h-3" /> AI
                </span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(course.id);
            }}
            className="p-1 text-slate-400 hover:text-amber-500 transition-colors rounded cursor-pointer"
            aria-label={isSaved ? `${course.title} хичээлийг хадгалснаас хасах` : `${course.title} хичээлийг хадгалах`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug mb-1">
          {course.title}
        </h3>

        {course.englishTitle && (
          <p className="text-xs text-slate-400 italic mb-2.5">{course.englishTitle}</p>
        )}

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-3">
          {course.overview}
        </p>

        {/* Academic study advice badge if present */}
        {(course.academicStrategy || course.mentorTip) && (
          <div className="bg-indigo-50/70 border border-indigo-200/60 rounded-lg p-2.5 text-[11px] text-indigo-950 leading-snug mb-3 flex items-start gap-1.5">
            <span className="text-indigo-600 shrink-0 font-bold">💡 Академик зөвлөмж:</span>
            <span className="line-clamp-2">{course.academicStrategy || course.mentorTip}</span>
          </div>
        )}

        {/* Skills pill summary */}
        {((course.hardSkills && course.hardSkills.length > 0) || (course.softSkills && course.softSkills.length > 0)) && (
          <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[11px]">
            {course.hardSkills && course.hardSkills.length > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                <Wrench className="w-3 h-3 text-slate-500" />
                <span>{course.hardSkills.length} Hard skills</span>
              </span>
            )}
            {course.softSkills && course.softSkills.length > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-medium border border-emerald-200/50">
                <HeartHandshake className="w-3 h-3 text-emerald-600" />
                <span>{course.softSkills.length} Soft skills</span>
              </span>
            )}
          </div>
        )}
      </div>

      <div>
        {/* Resources Summary Unboxed */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100 mb-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.usefulWebsites.length} веб сайт</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 font-medium">
              <BookMarked className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.readingMaterials.length} ном зүй</span>
            </span>
          </div>

          {freeSitesCount > 0 && (
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {freeSitesCount} үнэгүй эх сурвалж
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
          <span>Хичээл & Ур чадваруудыг үзэх</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};
