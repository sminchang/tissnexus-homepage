import { useEffect } from "react";
import { useLocation } from "react-router";
import { stripLang } from "../i18n";

/** 라우트가 바뀌면 스크롤을 맨 위로 되돌립니다. 언어만 바꿀 때는 위치를 유지합니다. */
export function useScrollToTop() {
  const path = stripLang(useLocation().pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
}
