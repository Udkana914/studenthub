import React, { useState } from 'react';
import { requestConceptExplanation, ConceptExplanationResult } from '../services/api';
import { X, Sparkles, Send, Lightbulb, AlertTriangle, HelpCircle, Check, Loader2 } from 'lucide-react';

interface ConceptExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

export const ConceptExplainerModal: React.FC<ConceptExplainerModalProps> = ({
  isOpen,
  onClose,
  courseTitle,
}) => {
  const [conceptQuery, setConceptQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConceptExplanationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showSelfCheckAnswer, setShowSelfCheckAnswer] = useState(false);

  if (!isOpen) return null;

  const handleExplain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!conceptQuery.trim()) return;

    setLoading(true);
    setError(null);
    setShowSelfCheckAnswer(false);

    try {
      const data = await requestConceptExplanation(courseTitle, conceptQuery.trim());
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Ойлголтыг тайлбарлахад алдаа гарлаа. Дахин оролдоно уу.');
    } finally {
      setLoading(false);
    }
  };

  const sampleConcepts = [
    'Incoterms 2020 дээр FOB ба CIF хоёрын ялгаа юу вэ?',
    'Балансын тэгшитгэлд Дебет ба Кредитийг хэрхэн андуурахгүй цээжлэх вэ?',
    'Маркетингийн юүлүүр (AIDA Funnel) бодит амьдрал дээр яаж ажилладаг вэ?',
    'NPV яагаад 0-ээс их байвал хөрөнгө оруулалтыг хийдэг вэ?',
    'Дизайн сэтгэлгээний Эмпати алхам яагаад хамгийн чухал вэ?',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="explainer-modal-title"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 id="explainer-modal-title" className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                <span>Найз багшаас асуух</span>
                <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
                  Ойлголт тайлбарлагч
                </span>
              </h2>
              <p className="text-[11px] text-slate-500">
                Хичээл: {courseTitle || 'Ерөнхий хичээл'} • Хэцүү сэдвээ энгийн амьдралын жишээгээр тайлбарлуулаарай
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

        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Query input */}
          <form onSubmit={handleExplain} className="relative">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={conceptQuery}
                onChange={(e) => setConceptQuery(e.target.value)}
                placeholder="Ойлгомжгүй томьёо, сэдэв, нэр томьёогоо бичнэ үү..."
                className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
              />
              <button
                type="submit"
                disabled={loading || !conceptQuery.trim()}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{loading ? 'Бодож байна...' : 'Асуух'}</span>
              </button>
            </div>

            {/* Quick samples */}
            <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
              <span className="text-[11px] font-semibold text-slate-400">Жишээ асуултууд:</span>
              {sampleConcepts.slice(0, 3).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setConceptQuery(item)}
                  className="text-[11px] text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100/70 px-2 py-0.5 rounded transition-colors cursor-pointer text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </form>

          {error && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {result && (
            <div className="space-y-4 pt-2 border-t border-slate-100">
              {/* Concept Title */}
              <div className="flex items-center gap-2">
                <span className="text-lg">💡</span>
                <h3 className="text-base font-bold text-slate-900">{result.conceptTitle}</h3>
              </div>

              {/* 1. Simple Definition */}
              <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs sm:text-sm text-indigo-950">
                <strong className="block text-indigo-900 font-bold mb-1">
                  Найз багшийн энгийн тодорхойлолт:
                </strong>
                <p className="leading-relaxed">{result.simpleDefinition}</p>
              </div>

              {/* 2. Real World Analogy */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950">
                <strong className="block text-amber-900 font-bold mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Бодит амьдрал дээрх зүйрлэл:</span>
                </strong>
                <p className="leading-relaxed">{result.realWorldAnalogy}</p>
              </div>

              {/* 3. Step-by-Step Breakdown */}
              {result.stepByStepExplanation && result.stepByStepExplanation.length > 0 && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <strong className="block text-xs font-bold text-slate-900 mb-2">
                    Алхамчилсан тайлбар:
                  </strong>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {result.stepByStepExplanation.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Concrete Example */}
              {result.concreteExample && (
                <div className="p-3.5 bg-slate-100/80 rounded-xl text-xs text-slate-800">
                  <strong className="block font-semibold text-slate-900 mb-1">Кейс эсвэл тоон жишээ:</strong>
                  <p className="whitespace-pre-line leading-relaxed">{result.concreteExample}</p>
                </div>
              )}

              {/* 5. Common Mistakes */}
              {result.commonMistakes && (
                <div className="p-3.5 bg-rose-50/60 border border-rose-200 rounded-xl text-xs text-rose-950">
                  <strong className="block font-bold text-rose-900 mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Шалгалт дээр хамгийн их алддаг алдаа ба анхаарах зүйл:</span>
                  </strong>
                  <p className="leading-relaxed">{result.commonMistakes}</p>
                </div>
              )}

              {/* 6. Quick Self-Check */}
              {result.quickSelfCheckQuestion && (
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <strong className="block text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-indigo-600" />
                    <span>Өөрийгөө шалгах найз багшийн асуулт:</span>
                  </strong>
                  <p className="text-xs text-slate-700 mb-3">{result.quickSelfCheckQuestion.question}</p>

                  {!showSelfCheckAnswer ? (
                    <button
                      type="button"
                      onClick={() => setShowSelfCheckAnswer(true)}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline cursor-pointer"
                    >
                      Хариултыг харах →
                    </button>
                  ) : (
                    <div className="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-950 border border-emerald-200 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Зөв хариу:</strong> {result.quickSelfCheckQuestion.answer}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
