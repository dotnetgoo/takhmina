import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from './translations';
import type { Lang } from './translations';

type AnyTranslation = typeof translations[Lang];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: AnyTranslation;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored && ['en', 'ru', 'uz'].includes(stored)) return stored;
    const browser = navigator.language.slice(0, 2);
    if (browser === 'ru') return 'ru';
    if (browser === 'uz') return 'uz';
    return 'en';
  });

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
