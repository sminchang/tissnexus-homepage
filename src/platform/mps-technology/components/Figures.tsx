import type { ImageRef } from "../../../shared/components";
import type { FigureText } from "../content";
import styles from "./Figures.module.css";

/*
 * 카드 안의 수치·차트. 수치는 모두 시안에 있던 값을 그대로 옮긴 자리 표시용이며,
 * 실제 데이터·출처로 검증한 뒤 교체해야 합니다. 글자는 content.ts 의 figures 에서 받습니다.
 */

/** 원 안의 큰 수치 (예: ~90% 임상 실패율) */
export function StatCircle({ text }: { text: FigureText["failure"] }) {
  return (
    <div className={styles.statWrap}>
      <div className={styles.stat}>
        <strong>{text.value}</strong>
        <span>{text.label}</span>
      </div>
    </div>
  );
}

/** 장기 배양 생존율: Dynamic vs Static (시안 그래프를 눈대중으로 옮긴 값) */
const DAYS = [0, 7, 14, 21, 28];
const DYNAMIC = [100, 104, 104, 103, 101];
const STATIC = [100, 88, 79, 70, 63];

export function ViabilityChart({ text }: { text: FigureText["viability"] }) {
  const x = (d: number) => 30 + (d / 28) * 210;
  const y = (v: number) => 70 - (v / 150) * 56;
  const path = (vals: number[]) => vals.map((v, i) => `${i ? "L" : "M"}${x(DAYS[i])},${y(v)}`).join(" ");

  return (
    <figure className={styles.chart}>
      <svg viewBox="0 0 250 84" role="img" aria-label={text.aria}>
        <text x={240} y={8} className={styles.tick} textAnchor="end">
          {text.axis}
        </text>
        {[0, 50, 100, 150].map((v) => (
          <g key={v}>
            <line x1={30} x2={240} y1={y(v)} y2={y(v)} className={styles.grid} />
            <text x={24} y={y(v) + 3} className={styles.tick} textAnchor="end">
              {v}
            </text>
          </g>
        ))}
        {DAYS.map((d) => (
          <text key={d} x={x(d)} y={81} className={styles.tick} textAnchor="middle">
            {d}
          </text>
        ))}
        <path d={path(STATIC)} className={styles.lineStatic} />
        <path d={path(DYNAMIC)} className={styles.lineDynamic} />
        {DAYS.map((d, i) => (
          <g key={d}>
            <circle cx={x(d)} cy={y(STATIC[i])} r={2.4} className={styles.dotStatic} />
            <circle cx={x(d)} cy={y(DYNAMIC[i])} r={2.4} className={styles.dotDynamic} />
          </g>
        ))}
      </svg>
      <figcaption className={styles.legend}>
        <span data-series="dynamic">{text.dynamic}</span>
        <span data-series="static">{text.static}</span>
      </figcaption>
    </figure>
  );
}

/** 이미지 + 제어 파라미터 목록 (Multi-Parameter Control) */
export function ParameterMedia({ image, params }: { image: ImageRef; params: string[] }) {
  return (
    <div className={styles.params}>
      <img src={image.src} alt={image.alt} loading="lazy" />
      <ul>
        {params.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

/** 장기 모델 썸네일 격자 (Individual Organ Models) */
export function OrganGrid({ organs }: { organs: ImageRef[] }) {
  return (
    <ul className={styles.organs}>
      {organs.map((o) => (
        <li key={o.src}>
          <img src={o.src} alt="" loading="lazy" />
          <span>{o.alt}</span>
        </li>
      ))}
    </ul>
  );
}

/** 개발 기간 비교: MPS 기반 vs 기존 (시안 도식) */
export function TimelineCompare({ text }: { text: FigureText["timeline"] }) {
  return (
    <figure className={styles.timeline} aria-label={text.aria}>
      <div className={styles.stages}>
        {text.stages.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className={styles.bar} data-kind="mps">
        {text.mps}
      </div>
      <div className={styles.bar} data-kind="conventional">
        {text.conventional}
      </div>
      <figcaption>{text.caption}</figcaption>
    </figure>
  );
}

/** 임상 성공률 비교: Conventional ~10% vs MPS-enabled ~2–3x (시안 수치) */
export function SuccessBars({ text }: { text: FigureText["success"] }) {
  return (
    <figure className={styles.bars} aria-label={text.aria}>
      <div className={styles.barCol}>
        <div className={styles.barFill} data-kind="conventional" />
        <span>
          {text.conventional} ~10%
        </span>
      </div>
      <div className={styles.barCol}>
        <strong>~2–3x</strong>
        <div className={styles.barFill} data-kind="mps" />
        <span>{text.mps}</span>
      </div>
    </figure>
  );
}
