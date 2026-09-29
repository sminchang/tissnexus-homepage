import type { ReactNode } from "react";
import styles from "./Labeled.module.css";

interface LabeledProps {
  /** 블록 위 자간 넓은 라벨 (예: KEY DELIVERABLES) */
  label: string;
  /** panel: 연한 배경 상자로 감쌉니다 */
  panel?: boolean;
  children: ReactNode;
}

/** 라벨이 붙은 콘텐츠 블록 (Key Deliverables, Business Value 등). */
export function Labeled({ label, panel, children }: LabeledProps) {
  return (
    <div className={styles.block} data-panel={Boolean(panel)}>
      <p className={styles.label}>{label}</p>
      {children}
    </div>
  );
}
