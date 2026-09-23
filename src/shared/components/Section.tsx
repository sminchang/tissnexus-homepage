import type { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

interface SectionProps {
  /** 제목 위 작은 라벨 */
  eyebrow?: string;
  title?: string;
  description?: string;
  /** surface 는 배경색을 한 단계 눌러 섹션 구분에 씁니다. */
  tone?: "default" | "surface";
  children?: ReactNode;
}

export function Section({ eyebrow, title, description, tone = "default", children }: SectionProps) {
  return (
    <section className={styles.section} data-tone={tone}>
      <Container>
        {(eyebrow || title || description) && (
          <div className={styles.header}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
