
import React from 'react';
import { QuizResult } from '../types';
import { CATEGORY_MAPPINGS } from '../constants';

interface ResultProps {
  result: QuizResult;
  onRestart: () => void;
}

export const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="glass-card p-8 rounded-3xl shadow-xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Твой результат готов!</h1>
        <p className="text-slate-500 mb-8">Мы проанализировали твои ответы и подобрали наиболее подходящие направления.</p>
        
        <div className="flex flex-wrap justify-center gap-2">
          {result.topCategories.map(cat => (
            <span key={cat} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-100">
              {CATEGORY_MAPPINGS.find(m => m.letter === cat)?.label}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800 ml-2">Рекомендуемые ВУЗы Москвы</h2>
        {result.recommendedUnis.map((item, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-tighter mb-1 block">
                  {item.directionName}
                </span>
                <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {item.uni.name}
                </h4>
                {item.uni.faculty && (
                  <p className="text-slate-500 text-sm mt-1">{item.uni.faculty}</p>
                )}
              </div>
              <div className="bg-slate-50 p-2 rounded-lg text-slate-400 group-hover:text-indigo-400 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="w-full py-5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Пройти заново</span>
      </button>
    </div>
  );
};
