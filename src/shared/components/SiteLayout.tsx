import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { company, siteMap, type NavGroup } from "../config";
import { useFullPageWheel } from "../hooks/useFullPageWheel";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { detectLang, isLang, localizePath, rememberLang, stripLang, type Lang } from "../i18n";
import { Container } from "./Container";
import { LangLink, LangNavLink } from "./LangLink";
import { LangMenu } from "./LangMenu";
import styles from "./SiteLayout.module.css";

const ui = {
  ko: { home: "홈", mainMenu: "주 메뉴", openMenu: "메뉴 열기", closeMenu: "메뉴 닫기", contact: "문의하기", registration: "사업자등록번호" },
  en: { home: "Home", mainMenu: "Main menu", openMenu: "Open menu", closeMenu: "Close menu", contact: "Contact", registration: "Business Registration No." },
};

function isGroupActive(group: NavGroup, path: string) {
  return path.startsWith(group.match);
}

/** 언어 라우트(/:lang) 아래 모든 페이지가 공유하는 헤더/푸터 셸. */
export function SiteLayout() {
  const { lang } = useParams();
  const { pathname } = useLocation();

  // /platform/humimic 처럼 언어가 빠진 주소는 방문자 언어를 붙여 다시 보냅니다.
  if (!isLang(lang)) return <Navigate to={localizePath(pathname, detectLang())} replace />;
  return <Shell lang={lang} />;
}

function Shell({ lang }: { lang: Lang }) {
  useScrollToTop();
  useFullPageWheel();
  const { pathname } = useLocation();
  const path = stripLang(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = ui[lang];
  const info = company[lang];
  const groups = siteMap[lang];

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    rememberLang(lang);
    document.documentElement.lang = lang;
    document.title = `${info.brandName} | ${info.tagline}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", info.description);
  }, [lang, info]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Container className={styles.headerInner}>
          <LangLink to="/" className={styles.brand} aria-label={`${info.brandName} ${t.home}`}>
            <img src="/images/brand/logo.webp" alt={info.brandName} />
          </LangLink>

          <nav className={styles.nav} data-open={menuOpen} aria-label={t.mainMenu}>
            {groups.map((group) => (
              <div key={group.to} className={styles.group}>
                <LangLink
                  to={group.to}
                  className={styles.groupLink}
                  aria-current={isGroupActive(group, path) ? "page" : undefined}
                >
                  {group.label}
                  {group.children.length > 0 && <ChevronDown size={14} aria-hidden="true" />}
                </LangLink>
                {group.children.length > 0 && (
                  <div className={styles.dropdown}>
                    {group.children.map((item) => (
                      <LangNavLink key={item.to} to={item.to} end className={styles.dropdownLink}>
                        {item.label}
                      </LangNavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <LangLink to="/contact" className={styles.contact}>
              {t.contact} <ArrowRight size={16} aria-hidden="true" />
            </LangLink>
            <LangMenu lang={lang} />
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <img src="/images/brand/logo.webp" alt={info.brandName} />
              <p>{info.tagline}</p>
            </div>
            <div className={styles.footerNav}>
              {groups.map((group) => (
                <div key={group.to}>
                  <LangLink to={group.to} className={styles.footerGroup}>
                    {group.label}
                  </LangLink>
                  {group.children.map((item) => (
                    <LangLink key={item.to} to={item.to} className={styles.footerLink}>
                      {item.label}
                    </LangLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.footerMeta}>
            <p>
              {info.legalName} · {t.registration} {info.registrationNumber}
            </p>
            <p>{info.contact.address}</p>
            <p>
              {info.contact.email} · {info.contact.phone}
            </p>
            <p>
              © {new Date().getFullYear()} {info.brandName}. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
