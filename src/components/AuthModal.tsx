import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { UNIVERSITIES } from '../data/seedCourses';
import { validateStudentEmail } from '../utils/courseUtils';
import { X, Mail, School, BookOpen, CheckCircle, LogOut } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onSaveUser: (user: UserProfile) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onSaveUser,
  onLogout,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('Монгол Улсын Их Сургууль (МУИС)');
  const [major, setMajor] = useState('Програм хангамж');
  const [year, setYear] = useState('2-р курс');
  const [emailHint, setEmailHint] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
      setName(currentUser.name);
      setUniversity(currentUser.university);
      setMajor(currentUser.major);
      setYear(String(currentUser.year));
    } else {
      setEmail('');
      setName('');
      setUniversity('Монгол Улсын Их Сургууль (МУИС)');
      setMajor('Програм хангамж');
      setYear('2-р курс');
    }
    setError(null);
  }, [currentUser, isOpen]);

  if (!isOpen) return null;

  const handleEmailChange = (val: string) => {
    setEmail(val);
    setError(null);
    const check = validateStudentEmail(val);
    if (check.universityHint) {
      setEmailHint(check.universityHint);
      setUniversity(check.universityHint);
    } else {
      setEmailHint(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const check = validateStudentEmail(email);
    if (!check.isValid) {
      setError('Имэйл хаягаа зөв оруулна уу (жишээ: student@num.edu.mn, udka.tinybee@gmail.com).');
      return;
    }

    const trimmedName = name.trim() || email.split('@')[0];

    const profile: UserProfile = {
      email: email.trim().toLowerCase(),
      name: trimmedName,
      university,
      major: major.trim() || 'Ерөнхий чиглэл',
      year,
      savedCourseIds: currentUser?.savedCourseIds || ['dsa-201', 'micro-101'],
      savedResourceIds: currentUser?.savedResourceIds || ['visu-algo', 'mru-econ'],
    };

    onSaveUser(profile);
    onClose();
  };

  const handleQuickDemoLogin = (emailPreset = 'udka.tinybee@gmail.com', namePreset = 'Ундрах (Оюутан)') => {
    const profile: UserProfile = {
      email: emailPreset,
      name: namePreset,
      university: 'Монгол Улсын Их Сургууль (МУИС)',
      major: 'Мэдээллийн технологи & Компьютерийн ухаан',
      year: '3-р курс',
      savedCourseIds: currentUser?.savedCourseIds || ['dsa-201', 'micro-101'],
      savedResourceIds: currentUser?.savedResourceIds || ['visu-algo', 'phet-physics'],
    };
    onSaveUser(profile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div>
            <h2 id="auth-modal-title" className="text-lg font-bold text-slate-900">
              {currentUser ? 'Оюутны профайл' : 'Оюутны цахим үнэмлэхээр нэвтрэх'}
            </h2>
            <p className="text-xs text-slate-500">
              Хичээлийнхээ хэрэгтэй материал, эх сурвалжийг хадгалах, өөртөө тохируулах
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
          {error && (
            <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Оюутны имэйл хаяг *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="жишээ: udka.tinybee@gmail.com, student@num.edu.mn"
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              />
            </div>
            {emailHint && (
              <p className="mt-1 text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Илэрсэн их сургууль: {emailHint}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Оюутны нэр
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Жишээ: Ундрах"
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Суралцаж буй түвшин
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              >
                <option value="1-р курс">1-р курс (Бакалавр)</option>
                <option value="2-р курс">2-р курс (Бакалавр)</option>
                <option value="3-р курс">3-р курс (Бакалавр)</option>
                <option value="4-р курс">4-р курс (Бакалавр)</option>
                <option value="Магистрант">Магистрант / Докторант</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Их, дээд сургууль
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <School className="w-4 h-4" />
              </div>
              <select
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              >
                {UNIVERSITIES.map((u) => (
                  <option key={u.id} value={u.name}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Мэргэжил / Хөтөлбөр
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                placeholder="Жишээ: Програм хангамж, Эдийн засаг, Ерөнхий анагаах"
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
            {currentUser ? (
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Гарах</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleQuickDemoLogin()}
                className="px-3 py-2 text-xs font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
              >
                Туршилтын эрхээр шууд орох
              </button>
            )}

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
                className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                {currentUser ? 'Шинэчлэх' : 'Нэвтрэх'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
