import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { IconBadge } from "./IconBadge";
import type { Feature } from "./types";
import styles from "./StepFlow.module.css";

interface StepFlowProps {
  items: Feature[];
  /** 강조할 단계(0부터). 워크플로 상세 페이지에서 현재 단계를 표시합니다. */
  active?: number;
  /** 단계 번호(01, 02 …)를 위에 표시 */
  numbered?: boolean;
}

/** 화살표로 이어진 단계 흐름 (Science → Model → … / Question → Design → …). */
export function StepFlow({ items, active, numbered }: StepFlowProps) {
  return (
    <ol className={styles.flow} data-numbered={Boolean(numbered)}>
      {items.map((item, i) => (
        <Fragment key={item.title}>
          {i > 0 && (
            <li className={styles.arrow} aria-hidden="true">
              <ArrowRight size={22} strokeWidth={1.5} />
            </li>
          )}
          <li className={styles.step} data-active={active === i} aria-current={active === i ? "step" : undefined}>
            {numbered && <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>}
            <IconBadge icon={item.icon} size="lg" tone={active === i ? "solid" : "soft"} />
            <p className={styles.title}>{item.title}</p>
            {item.desc && <p className={styles.desc}>{item.desc}</p>}
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
