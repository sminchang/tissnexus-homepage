import { useEffect } from "react";

const ENABLED_QUERY = "(min-width: 901px) and (prefers-reduced-motion: no-preference)";
/** 한 번 넘긴 뒤 트랙패드 관성 이벤트로 연달아 넘어가지 않도록 잠그는 시간 */
const LOCK_MS = 900;

/**
 * 풀페이지 스크롤의 입력 처리. 휠 한 번(또는 ↓·PageDown·Space)에 다음/이전 섹션으로 부드럽게 넘어갑니다.
 * CSS scroll-snap 은 화면보다 긴 섹션 안에서 스크롤을 붙잡는 문제가 있어 쓰지 않습니다.
 * 화면보다 긴 섹션은 그 안을 끝까지 일반 스크롤한 뒤에 넘어갑니다.
 */
export function useFullPageWheel() {
  useEffect(() => {
    const media = window.matchMedia(ENABLED_QUERY);
    let lockedUntil = 0;

    /** 섹션 이동을 처리했으면 true. false 면 기본 스크롤에 맡깁니다. */
    const step = (dir: number) => {
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 0;
      const view = window.innerHeight - header;
      const y = window.scrollY;
      const sections = [...document.querySelectorAll<HTMLElement>("main > section")];

      // 긴 섹션 안에서는 섹션 끝에 닿을 때까지 기본 스크롤
      const current = sections.find((s) => s.offsetTop - header <= y + 1 && s.offsetTop - header + s.offsetHeight > y + 1);
      if (current && current.offsetHeight > view + 1) {
        const top = current.offsetTop - header;
        const bottom = top + current.offsetHeight - view;
        if ((dir > 0 && y < bottom - 1) || (dir < 0 && y > top + 1)) return false;
      }

      if (performance.now() < lockedUntil) return true;

      // 섹션 시작점들 + 푸터까지 보이는 맨 끝
      const points = [...sections.map((s) => s.offsetTop - header), document.documentElement.scrollHeight - window.innerHeight];
      const target = dir > 0 ? points.find((p) => p > y + 2) : [...points].reverse().find((p) => p < y - 2);
      if (target === undefined) return true;

      lockedUntil = performance.now() + LOCK_MS;
      window.scrollTo({ top: target, behavior: "smooth" });
      return true;
    };

    const onWheel = (e: WheelEvent) => {
      if (!media.matches || e.ctrlKey || Math.abs(e.deltaY) < 4) return;
      if (step(Math.sign(e.deltaY))) e.preventDefault();
    };

    const onKey = (e: KeyboardEvent) => {
      if (!media.matches || e.altKey || e.ctrlKey || e.metaKey) return;
      const el = e.target as HTMLElement | null;
      if (el?.closest("input, textarea, select, [contenteditable]")) return;
      const down = ["ArrowDown", "PageDown"].includes(e.key) || (e.key === " " && !e.shiftKey);
      const up = ["ArrowUp", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey);
      if (!down && !up) return;
      if (step(down ? 1 : -1)) e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
}
