/**
 * Assays · Custom Assay 문구. 전용 시안이 없어 기존 슬라이드의 문구만 옮기고 KO/EN 으로 나눴습니다.
 * - 제목/설명/특징: 6번 슬라이드 Custom Assay 배너
 * - 평가 항목: 24번 슬라이드 Business Applications 카드
 */
import { FlaskConical, Settings, Users } from "lucide-react";
import type { Feature } from "../../shared/components";
import type { Localized } from "../../shared/i18n";

const image = "/images/assays/custom/card.webp";

const ko = {
  eyebrow: "어세이 · 맞춤형",
  kicker: "맞춤형 어세이",
  title: "맞춤형 시험 · *공동개발*",
  body: ["고객의 연구 목적에 최적화된 모델과 분석 서비스를 제공합니다."],
  features: [
    { icon: FlaskConical, title: "맞춤형 모델", desc: "맞춤형 모델 설계" },
    { icon: Settings, title: "유연한 어세이 설계", desc: "유연한 분석 방법" },
    { icon: Users, title: "협력 연구개발", desc: "공동연구 개발" },
  ] as Feature[],
  brief: {
    image: { src: image, alt: "맞춤형 어세이를 위한 세포 배양" },
    title: "맞춤형 모델·어세이 개발",
    bullets: ["연구 목적에 최적화된 모델 설계", "질환 특이적 맞춤 어세이 개발", "공동연구 및 파트너십 지원"],
    tag: "고객의 연구, TissNexus의 플랫폼",
    action: "문의하기",
  },
};

const en: typeof ko = {
  eyebrow: "Assays · Custom",
  kicker: "Custom Assay",
  title: "Custom Studies · *Co-development*",
  body: ["Models and analytical services optimized for your research goals."],
  features: [
    { icon: FlaskConical, title: "Tailored Models", desc: "Custom model design" },
    { icon: Settings, title: "Flexible Assay Design", desc: "Flexible analytical methods" },
    { icon: Users, title: "Collaborative R&D", desc: "Joint research & development" },
  ],
  brief: {
    image: { src: image, alt: "Cell culture for a custom assay" },
    title: "Custom Model & Assay Development",
    bullets: ["Models designed for your research goals", "Disease-specific custom assays", "Joint research and partnership support"],
    tag: "Your Research, Our Platform",
    action: "Contact Us",
  },
};

export const content: Localized<typeof ko> = { ko, en };
