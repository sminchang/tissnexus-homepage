import type { LucideIcon } from "lucide-react";
import styles from "./IconBadge.module.css";

interface IconBadgeProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  /** solid 는 진한 블루 원(현재 단계 강조 등) */
  tone?: "soft" | "solid";
}

/** 연한 원 안의 라인 아이콘. 시안 전반의 반복 모티프. */
export function IconBadge({ icon: Icon, size = "md", tone = "soft" }: IconBadgeProps) {
  return (
    <span className={styles.badge} data-size={size} data-tone={tone} aria-hidden="true">
      <Icon strokeWidth={1.6} />
    </span>
  );
}
