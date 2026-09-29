/**
 * 다국어(KO/EN) 지원.
 * - 주소가 언어를 가집니다: /ko/platform/humimic, /en/platform/humimic
 * - 콘텐츠는 `{ ko, en }` 한 쌍으로 두고 useLocalized 로 현재 언어 쪽을 꺼냅니다.
 * - 첫 방문은 저장된 선택 → 브라우저 언어 순으로 정합니다.
 */
import { useParams } from "react-router";

export const LANGS = ["ko", "en"] as const;
export type Lang = (typeof LANGS)[number];

/** 언어별 한 쌍. en 을 `typeof ko` 로 두면 두 언어의 구조가 어긋날 때 타입 오류가 납니다. */
export type Localized<T> = Record<Lang, T>;

const STORAGE_KEY = "lang";

export function isLang(value: string | undefined): value is Lang {
  return LANGS.includes(value as Lang);
}

export function rememberLang(lang: Lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // 저장이 막힌 환경(시크릿 창 등)에서는 기억하지 않을 뿐입니다.
  }
}

export function detectLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) ?? undefined;
    if (isLang(stored)) return stored;
  } catch {
    // 무시하고 브라우저 언어로
  }
  return navigator.languages.some((l) => l.toLowerCase().startsWith("ko")) ? "ko" : "en";
}

/** 현재 주소의 언어. 언어 라우트 밖에서는 ko. */
export function useLang(): Lang {
  const { lang } = useParams();
  return isLang(lang) ? lang : "ko";
}

export function useLocalized<T>(content: Localized<T>): T {
  return content[useLang()];
}

/** "/platform/humimic" → "/en/platform/humimic". "#mission" 같은 비절대 경로는 그대로. */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith("/")) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** "/ko/platform/humimic" → "/platform/humimic" (언어를 뺀 경로) */
export function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  return isLang(first) ? `/${rest.join("/")}` : pathname;
}
