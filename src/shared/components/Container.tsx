import type { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** 페이지 최대 폭과 좌우 여백을 통일하는 래퍼. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={className ? `${styles.container} ${className}` : styles.container}>
      {children}
    </div>
  );
}
