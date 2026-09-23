import type { MilestoneItem } from "../content";
import styles from "./Timeline.module.css";

export function Timeline({ items }: { items: MilestoneItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <div key={`${item.year}-${index}`} className={styles.item}>
          <span className={styles.year}>{item.year}</span>
          <span className={styles.description}>{item.description}</span>
        </div>
      ))}
    </div>
  );
}
