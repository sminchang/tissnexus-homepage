import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import type { ImageRef } from "../../shared/components";
import styles from "./ImageSteps.module.css";

export interface ImageStep {
  num: string;
  title: string;
  desc: string;
  image: ImageRef;
}

/** 원형 이미지 + 번호 + 제목으로 이어지는 시험 단계 흐름 (Liver 03/04). */
export function ImageSteps({ steps }: { steps: ImageStep[] }) {
  return (
    <ol className={styles.steps}>
      {steps.map((step, i) => (
        <Fragment key={step.num}>
          {i > 0 && (
            <li className={styles.arrow} aria-hidden="true">
              <ArrowRight size={24} strokeWidth={1.6} />
            </li>
          )}
          <li className={styles.step}>
            <div className={styles.image}>
              <img src={step.image.src} alt={step.image.alt} loading="lazy" />
            </div>
            <div>
              <span className={styles.num}>{step.num}</span>
              <p className={styles.title}>{step.title}</p>
              <p className={styles.desc}>{step.desc}</p>
            </div>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
