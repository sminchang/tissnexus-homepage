import { ArrowRight } from "lucide-react";
import type { Feature } from "../../shared/components";
import styles from "./GapDiagram.module.css";

interface GapDiagramProps {
  traditionalLabel: string;
  traditional: Feature[];
  coreLabel: string;
  core: string[];
  outcomesLabel: string;
  outcomes: Feature[];
}

/** 기존 모델 → TissNexus → 인간 생물학으로 이어지는 3단 도식. */
export function GapDiagram({ traditionalLabel, traditional, coreLabel, core, outcomesLabel, outcomes }: GapDiagramProps) {
  return (
    <div className={styles.diagram}>
      <Column label={traditionalLabel} items={traditional} />
      <ArrowRight className={styles.arrow} aria-hidden="true" />
      <div className={styles.column}>
        <p className={styles.label}>{coreLabel}</p>
        <div className={styles.core}>
          <img src="/images/brand/logo.webp" alt="" className={styles.coreLogo} />
          {core.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
      <ArrowRight className={styles.arrow} aria-hidden="true" />
      <Column label={outcomesLabel} items={outcomes} />
    </div>
  );
}

function Column({ label, items }: { label: string; items: Feature[] }) {
  return (
    <div className={styles.column}>
      <p className={styles.label}>{label}</p>
      <ul className={styles.list}>
        {items.map(({ icon: Icon, title }) => (
          <li key={title} className={styles.item}>
            <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
