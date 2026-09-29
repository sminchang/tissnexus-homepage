import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGS, localizePath, stripLang, type Lang } from "../i18n";
import styles from "./LangMenu.module.css";

const NAMES: Record<Lang, string> = { ko: "한국어", en: "English" };
const LABEL: Record<Lang, string> = { ko: "언어 선택", en: "Select language" };

/** 헤더의 언어 선택 드롭다운. 같은 페이지의 다른 언어 주소로 이동합니다. */
export function LangMenu({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const path = stripLang(pathname);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${LABEL[lang]}: ${NAMES[lang]}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe size={16} aria-hidden="true" />
        {lang.toUpperCase()}
        <ChevronDown size={14} aria-hidden="true" className={styles.chevron} />
      </button>
      {open && (
        <ul className={styles.menu}>
          {LANGS.map((l) => (
            <li key={l}>
              <Link
                to={localizePath(path, l)}
                className={styles.option}
                aria-current={l === lang ? "true" : undefined}
                lang={l}
              >
                <span>{NAMES[l]}</span>
                <span className={styles.code}>{l.toUpperCase()}</span>
                {l === lang && <Check size={14} aria-hidden="true" className={styles.check} />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
