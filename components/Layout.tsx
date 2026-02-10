
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-4xl flex justify-between items-center mb-12">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
            PN
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-800">ProfNavigator</span>
        </div>
        <div className="hidden md:block text-slate-500 text-sm font-medium">
          Твой путь к успеху начинается здесь
        </div>
      </header>
      <main className="w-full max-w-2xl">
        {children}
      </main>
      <footer className="mt-auto pt-12 pb-6 text-slate-400 text-xs">
        &copy; {new Date().getFullYear()} ProfNavigator. Все права защищены.
      </footer>
    </div>
  );
};
