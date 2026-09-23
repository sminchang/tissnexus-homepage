import type { ValueItem } from "../content";
import styles from "./ValueList.module.css";

export function ValueList({ items }: { items: ValueItem[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.title}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
