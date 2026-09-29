import styles from "./ChevronBar.module.css";

export interface ChevronStep {
  title: string;
  desc?: string;
}

interface ChevronBarProps {
  steps: ChevronStep[];
  /** 막대 아래 가운데 캡션 (예: Predictive Bio Platform으로 확장) */
  caption?: string;
  /** 높이를 줄인 한 줄형 (풀페이지 한 화면에 맞출 때) */
  compact?: boolean;
}

/** 오른쪽으로 갈수록 진해지는 화살표 띠 (Model → Assay → Data → Decisions). */
export function ChevronBar({ steps, caption, compact }: ChevronBarProps) {
  return (
    <div>
      <ol className={styles.bar} data-compact={Boolean(compact)} style={{ "--count": steps.length } as React.CSSProperties}>
        {steps.map((step, i) => (
          <li key={step.title} className={styles.step} style={{ "--i": i } as React.CSSProperties}>
            <span className={styles.title}>{step.title}</span>
            {step.desc && <span className={styles.desc}>{step.desc}</span>}
          </li>
        ))}
      </ol>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
