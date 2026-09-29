import { ArrowRight } from "lucide-react";
import type { Feature } from "../../shared/components";
import styles from "./VisionFlow.module.css";

export interface VisionStage {
  label: string;
  title: string;
  items: Feature[];
  caption: string;
}

interface VisionFlowProps {
  /** [오늘, TissNexus, 미래] 세 단계 */
  stages: [VisionStage, VisionStage, VisionStage];
  /** 좁은 칸(제목 옆)에 넣을 때 원과 글자를 줄입니다 */
  compact?: boolean;
}

/** TODAY → TissNexus → FUTURE 원형 3단 도식. 가운데 단계가 강조됩니다. */
export function VisionFlow({ stages, compact }: VisionFlowProps) {
  return (
    <div className={styles.flow} data-compact={Boolean(compact)}>
      {stages.map((stage, i) => (
        <div key={stage.label} className={styles.slot}>
          {i > 0 && <ArrowRight className={styles.arrow} aria-hidden="true" />}
          <div className={styles.stage} data-variant={i}>
            <p className={styles.label}>{stage.label}</p>
            <div className={styles.circle}>
              <p className={styles.title}>{stage.title}</p>
              <ul className={styles.items}>
                {stage.items.map(({ icon: Icon, title }) => (
                  <li key={title}>
                    <Icon size={compact ? 16 : 20} strokeWidth={1.6} aria-hidden="true" />
                    {title}
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.caption}>{stage.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
