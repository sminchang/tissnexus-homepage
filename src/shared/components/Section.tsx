import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow, type EyebrowProps } from "./Eyebrow";
import { Rich } from "./Rich";
import styles from "./Section.module.css";

interface SectionProps {
  eyebrow?: EyebrowProps;
  /** Rich 마크업: `*강조*`, 줄바꿈 */
  title?: string;
  lead?: string;
  body?: string[];
  /** 제목 블록 정렬 */
  align?: "left" | "center";
  /** surface 는 배경색을 한 단계 눌러 섹션 구분에 씁니다. */
  tone?: "default" | "surface";
  children?: ReactNode;
}

/** 이미지 없이 제목 + 본문 블록으로 시작하는 일반 섹션. */
export function Section({ eyebrow, title, lead, body, align = "left", tone = "default", children }: SectionProps) {
  const hasHeader = eyebrow || title || lead || body;
  return (
    <section className={styles.section} data-tone={tone}>
      <Container>
        {hasHeader && (
          <div className={styles.header} data-align={align}>
            {eyebrow && <Eyebrow {...eyebrow} />}
            {title && (
              <h2 className={styles.title}>
                <Rich text={title} />
              </h2>
            )}
            {lead && (
              <p className={styles.lead}>
                <Rich text={lead} />
              </p>
            )}
            {body?.map((p) => (
              <p key={p} className={styles.body}>
                {p}
              </p>
            ))}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
