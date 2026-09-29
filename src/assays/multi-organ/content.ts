/**
 * Assays · Multi-organ 문구. 전용 시안이 없어 기존 슬라이드의 문구만 옮기고 KO/EN 으로 나눴습니다.
 * - 제목/부제: 6번 슬라이드 Assays 카드
 * - 평가 항목: 24번 슬라이드 Business Applications 카드
 */
import type { Localized } from "../../shared/i18n";

const image = "/images/assays/multi-organ/card.webp";

const ko = {
  eyebrow: "어세이 · 다장기",
  kicker: "전신 상호작용 · ADME",
  title: "*다장기*",
  lead: "다장기 상호작용 분석",
  brief: {
    image: { src: image, alt: "간·폐·장이 연결된 다장기 모델" },
    title: "장기 간 상호작용 평가",
    bullets: [
      "다장기 연결 모델 기반 시스템 독성 평가",
      "약물의 전신적 반응 및 대사 연계 분석",
      "복합 질환 모델 및 병용요법 연구",
    ],
    tag: "시스템 수준의 인사이트",
    action: "문의하기",
  },
};

const en: typeof ko = {
  eyebrow: "Assays · Multi-organ",
  kicker: "Systemic Interaction · ADME",
  title: "*Multi-Organ*",
  lead: "Multi-Organ Interaction Analysis",
  brief: {
    image: { src: image, alt: "Multi-organ model connecting liver, lung and intestine" },
    title: "Inter-Organ Interaction Evaluation",
    bullets: [
      "Systemic toxicity with connected multi-organ models",
      "Systemic drug response and linked metabolism",
      "Complex disease models and combination therapy",
    ],
    tag: "System-Level Insights",
    action: "Contact Us",
  },
};

export const content: Localized<typeof ko> = { ko, en };
