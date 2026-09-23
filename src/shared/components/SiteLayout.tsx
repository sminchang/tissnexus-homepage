import { NavLink, Link, Outlet } from "react-router";
import { company, navigation } from "../config";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Container } from "./Container";
import styles from "./SiteLayout.module.css";

/** 모든 페이지가 공유하는 헤더/푸터 셸. */
export function SiteLayout() {
  useScrollToTop();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Container className={styles.headerInner}>
          <Link to="/" className={styles.brand}>
            {company.brandName}
          </Link>
          <nav className={styles.nav}>
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} className={styles.navLink}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </Container>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <Container className={styles.footerInner}>
          <div className={styles.footerMeta}>
            <p>{company.legalName}</p>
            <p>사업자등록번호 {company.registrationNumber}</p>
            <p>{company.contact.address}</p>
          </div>
          <div className={styles.footerMeta}>
            <p>{company.contact.email}</p>
            <p>{company.contact.phone}</p>
            <p>
              © {new Date().getFullYear()} {company.brandName}
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
