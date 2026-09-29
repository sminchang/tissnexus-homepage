import type { ReactNode } from "react";
import { Container, Eyebrow, Rich, type EyebrowProps, type ImageRef } from "../../shared/components";
import styles from "./SplitSection.module.css";

interface SplitSectionProps {
  id?: string;
  eyebrow: EyebrowProps;
  kicker?: string;
  /** Rich 마크업 */
  title: string;
  /** 왼쪽 제목 아래 본문 */
  body?: string[];
  /** 오른쪽 칸 (도식, 본문 등) */
  aside: ReactNode;
  /** 오른쪽 칸 뒤에 옅게 깔리는 배경 이미지 */
  backdrop?: ImageRef;
  /** 두 칸 아래 전체 폭으로 이어지는 내용 */
  children?: ReactNode;
}

/**
 * 제목 옆에 도식이나 본문을 나란히 두는 섹션.
 * Hero 는 이미지 칸이 고정이라 내용이 아래로만 쌓여 한 화면을 넘기 때문에,
 * 오른쪽 칸을 내용으로 채워 세로 길이를 줄입니다.
 */
export function SplitSection({ id, eyebrow, kicker, title, body, aside, backdrop, children }: SplitSectionProps) {
  return (
    <section id={id} className={styles.section}>
      {backdrop && (
        <div className={styles.backdrop} aria-hidden="true">
          <img src={backdrop.src} alt="" />
        </div>
      )}
      <Container className={styles.inner}>
        <div className={styles.split}>
          <div>
            <Eyebrow {...eyebrow} />
            {kicker && <p className={styles.kicker}>{kicker}</p>}
            <h2 className={styles.title}>
              <Rich text={title} />
            </h2>
            {body && (
              <div className={styles.body}>
                {body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
          </div>
          <div className={styles.aside}>{aside}</div>
        </div>
        {children && <div className={styles.below}>{children}</div>}
      </Container>
    </section>
  );
}
