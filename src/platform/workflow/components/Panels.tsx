import type { ReactNode } from "react";
import { Check, Sparkles } from "lucide-react";
import { IconBadge, type Feature } from "../../../shared/components";
import type { content } from "../content";
import styles from "./Panels.module.css";

/** 패널 라벨 (content.ts 의 panels) */
export type PanelLabels = (typeof content)["ko"]["panels"];

/** 시안 속 소프트웨어 화면을 HTML 로 옮긴 유리 질감 패널. */
function Panel({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <p className={styles.panelTitle}>{title}</p>
        {note && <span className={styles.note}>{note}</span>}
      </div>
      {children}
    </div>
  );
}

export function StudyDesignPanel({ items, labels }: { items: Feature[]; labels: PanelLabels }) {
  return (
    <Panel title={labels.studyDesign}>
      <ul className={styles.checklist}>
        {items.map((item) => (
          <li key={item.title}>
            <IconBadge icon={item.icon} size="sm" />
            <div>
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemDesc}>{item.desc}</p>
            </div>
            <span className={styles.check} aria-label={labels.done}>
              <Check size={14} strokeWidth={3} />
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function AnalysisPanel({
  pathways,
  insights,
  labels,
}: {
  pathways: { name: string; value: number }[];
  insights: string[];
  labels: PanelLabels;
}) {
  return (
    <Panel title={labels.analysis} note={labels.sample}>
      <div className={styles.analysis}>
        <div className={styles.block}>
          <p className={styles.blockTitle}>{labels.pathway}</p>
          <ul className={styles.bars}>
            {pathways.map((p) => (
              <li key={p.name}>
                <span>{p.name}</span>
                <span className={styles.bar}>
                  <span style={{ width: `${p.value}%` }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.block}>
          <p className={styles.blockTitle}>{labels.keyInsights}</p>
          <ul className={styles.insights}>
            {insights.map((text) => (
              <li key={text}>
                <Check size={16} aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Panel>
  );
}

export function InsightPanel({
  findings,
  assessment,
  summary,
  labels,
}: {
  findings: Feature[];
  assessment: string;
  summary: string;
  labels: PanelLabels;
}) {
  return (
    <Panel title={labels.insight} note={labels.sample}>
      <div className={styles.insight}>
        <div className={styles.block}>
          <p className={styles.blockTitle}>{labels.findings}</p>
          <ul className={styles.checklist}>
            {findings.map((f) => (
              <li key={f.title}>
                <IconBadge icon={f.icon} size="sm" />
                <div>
                  <p className={styles.itemTitle}>{f.title}</p>
                  <p className={styles.itemDesc}>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.block}>
          <p className={styles.blockTitle}>{labels.assessment}</p>
          <div className={styles.ring}>
            <span>{assessment}</span>
          </div>
        </div>
      </div>
      <div className={styles.summary}>
        <Sparkles size={22} aria-hidden="true" />
        <div>
          <p className={styles.blockTitle}>{labels.summary}</p>
          <p className={styles.itemDesc}>{summary}</p>
        </div>
      </div>
    </Panel>
  );
}
