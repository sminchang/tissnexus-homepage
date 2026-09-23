import type { ProcessStep } from "../content";
import styles from "./ProcessSteps.module.css";

export function ProcessSteps({ items }: { items: ProcessStep[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.step}>
          <div className={styles.step}>{item.step}</div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
