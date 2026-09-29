import type { ReactNode } from "react";
import { ButtonLink } from "./Button";
import { Container } from "./Container";
import { Eyebrow, type EyebrowProps } from "./Eyebrow";
import { FeatureRow } from "./FeatureRow";
import { Rich } from "./Rich";
import type { Action, Feature, ImageRef } from "./types";
import styles from "./Hero.module.css";

interface HeroProps {
  /** 같은 페이지 앵커(#vision 등) 이동용 */
  id?: string;
  eyebrow?: EyebrowProps;
  /** 제목 바로 위 작은 대문자 라벨 (예: THE TRANSLATION GAP) */
  kicker?: string;
  /** Rich 마크업: `*강조*`, 줄바꿈 */
  title: string;
  /** 제목 아래 한글 부제 (Rich 마크업) */
  lead?: string;
  body?: string[];
  /** 오른쪽으로 번지는 이미지. 왼쪽 가장자리는 배경으로 페이드됩니다. */
  image?: ImageRef;
  /** cover: 영역을 채우며 잘림(사진), contain: 전체가 보이게(도식) */
  imageFit?: "cover" | "contain";
  features?: Feature[];
  actions?: Action[];
  /** page: 페이지 첫 화면, section: 페이지 중간 섹션 */
  size?: "page" | "section";
  /** 텍스트 아래 전체 폭으로 이어지는 내용(카드 그리드 등) */
  children?: ReactNode;
}

/** 시안의 기본 레이아웃: 왼쪽 텍스트, 오른쪽 이미지. 한 장의 시안 슬라이드 = 하나의 Hero. */
export function Hero({
  id,
  eyebrow,
  kicker,
  title,
  lead,
  body,
  image,
  imageFit = "cover",
  features,
  actions,
  size = "section",
  children,
}: HeroProps) {
  const Heading = size === "page" ? "h1" : "h2";

  return (
    <section id={id} className={styles.hero} data-size={size}>
      <div className={styles.top}>
        {image && (
          <div className={styles.media} data-fit={imageFit}>
            <img src={image.src} alt={image.alt} />
          </div>
        )}
        <Container className={styles.inner}>
          <div className={styles.text} data-has-image={Boolean(image)}>
            {eyebrow && <Eyebrow {...eyebrow} />}
            {kicker && <p className={styles.kicker}>{kicker}</p>}
            <Heading className={styles.title}>
              <Rich text={title} />
            </Heading>
            {lead && (
              <p className={styles.lead}>
                <Rich text={lead} />
              </p>
            )}
            {body && (
              <div className={styles.body}>
                {body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
            {features && (
              <div className={styles.features}>
                <FeatureRow items={features} />
              </div>
            )}
            {actions && (
              <div className={styles.actions}>
                {actions.map((a) => (
                  <ButtonLink key={a.to + a.label} to={a.to} variant={a.variant}>
                    {a.label}
                  </ButtonLink>
                ))}
              </div>
            )}
          </div>
        </Container>
      </div>
      {children && <Container className={styles.below}>{children}</Container>}
    </section>
  );
}
