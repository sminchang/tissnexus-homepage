import type { CSSProperties, ReactNode } from "react";
import type { ImageRef } from "../../../shared/components";
import styles from "./MediaCardGrid.module.css";

export interface MediaCard {
  num?: string;
  title: string;
  subtitle?: string;
  image?: ImageRef;
  imageFit?: "contain";
  /** 이미지 대신 들어가는 차트·수치 등 임의 요소 */
  media?: ReactNode;
  body?: string;
  bullets?: string[];
  tag?: string;
  /** 수치(media)를 왼쪽, 목록을 오른쪽에 두는 넓은 카드 */
  wide?: boolean;
}

interface MediaCardGridProps {
  cards: MediaCard[];
  /** 카드 오른쪽에 붙는 보조 패널 */
  aside?: ReactNode;
}

/**
 * 한 화면(풀페이지)에 들어가도록 압축한 카드 행.
 * 이미지 자리에 임의 요소(차트, 통계)도 넣을 수 있어 공용 CardGrid 대신 이 페이지 안에 둡니다.
 */
export function MediaCardGrid({ cards, aside }: MediaCardGridProps) {
  return (
    <div className={styles.row} data-has-aside={Boolean(aside)}>
      <ul className={styles.grid} style={{ "--cols": cards.length } as CSSProperties}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card} data-wide={card.wide || undefined}>
            <div className={styles.head}>
              {card.num && <span className={styles.num}>{card.num}</span>}
              <div>
                <h3 className={styles.title}>{card.title}</h3>
                {card.subtitle && <p className={styles.subtitle}>{card.subtitle}</p>}
              </div>
            </div>
            {card.image && (
              <div className={styles.image} data-fit={card.imageFit}>
                <img src={card.image.src} alt={card.image.alt} loading="lazy" />
              </div>
            )}
            {card.media}
            {card.body && <p className={styles.body}>{card.body}</p>}
            {card.bullets && (
              <ul className={styles.bullets}>
                {card.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {card.tag && <p className={styles.tag}>{card.tag}</p>}
          </li>
        ))}
      </ul>
      {aside}
    </div>
  );
}
