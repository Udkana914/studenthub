import React, { useState, useEffect } from 'react';
import { StudyNote } from '../types';
import { X, FileText, Check } from 'lucide-react';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId?: string;
  courseTitle?: string;
  onSaveNote: (note: StudyNote) => void;
}

export const NoteModal: React.FC<NoteModalProps> = ({
  isOpen,
  onClose,
  courseId = 'general',
  courseTitle = 'Ерөнхий тэмдэглэл',
  onSaveNote,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setContent('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;

    const note: StudyNote = {
      id: `note-${Date.now()}`,
      courseId,
      courseTitle,
      title: title.trim() || 'Гарчиггүй тэмдэглэл',
      content: content.trim(),
      createdAt: new Date().toLocaleDateString('mn-MN', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    onSaveNote(note);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="note-modal-title"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div>
            <h2 id="note-modal-title" className="text-base font-bold text-slate-900">
              Хичээлийн тэмдэглэл хөтлөх
            </h2>
            <p className="text-[11px] text-slate-500">
              Холбогдох хичээл: {courseTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer"
            aria-label="Хаах"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Тэмдэглэлийн гарчиг
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Жишээ: 4-р лекц: Балансын бүтэц, Шалгалтын чухал томьёо"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Агуулга / Конспект
            </label>
            <textarea
              rows={5}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Гол томьёо, лекцийн чухал санаа, шалгалтад цээжлэх зүйлсээ бичнэ үү..."
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900 resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Болих
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Хадгалах</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
