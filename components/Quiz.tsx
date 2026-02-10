
import React from 'react';
import { Question, CategoryType } from '../types';

interface QuizProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onSelect: (choice: CategoryType) => void;
}

export const Quiz: React.FC<QuizProps> = ({ question, currentIndex, totalQuestions, onSelect }) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="glass-card p-8 rounded-3xl shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider">Вопрос {currentIndex + 1} из {totalQuestions}</span>
          <span className="text-slate-400 text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full gradient-bg transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onSelect(choice.id)}
            className="w-full text-left p-5 rounded-2xl border-2 border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-200 group flex items-center"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-indigo-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 font-bold mr-4 shrink-0 transition-colors">
              {choice.id}
            </div>
            <span className="text-slate-700 group-hover:text-slate-900 font-medium leading-snug">
              {choice.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
