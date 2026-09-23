import { useEffect } from "react";
import { useLocation } from "react-router";

/** 라우트가 바뀌면 스크롤을 맨 위로 되돌립니다. */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
