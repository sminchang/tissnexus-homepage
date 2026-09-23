import { ButtonLink, Container } from "../../shared/components";
import { company } from "../../shared/config";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <span className={styles.tagline}>{company.tagline}</span>
          <h1 className={styles.headline}>{company.headline}</h1>
          <p className={styles.subheadline}>{company.subheadline}</p>
          <div className={styles.actions}>
            <ButtonLink to="/contact">문의하기</ButtonLink>
            <ButtonLink to="/services" variant="secondary">
              서비스 살펴보기
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
