import { ChevronRight } from "lucide-react";
import { Rich, type Feature } from "../../../shared/components";
import styles from "./SectionParts.module.css";

/*
 * 공용 BenefitPanel·Banner·StepFlow 와 같은 역할을 하되,
 * 섹션 하나가 한 화면에 들어가도록 여백과 글자를 줄인 이 페이지 전용 버전입니다.
 */

/** 카드 행 오른쪽의 아이콘 목록 패널 */
export function Benefits({ label, items }: { label: string; items: Feature[] }) {
  return (
    <div className={styles.benefits}>
      <p className={styles.benefitsLabel}>{label}</p>
      <ul className={styles.benefitList}>
        {items.map(({ icon: Icon, title, desc }) => (
          <li key={title}>
            <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
            <div>
              <p className={styles.benefitTitle}>{title}</p>
              {desc && <p className={styles.benefitDesc}>{desc}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** 섹션 하단의 한 줄 요약 띠 */
export function Summary({ title, desc, items }: { title: string; desc?: string; items?: Feature[] }) {
  return (
    <div className={styles.summary}>
      <div className={styles.summaryMessage}>
        <span className={styles.summaryIcon} aria-hidden="true">
          <ChevronRight size={18} />
        </span>
        <div>
          <p className={styles.summaryTitle}>
            <Rich text={title} />
          </p>
          {desc && <p className={styles.summaryDesc}>{desc}</p>}
        </div>
      </div>
      {items && (
        <ul className={styles.summaryItems}>
          {items.map(({ icon: Icon, title: t }) => (
            <li key={t}>
              <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** 07 섹션의 개발 단계 띠 (Discovery → … → Patient Impact) */
export function StageStrip({ items }: { items: Feature[] }) {
  return (
    <ol className={styles.stages}>
      {items.map(({ icon: Icon, title, desc }) => (
        <li key={title}>
          <span className={styles.stageIcon} aria-hidden="true">
            <Icon size={18} strokeWidth={1.7} />
          </span>
          <div>
            <p className={styles.stageTitle}>{title}</p>
            {desc && <p className={styles.stageDesc}>{desc}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
