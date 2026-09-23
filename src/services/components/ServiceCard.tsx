import type { ServiceItem } from "../content";
import styles from "./ServiceCard.module.css";

export function ServiceGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.id} className={styles.card}>
          <h3 className={styles.name}>{item.name}</h3>
          <p className={styles.summary}>{item.summary}</p>
          <ul className={styles.deliverables}>
            {item.deliverables.map((deliverable) => (
              <li key={deliverable} className={styles.deliverable}>
                {deliverable}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
