import { ArrowUpRight, Check } from "lucide-react";
import { IconBadge, LangLink, type Card } from "../../../shared/components";
import styles from "./CompactCards.module.css";

interface CompactCardsProps {
  cards: Card[];
  columns: number;
  /** bullets 를 체크 표시로 */
  checks?: boolean;
}

/**
 * 한 화면에 담기 위한 촘촘한 카드. 이미지는 제목 옆 작은 썸네일로 둡니다.
 * 링크가 있는 카드는 제목 오른쪽 화살표로 표시합니다.
 */
export function CompactCards({ cards, columns, checks }: CompactCardsProps) {
  return (
    <ul className={styles.grid} style={{ "--cols": columns } as React.CSSProperties}>
      {cards.map((card) => {
        const body = (
          <>
            <div className={styles.head}>
              {card.image ? (
                <img className={styles.thumb} src={card.image.src} alt={card.image.alt} loading="lazy" />
              ) : card.icon ? (
                <IconBadge icon={card.icon} size="sm" />
              ) : card.num ? (
                <span className={styles.num}>{card.num}</span>
              ) : null}
              <div className={styles.titles}>
                <h3 className={styles.title}>
                  {card.image && card.num && <span className={styles.inlineNum}>{card.num}</span>}
                  {card.title}
                </h3>
                {card.subtitle && <p className={styles.subtitle}>{card.subtitle}</p>}
              </div>
              {card.to && <ArrowUpRight className={styles.arrow} size={18} aria-hidden="true" />}
            </div>
            {card.body && <p className={styles.body}>{card.body}</p>}
            {card.bullets && (
              <ul className={styles.bullets} data-checks={Boolean(checks)}>
                {card.bullets.map((b) => (
                  <li key={b}>
                    {checks && <Check size={14} strokeWidth={2.6} aria-hidden="true" />}
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {card.tag && <p className={styles.tag}>{card.tag}</p>}
          </>
        );
        return (
          <li key={card.title} className={styles.cell}>
            {card.to ? (
              <LangLink to={card.to} className={`${styles.card} ${styles.linked}`}>
                {body}
              </LangLink>
            ) : (
              <div className={styles.card}>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
