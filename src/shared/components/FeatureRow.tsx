import { IconBadge } from "./IconBadge";
import type { Feature } from "./types";
import styles from "./FeatureRow.module.css";

interface FeatureRowProps {
  items: Feature[];
  /** inline: 아이콘 왼쪽에 글, stacked: 아이콘 아래 가운데 정렬 */
  layout?: "inline" | "stacked";
}

/** 세로 구분선으로 나뉜 아이콘 특징 한 줄. */
export function FeatureRow({ items, layout = "inline" }: FeatureRowProps) {
  return (
    <ul className={styles.row} data-layout={layout}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <IconBadge icon={item.icon} size={layout === "stacked" ? "lg" : "md"} />
          <div>
            <p className={styles.title}>{item.title}</p>
            {item.desc && <p className={styles.desc}>{item.desc}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
