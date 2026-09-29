import type { Feature } from "./types";
import styles from "./BenefitPanel.module.css";

interface BenefitPanelProps {
  /** 패널 상단 라벨 (예: KEY BENEFITS) */
  label: string;
  items: Feature[];
}

/** 카드 행 옆의 아이콘 목록 패널 (KEY BENEFITS, OUR COMMITMENT 등). */
export function BenefitPanel({ label, items }: BenefitPanelProps) {
  return (
    <div className={styles.panel}>
      <p className={styles.label}>{label}</p>
      <ul className={styles.list}>
        {items.map(({ icon: Icon, title, desc }) => (
          <li key={title} className={styles.item}>
            <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className={styles.title}>{title}</p>
              {desc && <p className={styles.desc}>{desc}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
