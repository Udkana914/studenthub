import React, { useState, useEffect } from 'react';
import { CourseResource, UsefulWebsite, ReadingMaterial, ResearchSource, UserProfile } from '../types';
import { formatCitation, generateCourseExportMarkdown } from '../utils/courseUtils';
import {
  Globe,
  BookMarked,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Download,
  Copy,
  Check,
  CheckCircle2,
  HelpCircle,
  FileText,
  Bookmark,
  Share2,
  ArrowLeft,
  Search,
  BookOpen,
  Library,
  Lightbulb,
  Edit3,
  Wrench,
  HeartHandshake,
  Award,
  CheckSquare,
  Square
} from 'lucide-react';
import { EditCourseModal } from './EditCourseModal';

interface CourseDetailViewProps {
  course: CourseResource;
  user: UserProfile | null;
  onBack: () => void;
  onToggleSaveCourse: (courseId: string) => void;
  onToggleSaveResource: (resourceId: string) => void;
  onOpenConceptExplainer: (courseTitle: string) => void;
  onAddNote: (courseId: string, courseTitle: string) => void;
  onUpdateCourse: (updatedCourse: CourseResource) => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  course,
  user,
  onBack,
  onToggleSaveCourse,
  onToggleSaveResource,
  onOpenConceptExplainer,
  onAddNote,
  onUpdateCourse,
}) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'skills' | 'websites' | 'reading' | 'research' | 'quiz'>('overview');
  const [websiteFilter, setWebsiteFilter] = useState<string>('all');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);
  const [copiedExport, setCopiedExport] = useState(false);

  // Completed skills stored in localStorage
  const storageSkillKey = `skills_progress_${course.id}`;
  const [completedSkills, setCompletedSkills] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(storageSkillKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleSkill = (skillName: string) => {
    setCompletedSkills((prev) => {
      const updated = { ...prev, [skillName]: !prev[skillName] };
      try {
        localStorage.setItem(storageSkillKey, JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const isSaved = user?.savedCourseIds.includes(course.id) || false;

  const handleCopyCitation = (source: ResearchSource, format: 'APA' | 'Harvard') => {
    const text = formatCitation(source, format);
    navigator.clipboard.writeText(text);
    setCopiedCitationId(source.id);
    setTimeout(() => setCopiedCitationId(null), 2000);
  };

  const handleExportMarkdown = () => {
    const md = generateCourseExportMarkdown(course);
    navigator.clipboard.writeText(md);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  const filteredWebsites = course.usefulWebsites.filter((site) => {
    if (websiteFilter === 'all') return true;
    if (websiteFilter === 'free') return site.isFree;
    return site.category === websiteFilter;
  });

  const allSkillsList = [
    ...(course.hardSkills || []).map((s) => ({ name: s, type: 'hard' as const })),
    ...(course.softSkills || []).map((s) => ({ name: s, type: 'soft' as const })),
  ];
  const totalSkillsCount = allSkillsList.length;
  const completedCount = allSkillsList.filter((s) => completedSkills[s.name]).length;
  const progressPercent = totalSkillsCount > 0 ? Math.round((completedCount / totalSkillsCount) * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button and quick actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Бүх 14 хичээл рүү буцах</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {/* Ask Concept Explainer */}
          <button
            onClick={() => onOpenConceptExplainer(course.title)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-200 cursor-pointer shadow-2xs"
            title="Ойлгомжгүй сэдвээ энгийн жишээгээр тайлбарлуулах"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Ойлголт тайлбарлуулах</span>
          </button>

          {/* Export guide */}
          <button
            onClick={handleExportMarkdown}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors cursor-pointer"
            title="Хичээлийн бүх мэдээллийг конспект хэлбэрээр хуулах"
          >
            {copiedExport ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedExport ? 'Хуулагдлаа!' : 'Конспект хуулах'}</span>
          </button>

          {/* Study note */}
          <button
            onClick={() => onAddNote(course.id, course.title)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Тэмдэглэл хөтлөх</span>
          </button>

          {/* Edit course content */}
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors cursor-pointer"
            title="Хичээлийн бичвэр, сэдэв, вебүүдийг өөрөө шууд засах"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Агуулгыг засах</span>
          </button>

          {/* Bookmark */}
          <button
            onClick={() => onToggleSaveCourse(course.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
              isSaved
                ? 'bg-amber-50 text-amber-800 border-amber-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isSaved ? 'Хадгалсан' : 'Хадгалах'}</span>
          </button>
        </div>
      </div>

      {/* Main Course Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2.5">
          {course.code && <span className="font-mono font-bold text-indigo-700">{course.code}</span>}
          {course.code && <span aria-hidden="true">·</span>}
          <span className="font-medium text-slate-700">{course.category}</span>
          <span aria-hidden="true">·</span>
          <span>{course.level}</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
            {course.usefulWebsites.filter((w) => w.isFree).length} үнэгүй эх сурвалжтай
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          {course.title}
        </h1>

        {course.englishTitle && (
          <p className="text-sm font-medium text-slate-500 italic mb-4">
            {course.englishTitle}
          </p>
        )}

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl mb-6">
          {course.overview}
        </p>

        {/* Academic High-Yield Strategy & Exam Mastery Card */}
        {(course.academicStrategy || course.mentorGreeting || course.examFocus || course.mentorTip) && (
          <div className="bg-gradient-to-r from-indigo-50/90 via-slate-50 to-blue-50/70 border border-indigo-200/80 rounded-xl p-5 mb-4 text-xs sm:text-sm text-slate-800 shadow-2xs">
            <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-indigo-200/50">
              <GraduationCap className="w-5 h-5 text-indigo-700" />
              <span className="font-bold text-indigo-950 text-sm sm:text-base">
                Хичээлийг онц (A) дүнтэй дүүргэх арга зүй & Шалгалтын бэлтгэл
              </span>
            </div>

            <div className="space-y-3">
              {(course.academicStrategy || course.mentorGreeting) && (
                <div>
                  <span className="font-bold text-indigo-900 block mb-1">
                    🎯 Семинар, бие даалт ба хичээл бэлтгэлд төвлөрөх гол зүйлс:
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {course.academicStrategy || course.mentorGreeting}
                  </p>
                </div>
              )}

              {(course.examFocus || course.mentorTip) && (
                <div className="pt-2 border-t border-indigo-100 flex items-start gap-2 text-indigo-950">
                  <Lightbulb className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-indigo-900">Шалгалт (midterm/final)-д онцгойлон анхаарах сэдвүүд: </strong>
                    <span className="text-slate-700">{course.examFocus || course.mentorTip}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-slate-100">
          <button
            onClick={() => setActiveSection('overview')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeSection === 'overview'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Хөтөлбөр & Лекцийн сэдэв
          </button>

          <button
            onClick={() => setActiveSection('skills')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'skills'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Hard & Soft Skills хөтөч</span>
            {totalSkillsCount > 0 && (
              <span className="text-[11px] font-bold bg-white/20 px-1.5 py-0.2 rounded">
                {completedCount}/{totalSkillsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveSection('websites')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'websites'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Үнэгүй веб сайтууд</span>
            <span className="text-[11px] opacity-80">({course.usefulWebsites.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('reading')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'reading'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Сурах бичиг, ном зүй</span>
            <span className="text-[11px] opacity-80">({course.readingMaterials.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('research')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'research'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Library className="w-3.5 h-3.5" />
            <span>Судалгааны эх сурвалж</span>
            <span className="text-[11px] opacity-80">({course.researchSources.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('quiz')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === 'quiz'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Мэдлэг бататгах сорил</span>
            <span className="text-[11px] opacity-80">({course.practiceQuestions.length})</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: Overview & Modules */}
      {activeSection === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Эзэмших гол мэдлэг, чадварууд</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.keyLearningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Семестрийн лекцийн сэдвүүд</span>
            </h2>
            <div className="space-y-4">
              {course.modules.map((mod, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                      7 хоног {mod.week}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 flex-1 ml-2">
                      {mod.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {mod.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="text-[11px] font-semibold text-slate-400 mr-1">Түлхүүр ойлголт:</span>
                    {mod.keyConcepts.map((concept, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[11px] font-medium bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                  {(mod.studyTip || mod.mentorTip) && (
                    <div className="mt-2 text-[11px] text-indigo-950 bg-indigo-50/70 p-2.5 rounded-md border border-indigo-200/60 flex items-start gap-1.5">
                      <span className="text-indigo-600 font-bold shrink-0">💡 Семинар, шалгалтад анхаарах:</span>
                      <span>{mod.studyTip || mod.mentorTip}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Study tips */}
          {course.studyTips && course.studyTips.length > 0 && (
            <div className="bg-gradient-to-br from-indigo-50/60 to-slate-50 rounded-xl border border-indigo-200/80 p-6">
              <h2 className="text-base font-bold text-indigo-950 mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-indigo-600" />
                <span>Энэ хичээлийг онц (A) дүнтэй дүүргэх суралцах зөвлөмжүүд</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                {course.studyTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* SECTION 2: HARD & SOFT SKILLS TRACKER */}
      {activeSection === 'skills' && (
        <div className="space-y-6">
          {/* Progress Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  <span>Ур чадварын хяналт & Шалгах хуудас</span>
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Энэ хичээлийг судалснаар чи дараах техникийн (Hard) болон харилцааны (Soft) ур чадваруудыг эзэмших болно. Өөрийн эзэмшсэн чадваруудаа чеклэж ахицаа хянаарай!
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-indigo-600">{progressPercent}%</span>
                <span className="text-xs text-slate-500 block">({completedCount}/{totalSkillsCount} чадвар)</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hard Skills Panel */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-indigo-600" />
                  <span>Техникийн ур чадварууд (Hard Skills)</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  {(course.hardSkills || []).filter((s) => completedSkills[s]).length} / {(course.hardSkills || []).length}
                </span>
              </div>

              <div className="space-y-2.5">
                {(course.hardSkills || []).map((skill, idx) => {
                  const isChecked = !!completedSkills[skill];
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`w-full p-3 rounded-lg border text-left transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950 font-medium'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      )}
                      <span className="text-xs sm:text-sm leading-snug">{skill}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                💡 <strong>Карьерын ач холбогдол:</strong> Эдгээр техникийн ур чадваруудыг эзэмшээд CV болон LinkedIn дээрээ "Skills" хэсэгт бичвэл ажил олгогчид маш өндрөөр үнэлдэг.
              </div>
            </div>

            {/* Soft Skills Panel */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  <span>Зөөлөн ур чадварууд (Soft Skills)</span>
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  {(course.softSkills || []).filter((s) => completedSkills[s]).length} / {(course.softSkills || []).length}
                </span>
              </div>

              <div className="space-y-2.5">
                {(course.softSkills || []).map((skill, idx) => {
                  const isChecked = !!completedSkills[skill];
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`w-full p-3 rounded-lg border text-left transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950 font-medium'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      )}
                      <span className="text-xs sm:text-sm leading-snug">{skill}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                🤝 <strong>Практик зөвлөмж:</strong> Дан ганц онол биш, шүүмжлэлт сэтгэлгээ, багаар ажиллах, илтгэх чадвараа хөгжүүлснээр аливаа ажлын байр болон төслийн шалгаруулалтад бусдаас онцгой ялгарна.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: USEFUL WEBSITES (100% Free resources highlighted) */}
      {activeSection === 'websites' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'Бүгд' },
                { id: 'free', label: '✓ 100% Үнэгүй вебүүд' },
                { id: 'interactive', label: 'Интерактив / Симуляци' },
                { id: 'course', label: 'Онлайн хичээл' },
                { id: 'tool', label: 'Хэрэгсэл' },
                { id: 'documentation', label: 'Баримт бичиг' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setWebsiteFilter(filter.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    websiteFilter === filter.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              💡 Ихэнх вебүүдийг төлбөргүй ашиглах заавартай
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWebsites.map((site) => {
              const isResourceSaved = user?.savedResourceIds.includes(site.id) || false;
              return (
                <div
                  key={site.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-indigo-300 transition-all shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {site.isFree ? (
                          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full">
                            ✓ {site.freeTierNote || '100% ҮНЭГҮЙ'}
                          </span>
                        ) : (
                          <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                            Төлбөртэй / Хэсэгчлэн
                          </span>
                        )}
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {site.language}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onToggleSaveResource(site.id)}
                        className="p-1 text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
                        title={isResourceSaved ? 'Хадгалснаас хасах' : 'Эх сурвалжийг хадгалах'}
                      >
                        <Bookmark className={`w-4 h-4 ${isResourceSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1.5">
                      {site.title}
                    </h3>

                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {site.description}
                    </p>

                    <div className="text-[11px] text-indigo-700 bg-indigo-50/70 p-2 rounded-lg mb-3">
                      <strong>Хамгийн тохиромжтой:</strong> {site.bestFor}
                    </div>

                    {(site.studyTip || site.mentorTip) && (
                      <div className="text-[11px] text-indigo-950 bg-indigo-50/70 p-2 rounded-lg mb-3 border border-indigo-200/60 flex items-start gap-1.5">
                        <span className="font-bold text-indigo-700 shrink-0">💡 Ашиглах зөвлөмж:</span>
                        <span>{site.studyTip || site.mentorTip}</span>
                      </div>
                    )}
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Сайт руу зочлох</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 4: READING MATERIALS */}
      {activeSection === 'reading' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.readingMaterials.map((mat) => (
              <div
                key={mat.id}
                className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {mat.format}
                    </span>
                    <span>{mat.level}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {mat.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-2.5">
                    Зохиогч: {mat.author}
                  </p>

                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {mat.description}
                  </p>

                  <div className="bg-slate-50 rounded-lg p-2.5 text-xs text-slate-700 space-y-1 mb-4">
                    <span className="font-semibold text-slate-500 block text-[11px]">Зөвлөх бүлгүүд:</span>
                    {mat.keyChapters.map((ch, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-slate-600">
                        <span className="text-indigo-600">•</span>
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span>МУИС / СЭЗИС номын сангаас авах боломжтой</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 5: RESEARCH SOURCES */}
      {activeSection === 'research' && (
        <div className="space-y-4">
          <div className="space-y-4">
            {course.researchSources.map((source) => (
              <div
                key={source.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                    {source.sourceName}
                  </span>
                  <a
                    href={source.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Сан руу очих</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {source.title}
                </h3>

                <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-500">Хайлт хийх түлхүүр үгс:</span>
                    <code className="bg-white px-2 py-0.5 rounded border border-slate-200 text-indigo-700 font-mono">
                      {source.searchQuery}
                    </code>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-500 block mb-1">Санал болгох судалгааны сэдвүүд:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                      {source.suggestedTopics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Citation copy buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500">Эрдэм шинжилгээний ишлэл (Citation):</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCitation(source, 'APA')}
                      className="px-2.5 py-1 text-xs font-medium rounded border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCitationId === source.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>APA 7 хуулах</span>
                    </button>
                    <button
                      onClick={() => handleCopyCitation(source, 'Harvard')}
                      className="px-2.5 py-1 text-xs font-medium rounded border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Harvard хуулах</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 6: FRIEND MENTOR PRACTICE QUIZ */}
      {activeSection === 'quiz' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
            <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              <span>Найз багшийн шалгах сорил</span>
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Энэ хичээлийн гол ойлголтуудыг шалгах тест. Хариултаа сонгоод найз багшийн тайлбарыг уншаарай!
            </p>

            <div className="space-y-6">
              {course.practiceQuestions.map((q, qIndex) => {
                const selectedOption = selectedAnswers[q.id];
                const hasAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/60"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4">
                      {qIndex + 1}. {q.question}
                    </h3>

                    <div className="space-y-2 mb-4">
                      {q.options.map((option, optIdx) => {
                        let btnStyle = 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700';

                        if (hasAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                          } else if (optIdx === selectedOption) {
                            btnStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                          } else {
                            btnStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={hasAnswered}
                            onClick={() => setSelectedAnswers({ ...selectedAnswers, [q.id]: optIdx })}
                            className={`w-full p-3 rounded-lg border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                          >
                            <span>{option}</span>
                            {hasAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {hasAnswered && (
                      <div
                        className={`p-3.5 rounded-lg text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-100/70 text-emerald-950 border border-emerald-300'
                            : 'bg-amber-100/70 text-amber-950 border border-amber-300'
                        }`}
                      >
                        <strong className="block mb-1">
                          {isCorrect ? '🎉 Зөв хариуллаа, маш сайн байна!' : '💡 Найз багшийн тайлбар:'}
                        </strong>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Edit Course Content Modal */}
      <EditCourseModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        course={course}
        onSave={(updated) => {
          onUpdateCourse(updated);
          setIsEditModalOpen(false);
        }}
      />
    </div>
  );
};
