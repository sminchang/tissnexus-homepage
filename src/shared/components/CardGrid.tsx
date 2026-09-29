import type { ReactNode } from "react";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { IconBadge } from "./IconBadge";
import { useLang } from "../i18n";
import { LangLink } from "./LangLink";
import type { ImageRef } from "./types";
import styles from "./CardGrid.module.css";

export interface Card {
  /** "01" 같은 번호. icon 과 함께 쓰지 않습니다. */
  num?: string;
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  image?: ImageRef;
  body?: string;
  bullets?: string[];
  /** 카드 하단의 작은 대문자 태그 (예: CLOSER TO HUMAN BIOLOGY) */
  tag?: string;
  /** 있으면 카드 전체가 링크가 되고 "자세히 보기 / Learn more" 가 붙습니다. */
  to?: string;
}

interface CardGridProps {
  cards: Card[];
  /** 한 줄 카드 수 (기본: 카드 수, 최대 4) */
  columns?: number;
  /** image 모양: wide 는 카드 폭 가득, circle 은 원형 */
  imageShape?: "wide" | "circle";
  /** bullets 를 체크 표시로 그립니다 */
  checks?: boolean;
  /** 카드 오른쪽에 붙는 보조 패널 (BenefitPanel 등) */
  aside?: ReactNode;
}

/** 번호 카드 묶음. 시안 하단의 4~6열 카드 행에 대응합니다. */
export function CardGrid({ cards, columns, imageShape = "wide", checks, aside }: CardGridProps) {
  const cols = columns ?? Math.min(cards.length, 4);
  const more = useLang() === "ko" ? "자세히 보기" : "Learn more";

  const grid = (
    <ul className={styles.grid} style={{ "--cols": cols } as React.CSSProperties}>
      {cards.map((card) => (
        <li key={card.title} className={styles.cell}>
          {card.to ? (
            <LangLink to={card.to} className={`${styles.card} ${styles.linked}`}>
              <CardBody card={card} imageShape={imageShape} checks={checks} />
              <span className={styles.more}>
                {more} <ArrowRight size={16} />
              </span>
            </LangLink>
          ) : (
            <div className={styles.card}>
              <CardBody card={card} imageShape={imageShape} checks={checks} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  if (!aside) return grid;
  return (
    <div className={styles.withAside}>
      {grid}
      <div className={styles.aside}>{aside}</div>
    </div>
  );
}

function CardBody({
  card,
  imageShape,
  checks,
}: {
  card: Card;
  imageShape: "wide" | "circle";
  checks?: boolean;
}) {
  return (
    <>
      <div className={styles.head}>
        {card.num && <span className={styles.num}>{card.num}</span>}
        {card.icon && <IconBadge icon={card.icon} size="sm" />}
        <div>
          <h3 className={styles.title}>{card.title}</h3>
          {card.subtitle && <p className={styles.subtitle}>{card.subtitle}</p>}
        </div>
      </div>
      {card.image && (
        <div className={styles.image} data-shape={imageShape}>
          <img src={card.image.src} alt={card.image.alt} loading="lazy" />
        </div>
      )}
      {card.body && <p className={styles.body}>{card.body}</p>}
      {card.bullets && (
        <ul className={styles.bullets} data-checks={Boolean(checks)}>
          {card.bullets.map((b) => (
            <li key={b}>
              {checks && <Check size={16} strokeWidth={2.4} />}
              {b}
            </li>
          ))}
        </ul>
      )}
      {card.tag && <p className={styles.tag}>{card.tag}</p>}
    </>
  );
}
