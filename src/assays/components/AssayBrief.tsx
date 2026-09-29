import { Check } from "lucide-react";
import { ButtonLink, type ImageRef } from "../../shared/components";
import styles from "./AssayBrief.module.css";

interface AssayBriefProps {
  image: ImageRef;
  /** 카드 제목 (예: 호흡기 반응 평가) */
  title: string;
  bullets: string[];
  /** 하단 작은 태그 (예: LUNG SAFER THERAPIES) */
  tag: string;
  /** 문의 버튼 문구 */
  action: string;
}

/** 전용 시안이 없는 Assay 페이지의 요약 블록: 이미지 + 평가 항목 + 문의 버튼. */
export function AssayBrief({ image, title, bullets, tag, action }: AssayBriefProps) {
  return (
    <div className={styles.brief}>
      <div className={styles.image}>
        <img src={image.src} alt={image.alt} loading="lazy" />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>
              <Check size={18} strokeWidth={2.4} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
        <p className={styles.tag}>{tag}</p>
        <div>
          <ButtonLink to="/contact">{action}</ButtonLink>
        </div>
      </div>
    </div>
  );
}
