import React, { useState, useEffect } from 'react';
import { CourseResource, UsefulWebsite, ReadingMaterial, SyllabusModule, ResearchSource } from '../types';
import { X, Check, Plus, Trash2, Edit3, Globe, BookMarked, Layers, FileText, CheckCircle2, Wrench, HeartHandshake, Lightbulb } from 'lucide-react';

interface EditCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseResource;
  onSave: (updatedCourse: CourseResource) => void;
}

export const EditCourseModal: React.FC<EditCourseModalProps> = ({
  isOpen,
  onClose,
  course,
  onSave,
}) => {
  const [activeTab, setActiveTab] = useState<'basic' | 'skills' | 'modules' | 'websites' | 'reading' | 'research'>('basic');
  const [editedCourse, setEditedCourse] = useState<CourseResource>(course);

  useEffect(() => {
    if (course) {
      setEditedCourse(JSON.parse(JSON.stringify(course)));
    }
  }, [course, isOpen]);

  if (!isOpen) return null;

  const handleBasicChange = (field: keyof CourseResource, value: any) => {
    setEditedCourse((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Outcomes
  const handleOutcomeChange = (index: number, value: string) => {
    const updated = [...editedCourse.keyLearningOutcomes];
    updated[index] = value;
    handleBasicChange('keyLearningOutcomes', updated);
  };

  const handleAddOutcome = () => {
    handleBasicChange('keyLearningOutcomes', [...editedCourse.keyLearningOutcomes, 'Шинэ ур чадвар']);
  };

  const handleDeleteOutcome = (index: number) => {
    const updated = editedCourse.keyLearningOutcomes.filter((_, i) => i !== index);
    handleBasicChange('keyLearningOutcomes', updated);
  };

  // Hard Skills
  const handleHardSkillChange = (index: number, value: string) => {
    const updated = [...(editedCourse.hardSkills || [])];
    updated[index] = value;
    handleBasicChange('hardSkills', updated);
  };

  const handleAddHardSkill = () => {
    handleBasicChange('hardSkills', [...(editedCourse.hardSkills || []), 'Шинэ техникийн ур чадвар (Hard skill)']);
  };

  const handleDeleteHardSkill = (index: number) => {
    const updated = (editedCourse.hardSkills || []).filter((_, i) => i !== index);
    handleBasicChange('hardSkills', updated);
  };

  // Soft Skills
  const handleSoftSkillChange = (index: number, value: string) => {
    const updated = [...(editedCourse.softSkills || [])];
    updated[index] = value;
    handleBasicChange('softSkills', updated);
  };

  const handleAddSoftSkill = () => {
    handleBasicChange('softSkills', [...(editedCourse.softSkills || []), 'Шинэ зөөлөн ур чадвар (Soft skill)']);
  };

  const handleDeleteSoftSkill = (index: number) => {
    const updated = (editedCourse.softSkills || []).filter((_, i) => i !== index);
    handleBasicChange('softSkills', updated);
  };

  // Modules
  const handleModuleChange = (index: number, field: keyof SyllabusModule, value: any) => {
    const updated = [...editedCourse.modules];
    updated[index] = { ...updated[index], [field]: value };
    handleBasicChange('modules', updated);
  };

  const handleAddModule = () => {
    const nextWeek = `${editedCourse.modules.length + 1}`;
    const newMod: SyllabusModule = {
      week: nextWeek,
      title: 'Шинэ лекцийн сэдэв',
      keyConcepts: ['Үндсэн ойлголт'],
      summary: 'Сэдвийн дэлгэрэнгүй тайлбар',
      mentorTip: 'Энэ сэдвийг сурахад анхаарах зүйл',
    };
    handleBasicChange('modules', [...editedCourse.modules, newMod]);
  };

  const handleDeleteModule = (index: number) => {
    const updated = editedCourse.modules.filter((_, i) => i !== index);
    handleBasicChange('modules', updated);
  };

  // Websites
  const handleWebsiteChange = (index: number, field: keyof UsefulWebsite, value: any) => {
    const updated = [...editedCourse.usefulWebsites];
    updated[index] = { ...updated[index], [field]: value };
    handleBasicChange('usefulWebsites', updated);
  };

  const handleAddWebsite = () => {
    const newSite: UsefulWebsite = {
      id: `site-custom-${Date.now()}`,
      title: 'Шинэ веб сайт',
      url: 'https://',
      category: 'interactive',
      language: 'MN/EN',
      isFree: true,
      freeTierNote: '100% Үнэгүй',
      description: 'Энэ сайтыг хичээлд хэрхэн ашиглах тайлбар',
      bestFor: 'Хэрэг болох чиглэл',
      mentorTip: 'Найз багшийн нууц зөвлөгөө',
    };
    handleBasicChange('usefulWebsites', [...editedCourse.usefulWebsites, newSite]);
  };

  const handleDeleteWebsite = (index: number) => {
    const updated = editedCourse.usefulWebsites.filter((_, i) => i !== index);
    handleBasicChange('usefulWebsites', updated);
  };

  // Reading materials
  const handleReadingChange = (index: number, field: keyof ReadingMaterial, value: any) => {
    const updated = [...editedCourse.readingMaterials];
    updated[index] = { ...updated[index], [field]: value };
    handleBasicChange('readingMaterials', updated);
  };

  const handleAddReading = () => {
    const newBook: ReadingMaterial = {
      id: `book-custom-${Date.now()}`,
      title: 'Шинэ ном, гарын авлага',
      author: 'Зохиогчийн нэр',
      type: 'textbook',
      level: 'Эхлэн суралцагч',
      format: 'Ном',
      description: 'Номын товч агуулга',
      keyChapters: ['1-р бүлэг: Оршил'],
    };
    handleBasicChange('readingMaterials', [...editedCourse.readingMaterials, newBook]);
  };

  const handleDeleteReading = (index: number) => {
    const updated = editedCourse.readingMaterials.filter((_, i) => i !== index);
    handleBasicChange('readingMaterials', updated);
  };

  // Research sources
  const handleResearchChange = (index: number, field: keyof ResearchSource, value: any) => {
    const updated = [...editedCourse.researchSources];
    updated[index] = { ...updated[index], [field]: value };
    handleBasicChange('researchSources', updated);
  };

  const handleAddResearch = () => {
    const newRes: ResearchSource = {
      id: `res-custom-${Date.now()}`,
      title: 'Эрдэм шинжилгээний эх сурвалж',
      sourceName: 'Google Scholar / МУИС сан',
      searchQuery: 'Хайлтын түлхүүр үг',
      directUrl: 'https://scholar.google.com',
      suggestedTopics: ['Судалгааны сэдэв 1'],
      citationGuidance: 'APA 7 ишлэл авах заавар',
    };
    handleBasicChange('researchSources', [...editedCourse.researchSources, newRes]);
  };

  const handleDeleteResearch = (index: number) => {
    const updated = editedCourse.researchSources.filter((_, i) => i !== index);
    handleBasicChange('researchSources', updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedCourse);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-course-modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <h2 id="edit-course-modal-title" className="text-base font-bold text-slate-900">
                Хичээлийн бичвэр, мэдээллийг өөрчлөх
              </h2>
              <p className="text-xs text-slate-500">
                {editedCourse.title} • Гарчиг, тойм, ур чадварууд, лекцийн сэдэв, вебүүдийг хүссэнээрээ засах боломжтой
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer"
            aria-label="Хаах"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Edit Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-slate-200 bg-white overflow-x-auto shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('basic')}
            className={`px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'basic'
                ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            Үндсэн мэдээлэл & Тойм
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('skills')}
            className={`px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeTab === 'skills'
                ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            <Wrench className="w-3 h-3" />
            <span>Hard & Soft Skills ({(editedCourse.hardSkills?.length || 0) + (editedCourse.softSkills?.length || 0)})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('modules')}
            className={`px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'modules'
                ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            Лекцийн сэдвүүд ({editedCourse.modules.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('websites')}
            className={`px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'websites'
                ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            Веб сайтууд ({editedCourse.usefulWebsites.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('reading')}
            className={`px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'reading'
                ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            Сурах бичиг, ном ({editedCourse.readingMaterials.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('research')}
            className={`px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'research'
                ? 'text-indigo-600 border-indigo-600 bg-indigo-50/50'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            Судалгааны эх сурвалж ({editedCourse.researchSources.length})
          </button>
        </div>

        {/* Tab Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* TAB 1: Basic Info */}
          {activeTab === 'basic' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Хичээлийн нэр (Монгол хэлээр) *
                  </label>
                  <input
                    type="text"
                    required
                    value={editedCourse.title}
                    onChange={(e) => handleBasicChange('title', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Хичээлийн код
                  </label>
                  <input
                    type="text"
                    value={editedCourse.code || ''}
                    onChange={(e) => handleBasicChange('code', e.target.value)}
                    placeholder="CS201, ECON101..."
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Англи нэр
                  </label>
                  <input
                    type="text"
                    value={editedCourse.englishTitle || ''}
                    onChange={(e) => handleBasicChange('englishTitle', e.target.value)}
                    placeholder="Course English Name"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Салбар чиглэл
                  </label>
                  <select
                    value={editedCourse.faculty}
                    onChange={(e) => handleBasicChange('faculty', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
                  >
                    <option value="business">Эдийн засаг, Бизнес, Санхүү</option>
                    <option value="ai_business">Хиймэл оюун ухаан / AI хосолсон</option>
                    <option value="law">Эрх зүй & Хууль тогтоомж</option>
                    <option value="social_innovation">Нийгмийн инноваци & Хөгжил</option>
                    <option value="stem">Инженер & МТ (STEM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Суралцах курс / Түвшин
                  </label>
                  <input
                    type="text"
                    value={editedCourse.level}
                    onChange={(e) => handleBasicChange('level', e.target.value)}
                    placeholder="Жишээ: 1-2-р курс"
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Хичээлийн ерөнхий тойм тайлбар
                </label>
                <textarea
                  rows={3}
                  value={editedCourse.overview}
                  onChange={(e) => handleBasicChange('overview', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900 resize-none leading-relaxed"
                />
              </div>

              {/* Friend-Mentor Greeting & Tip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200">
                <div>
                  <label className="block text-xs font-bold text-amber-900 mb-1">
                    👨‍🏫 Найз багшийн мэндчилгээ
                  </label>
                  <textarea
                    rows={2}
                    value={editedCourse.mentorGreeting || ''}
                    onChange={(e) => handleBasicChange('mentorGreeting', e.target.value)}
                    placeholder="Сайн уу найз минь! Энэ хичээлээр..."
                    className="w-full px-3 py-1.5 text-xs bg-white border border-amber-200 rounded-lg text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-amber-900 mb-1">
                    💡 Найз багшийн алтан зөвлөгөө
                  </label>
                  <textarea
                    rows={2}
                    value={editedCourse.mentorTip || ''}
                    onChange={(e) => handleBasicChange('mentorTip', e.target.value)}
                    placeholder="Шалгалт дээр хамгийн их анхаарах зүйл..."
                    className="w-full px-3 py-1.5 text-xs bg-white border border-amber-200 rounded-lg text-slate-800"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HARD & SOFT SKILLS */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              {/* Hard Skills */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-indigo-600" />
                    <span>Техникийн ур чадварууд (Hard Skills)</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleAddHardSkill}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Hard skill нэмэх
                  </button>
                </div>

                <div className="space-y-2">
                  {(editedCourse.hardSkills || []).map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleHardSkillChange(sIdx, e.target.value)}
                        className="flex-1 px-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteHardSkill(sIdx)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg cursor-pointer"
                        title="Устгах"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-emerald-600" />
                    <span>Зөөлөн ур чадварууд (Soft Skills)</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleAddSoftSkill}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Soft skill нэмэх
                  </button>
                </div>

                <div className="space-y-2">
                  {(editedCourse.softSkills || []).map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSoftSkillChange(sIdx, e.target.value)}
                        className="flex-1 px-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteSoftSkill(sIdx)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg cursor-pointer"
                        title="Устгах"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Modules */}
          {activeTab === 'modules' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500">
                  Нийт {editedCourse.modules.length} долоо хоногийн сэдэв
                </span>
                <button
                  type="button"
                  onClick={handleAddModule}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Шинэ сэдэв нэмэх
                </button>
              </div>

              <div className="space-y-3">
                {editedCourse.modules.map((mod, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1">
                        <input
                          type="text"
                          value={mod.week}
                          onChange={(e) => handleModuleChange(idx, 'week', e.target.value)}
                          placeholder="7 хоног"
                          className="w-24 px-2 py-1 text-xs font-bold text-indigo-700 bg-white border border-slate-200 rounded text-center"
                        />
                        <input
                          type="text"
                          value={mod.title}
                          onChange={(e) => handleModuleChange(idx, 'title', e.target.value)}
                          placeholder="Сэдвийн гарчиг"
                          className="flex-1 px-3 py-1 text-sm font-bold bg-white border border-slate-200 rounded-lg text-slate-900"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteModule(idx)}
                        className="p-1 text-slate-400 hover:text-rose-600 rounded cursor-pointer"
                        title="Устгах"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <textarea
                      rows={2}
                      value={mod.summary}
                      onChange={(e) => handleModuleChange(idx, 'summary', e.target.value)}
                      placeholder="Сэдвийн дэлгэрэнгүй тайлбар..."
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-700 resize-none"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={mod.keyConcepts.join(', ')}
                        onChange={(e) =>
                          handleModuleChange(
                            idx,
                            'keyConcepts',
                            e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                          )
                        }
                        placeholder="Түлхүүр ойлголтууд (таслалаар тусгаарлах)"
                        className="px-3 py-1 text-xs bg-white border border-slate-200 rounded text-slate-700"
                      />
                      <input
                        type="text"
                        value={mod.mentorTip || ''}
                        onChange={(e) => handleModuleChange(idx, 'mentorTip', e.target.value)}
                        placeholder="Найз багшийн зөвлөгөө..."
                        className="px-3 py-1 text-xs bg-amber-50/50 border border-amber-200 rounded text-amber-900"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Websites */}
          {activeTab === 'websites' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500">
                  Нийт {editedCourse.usefulWebsites.length} веб эх сурвалж
                </span>
                <button
                  type="button"
                  onClick={handleAddWebsite}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Шинэ веб нэмэх
                </button>
              </div>

              <div className="space-y-3">
                {editedCourse.usefulWebsites.map((site, idx) => (
                  <div key={site.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={site.title}
                        onChange={(e) => handleWebsiteChange(idx, 'title', e.target.value)}
                        placeholder="Веб сайтын нэр"
                        className="flex-1 px-3 py-1.5 text-sm font-bold bg-white border border-slate-200 rounded-lg text-slate-900"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteWebsite(idx)}
                        className="p-1 text-slate-400 hover:text-rose-600 rounded cursor-pointer"
                        title="Устгах"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="url"
                        value={site.url}
                        onChange={(e) => handleWebsiteChange(idx, 'url', e.target.value)}
                        placeholder="https://..."
                        className="px-3 py-1 text-xs bg-white border border-slate-200 rounded text-indigo-600 font-mono"
                      />
                      <input
                        type="text"
                        value={site.freeTierNote || (site.isFree ? '100% Үнэгүй' : 'Төлбөртэй')}
                        onChange={(e) => handleWebsiteChange(idx, 'freeTierNote', e.target.value)}
                        placeholder="Үнэгүй эсэх (жишээ: 100% Үнэгүй)"
                        className="px-3 py-1 text-xs bg-white border border-slate-200 rounded text-emerald-700 font-semibold"
                      />
                      <input
                        type="text"
                        value={site.bestFor}
                        onChange={(e) => handleWebsiteChange(idx, 'bestFor', e.target.value)}
                        placeholder="Хамгийн тохиромжтой зүйл"
                        className="px-3 py-1 text-xs bg-white border border-slate-200 rounded text-slate-700"
                      />
                    </div>

                    <textarea
                      rows={2}
                      value={site.description}
                      onChange={(e) => handleWebsiteChange(idx, 'description', e.target.value)}
                      placeholder="Сайтын тайлбар ба хэрхэн ашиглах..."
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-700 resize-none"
                    />

                    <input
                      type="text"
                      value={site.mentorTip || ''}
                      onChange={(e) => handleWebsiteChange(idx, 'mentorTip', e.target.value)}
                      placeholder="Найз багшийн нууц зөвлөгөө (жишээ: Оюутны эрхээр үнэгүй авах арга)..."
                      className="w-full px-3 py-1 text-xs bg-amber-50 border border-amber-200 rounded text-amber-900"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Reading */}
          {activeTab === 'reading' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500">
                  Нийт {editedCourse.readingMaterials.length} сурах бичиг, ном
                </span>
                <button
                  type="button"
                  onClick={handleAddReading}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Ном нэмэх
                </button>
              </div>

              <div className="space-y-3">
                {editedCourse.readingMaterials.map((mat, idx) => (
                  <div key={mat.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={mat.title}
                        onChange={(e) => handleReadingChange(idx, 'title', e.target.value)}
                        placeholder="Номын нэр"
                        className="flex-1 px-3 py-1.5 text-sm font-bold bg-white border border-slate-200 rounded-lg text-slate-900"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteReading(idx)}
                        className="p-1 text-slate-400 hover:text-rose-600 rounded cursor-pointer"
                        title="Устгах"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={mat.author}
                        onChange={(e) => handleReadingChange(idx, 'author', e.target.value)}
                        placeholder="Зохиогч"
                        className="px-3 py-1 text-xs bg-white border border-slate-200 rounded text-slate-700"
                      />
                      <input
                        type="text"
                        value={mat.format}
                        onChange={(e) => handleReadingChange(idx, 'format', e.target.value)}
                        placeholder="Формат (Ном, PDF...)"
                        className="px-3 py-1 text-xs bg-white border border-slate-200 rounded text-slate-700"
                      />
                    </div>

                    <textarea
                      rows={2}
                      value={mat.description}
                      onChange={(e) => handleReadingChange(idx, 'description', e.target.value)}
                      placeholder="Номын агуулгын тайлбар..."
                      className="w-full px-3 py-1 text-xs bg-white border border-slate-200 rounded text-slate-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: Research */}
          {activeTab === 'research' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500">
                  Нийт {editedCourse.researchSources.length} судалгааны сан
                </span>
                <button
                  type="button"
                  onClick={handleAddResearch}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Эх сурвалж нэмэх
                </button>
              </div>

              <div className="space-y-3">
                {editedCourse.researchSources.map((res, idx) => (
                  <div key={res.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={res.title}
                        onChange={(e) => handleResearchChange(idx, 'title', e.target.value)}
                        placeholder="Эх сурвалжийн нэр"
                        className="flex-1 px-3 py-1.5 text-sm font-bold bg-white border border-slate-200 rounded-lg text-slate-900"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteResearch(idx)}
                        className="p-1 text-slate-400 hover:text-rose-600 rounded cursor-pointer"
                        title="Устгах"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={res.sourceName}
                        onChange={(e) => handleResearchChange(idx, 'sourceName', e.target.value)}
                        placeholder="Сан (жишээ: Google Scholar, МУИС)"
                        className="px-3 py-1 text-xs bg-white border border-slate-200 rounded text-slate-700"
                      />
                      <input
                        type="text"
                        value={res.searchQuery}
                        onChange={(e) => handleResearchChange(idx, 'searchQuery', e.target.value)}
                        placeholder="Хайлтын түлхүүр үг"
                        className="px-3 py-1 text-xs bg-white border border-slate-200 rounded font-mono text-indigo-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
            <span className="text-[11px] text-slate-400">
              Өөрчлөлт таны төхөөрөмж дээр автоматаар хадгалагдана.
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                Болих
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Өөрчлөлтийг хадгалах</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
