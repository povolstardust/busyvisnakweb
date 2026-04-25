import { cs } from './cs';
import { en } from './en';

export type Lang = 'cs' | 'en';

const translations = { cs, en } as const;

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment === 'en') return 'en';
  return 'cs';
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const path = url.pathname;
  if (targetLang === 'en') {
    if (path.startsWith('/en')) return path;
    return '/en' + (path === '/' ? '' : path);
  } else {
    if (path.startsWith('/en/')) return path.slice(3) || '/';
    if (path === '/en') return '/';
    return path;
  }
}

export function getTranslations(lang: Lang) {
  return translations[lang];
}
