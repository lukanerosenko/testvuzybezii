
import React, { useState, useCallback } from 'react';
import { Layout } from './components/Layout';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { QUESTIONS, CATEGORY_MAPPINGS, DIRECTIONS } from './constants';
import { CategoryType, QuizResult, University, Direction } from './types';

function App() {
  const [step, setStep] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<CategoryType[]>([]);
  const [finalResult, setFinalResult] = useState<QuizResult | null>(null);

  const calculateResults = useCallback((finalAnswers: CategoryType[]): QuizResult => {
    const scores: Record<CategoryType, number> = {
      [CategoryType.A]: 0,
      [CategoryType.B]: 0,
      [CategoryType.C]: 0,
      [CategoryType.D]: 0,
      [CategoryType.E]: 0,
      [CategoryType.F]: 0,
    };

    finalAnswers.forEach(ans => {
      scores[ans] += 1;
    });

    const maxScore = Math.max(...Object.values(scores));
    const topCategories = (Object.keys(scores) as CategoryType[]).filter(
      cat => scores[cat] === maxScore
    );

    // Scoring logic according to User requirement:
    // If 1 category is top -> 3 unis total
    // If 2 categories are top -> 2 unis each (total 4) or balanced
    // If 3+ categories -> 1 uni from each
    const recommendedUnis: { uni: University; directionName: string }[] = [];
    
    let uniPerCategory = topCategories.length === 1 ? 3 : topCategories.length === 2 ? 2 : 1;

    topCategories.forEach(cat => {
      const mapping = CATEGORY_MAPPINGS.find(m => m.letter === cat);
      if (!mapping) return;

      // Pool all directions and universities for this category
      const pool: { uni: University; dir: Direction }[] = [];
      mapping.directions.forEach(dirId => {
        const dir = DIRECTIONS[dirId];
        if (dir) {
          dir.universities.forEach(uni => {
            pool.push({ uni, dir });
          });
        }
      });

      // Randomly (or sequentially) pick unis from the pool
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, uniPerCategory);
      
      selected.forEach(item => {
        recommendedUnis.push({
          uni: item.uni,
          directionName: item.dir.name
        });
      });
    });

    return {
      topCategories,
      scores,
      recommendedUnis
    };
  }, []);

  const handleChoiceSelect = (choice: CategoryType) => {
    const newAnswers = [...answers, choice];
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const result = calculateResults(newAnswers);
      setFinalResult(result);
      setStep('result');
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setFinalResult(null);
    setStep('quiz');
  };

  return (
    <Layout>
      {step === 'start' && (
        <div className="glass-card p-10 rounded-[2.5rem] shadow-2xl text-center animate-in fade-in zoom-in duration-700">
          <div className="inline-block p-4 bg-indigo-50 rounded-3xl mb-6">
            <svg className="w-16 h-16 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-slate-800 mb-4 leading-tight">
            Найди профессию <br/>
            <span className="text-gradient">своей мечты</span>
          </h1>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md mx-auto">
            Ответь на 6 простых вопросов, и мы подскажем направления обучения и лучшие ВУЗы Москвы для тебя.
          </p>
          <button
            onClick={() => setStep('quiz')}
            className="group relative w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-indigo-200 overflow-hidden"
          >
            <div className="absolute inset-0 w-3 bg-white/20 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[1000%] transition-transform duration-1000 ease-in-out"></div>
            Начать тестирование
          </button>
          <div className="mt-8 flex justify-center space-x-6">
             <div className="text-center">
               <div className="text-indigo-600 font-bold text-xl">11</div>
               <div className="text-slate-400 text-[10px] uppercase font-bold">Направлений</div>
             </div>
             <div className="w-px h-8 bg-slate-100 self-center"></div>
             <div className="text-center">
               <div className="text-indigo-600 font-bold text-xl">30+</div>
               <div className="text-slate-400 text-[10px] uppercase font-bold">ВУЗов</div>
             </div>
             <div className="w-px h-8 bg-slate-100 self-center"></div>
             <div className="text-center">
               <div className="text-indigo-600 font-bold text-xl">AI</div>
               <div className="text-slate-400 text-[10px] uppercase font-bold">Анализ</div>
             </div>
          </div>
        </div>
      )}

      {step === 'quiz' && (
        <Quiz
          question={QUESTIONS[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={QUESTIONS.length}
          onSelect={handleChoiceSelect}
        />
      )}

      {step === 'result' && finalResult && (
        <Result result={finalResult} onRestart={handleRestart} />
      )}
    </Layout>
  );
}

export default App;
