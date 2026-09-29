import type { ReactNode } from "react";
import { Container, Eyebrow, Rich, type EyebrowProps } from "../../../shared/components";
import styles from "./DenseSection.module.css";

interface DenseSectionProps {
  eyebrow: EyebrowProps;
  kicker?: string;
  /** Rich 마크업 */
  title: string;
  lead?: string;
  body?: string[];
  /** 텍스트 아래(왼쪽 칸)에 붙는 내용. FeatureRow 등 */
  textExtra?: ReactNode;
  /** 오른쪽 칸. 이미지·패널·도식 */
  aside?: ReactNode;
  /** 아래 전체 폭 줄. 카드·스테퍼 등 */
  children?: ReactNode;
}

/**
 * 내용이 많은 섹션을 한 화면(1440×900 기준)에 담기 위한 압축 레이아웃.
 * Hero 는 텍스트 아래로 내용을 쌓아 길어지므로, 윗줄을 텍스트 | 보조 내용 두 칸으로 씁니다.
 */
export function DenseSection({ eyebrow, kicker, title, lead, body, textExtra, aside, children }: DenseSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.top} data-has-aside={Boolean(aside)}>
          <div className={styles.text}>
            <Eyebrow {...eyebrow} />
            {kicker && <p className={styles.kicker}>{kicker}</p>}
            <h2 className={styles.title}>
              <Rich text={title} />
            </h2>
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
            {textExtra && <div className={styles.extra}>{textExtra}</div>}
          </div>
          {aside && <div className={styles.aside}>{aside}</div>}
        </div>
        {children && <div className={styles.below}>{children}</div>}
      </Container>
    </section>
  );
}
