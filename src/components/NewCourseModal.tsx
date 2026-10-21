import React, { useState } from 'react';
import { CourseResource } from '../types';
import { requestCourseResources } from '../services/api';
import { X, Sparkles, Loader2, BookOpen, AlertCircle } from 'lucide-react';

interface NewCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseName?: string;
  onCourseCreated: (course: CourseResource) => void;
}

export const NewCourseModal: React.FC<NewCourseModalProps> = ({
  isOpen,
  onClose,
  initialCourseName = '',
  onCourseCreated,
}) => {
  const [courseName, setCourseName] = useState(initialCourseName);
  const [faculty, setFaculty] = useState<'stem' | 'business' | 'medicine' | 'law' | 'humanities' | 'engineering'>('stem');
  const [level, setLevel] = useState('2-р курс');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseName.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const generated = await requestCourseResources(courseName.trim(), faculty, level);
      onCourseCreated(generated);
      onClose();
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Хичээлийн мэдээлэл үүсгэхэд алдаа гарлаа. Та дахин оролдоно уу.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="new-course-modal-title"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 id="new-course-modal-title" className="text-base font-bold text-slate-900">
                Шинэ хичээлийн нөөц үүсгэх
              </h2>
              <p className="text-[11px] text-slate-500">
                Хичээлийн нэрээ оруулж, цогц хөтөлбөр, веб сайтууд, ном зүйг монгол хэл дээр нэгтгэн бэлтгүүлэх
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={loading}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer"
            aria-label="Хаах"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Судалж буй хичээлийн нэр *
            </label>
            <input
              type="text"
              required
              disabled={loading}
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Жишээ: Биохимийн үндэс, Машин сургалт, Криминологи, Иргэний эрх зүй..."
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Салбар чиглэл
              </label>
              <select
                disabled={loading}
                value={faculty}
                onChange={(e) => setFaculty(e.target.value as any)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              >
                <option value="business">Эдийн засаг, Бизнес, Санхүү</option>
                <option value="ai_business">Хиймэл оюун ухаан / AI хосолсон</option>
                <option value="law">Хууль зүй & Эрх зүй</option>
                <option value="social_innovation">Нийгмийн инноваци & Хөгжил</option>
                <option value="stem">Инженер & Компьютер (STEM)</option>
                <option value="humanities">Нийгэм & Хүмүүнлэг</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Түвшин
              </label>
              <select
                disabled={loading}
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              >
                <option value="1-р курс">1-р курс (Суурь)</option>
                <option value="2-р курс">2-р курс (Мэргэжлийн суурь)</option>
                <option value="3-р курс">3-р курс (Мэргэшүүлэх)</option>
                <option value="4-р курс">4-р курс (Төгсөх анги)</option>
                <option value="Магистр">Магистрант</option>
              </select>
            </div>
          </div>

          {loading && (
            <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center gap-3 text-xs text-indigo-900">
              <Loader2 className="w-5 h-5 text-indigo-600 animate-spin shrink-0" />
              <div>
                <p className="font-semibold">Академик нөөцийг бэлтгэж байна...</p>
                <p className="text-indigo-700 text-[11px]">
                  Лекцийн сэдвүүд, веб сайтууд, ном зүй, судалгааны сэдвүүдийг монгол хэл дээр нэгтгэж байна.
                </p>
              </div>
            </div>
          )}

          <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              disabled={loading}
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Болих
            </button>
            <button
              type="submit"
              disabled={loading || !courseName.trim()}
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-50 rounded-lg transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Үүсгэж байна...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Хичээлийн нөөцийг бэлтгэх</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
