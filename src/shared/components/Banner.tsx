import { ChevronRight, type LucideIcon } from "lucide-react";
import { Rich } from "./Rich";
import type { Feature } from "./types";
import styles from "./Banner.module.css";

interface BannerProps {
  /** Rich 마크업 */
  title: string;
  desc?: string;
  items?: Feature[];
  /** 왼쪽 원형 아이콘 (기본: 오른쪽 꺾쇠) */
  icon?: LucideIcon;
}

/** 슬라이드 하단의 알약형 요약 띠. */
export function Banner({ title, desc, items, icon: Icon = ChevronRight }: BannerProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.message}>
        <span className={styles.icon} aria-hidden="true">
          <Icon size={22} />
        </span>
        <div>
          <p className={styles.title}>
            <Rich text={title} />
          </p>
          {desc && <p className={styles.desc}>{desc}</p>}
        </div>
      </div>
      {items && (
        <ul className={styles.items}>
          {items.map(({ icon: ItemIcon, title: t, desc: d }) => (
            <li key={t} className={styles.item}>
              <ItemIcon size={28} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <p className={styles.itemTitle}>{t}</p>
                {d && <p className={styles.itemDesc}>{d}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
