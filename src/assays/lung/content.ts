/**
 * Assays · Lung & Respiratory 문구. 전용 시안이 없어 기존 슬라이드의 문구만 옮기고 KO/EN 으로 나눴습니다.
 * - 제목/부제: 6번 슬라이드 Assays 카드
 * - 평가 항목: 24번 슬라이드 Business Applications 카드
 */
import type { Localized } from "../../shared/i18n";

const image = "/images/assays/lung/card.webp";

const ko = {
  eyebrow: "어세이 · 폐",
  kicker: "호흡기 독성 · 질환",
  title: "폐 · *호흡기*",
  lead: "폐 · 호흡기 연구",
  brief: {
    image: { src: image, alt: "폐 일러스트" },
    title: "호흡기 반응 평가",
    bullets: ["흡입 약물의 폐 독성 평가", "호흡기 질환 모델 연구", "미세먼지 등 환경물질 영향 평가"],
    tag: "더 안전한 호흡기 치료제",
    action: "문의하기",
  },
};

const en: typeof ko = {
  eyebrow: "Assays · Lung",
  kicker: "Respiratory Toxicity · Disease",
  title: "Lung & *Respiratory*",
  lead: "Lung & Respiratory Research",
  brief: {
    image: { src: image, alt: "Lung illustration" },
    title: "Respiratory Response Evaluation",
    bullets: [
      "Pulmonary toxicity of inhaled drugs",
      "Respiratory disease model research",
      "Effects of environmental agents such as fine dust",
    ],
    tag: "Lung Safer Therapies",
    action: "Contact Us",
  },
};

export const content: Localized<typeof ko> = { ko, en };
