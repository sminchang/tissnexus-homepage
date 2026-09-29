import styles from "./Eyebrow.module.css";

export interface EyebrowProps {
  label: string;
  /** 섹션 번호. total 이 있으면 "LABEL ── 01 / 07", 없으면 "02 ── LABEL" 형태 */
  index?: string;
  total?: string;
}

/** 제목 위의 자간 넓은 라벨. */
export function Eyebrow({ label, index, total }: EyebrowProps) {
  if (index && total) {
    return (
      <div className={styles.eyebrow}>
        <span className={styles.label}>{label}</span>
        <span className={styles.rule} />
        <span className={styles.count}>
          <strong>{index}</strong> / {total}
        </span>
      </div>
    );
  }
  return (
    <div className={styles.eyebrow}>
      {index && <span className={styles.index}>{index}</span>}
      {index && <span className={styles.shortRule} />}
      <span className={styles.label}>{label}</span>
      {!index && <span className={styles.shortRule} />}
    </div>
  );
}
