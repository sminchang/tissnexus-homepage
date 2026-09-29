import { IconBadge, type Feature } from "../../shared/components";
import styles from "./ValueRow.module.css";

/** 설명이 긴 항목을 같은 폭으로 나란히 두는 행 (Liver Business Value). */
export function ValueRow({ items }: { items: Feature[] }) {
  return (
    <ul className={styles.row}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <IconBadge icon={item.icon} size="md" />
          <div>
            <p className={styles.title}>{item.title}</p>
            {item.desc && <p className={styles.desc}>{item.desc}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
