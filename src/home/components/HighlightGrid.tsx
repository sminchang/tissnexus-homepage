import type { Highlight, Metric } from "../content";
import styles from "./HighlightGrid.module.css";

export function HighlightGrid({ items }: { items: Highlight[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.title} className={styles.card}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardDescription}>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function MetricRow({ items }: { items: Metric[] }) {
  return (
    <div className={styles.metrics}>
      {items.map((item) => (
        <div key={item.label}>
          <div className={styles.metricValue}>{item.value}</div>
          <div className={styles.metricLabel}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}
