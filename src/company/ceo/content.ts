/**
 * CEO 인사말. 시안 PPTX 11번 슬라이드에서 옮기고 KO/EN 으로 나눴습니다.
 * en 은 `typeof ko` 라서 두 언어의 항목이 어긋나면 타입 오류가 납니다.
 */
import type { Localized } from "../../shared/i18n";

// TODO: 실제 대표이사 프로필 사진으로 교체 (현재는 시안에서 잘라낸 임시 이미지)
const portrait = "/images/company/ceo-portrait.webp";

const ko = {
  eyebrow: "대표 인사말",
  title: "Tiss*Nexus*는\nHuman-Relevant MPS로\n바이오의 미래를 열어갑니다.",
  body: [
    "인간 생물학을 더 가깝게 이해하고 정밀하게 재현하는 일은 미래 바이오 연구와 신약개발의 핵심 출발점입니다.",
    "TissNexus는 Human-Relevant MPS와 Organ-on-Chip 기술을 기반으로 실험실의 연구를 사람에게 더 가까운 통찰로 전환하는 새로운 바이오 플랫폼을 구축하고 있습니다.",
    "우리는 세포와 조직, 장기와 기술, 연구와 산업을 유기적으로 연결하여 보다 정확한 예측, 보다 신뢰할 수 있는 검증, 그리고 보다 실질 가능한 연구개발 의사결정을 지원하고자 합니다.",
    "앞으로도 TissNexus는 기술의 깊이와 과학의 정밀성을 바탕으로 바이오 혁신의 새로운 기준을 제시하고, 더 많은 연구자와 산업 파트너가 그 성과를 체감할 수 있도록 끊임없이 도전하겠습니다.",
  ],
  signature: {
    slogan: "인간 생물학, *연결되다.*",
    role: "대표이사",
    name: "차상훈",
  },
  portrait: { src: portrait, alt: "TissNexus 대표이사 차상훈" },
};

const en: typeof ko = {
  eyebrow: "CEO Message",
  title: "Tiss*Nexus* Opens\nthe Future of Bio with\nHuman-Relevant MPS.",
  body: [
    "Understanding human biology more closely and reproducing it with precision is the essential starting point for the future of bio research and drug development.",
    "Built on Human-Relevant MPS and Organ-on-Chip technology, TissNexus is creating a new bio platform that turns laboratory research into insight closer to people.",
    "By connecting cells and tissues, organs and technology, research and industry, we aim to support more accurate prediction, more reliable validation, and more practical R&D decisions.",
    "Grounded in technical depth and scientific precision, TissNexus will keep setting new standards for bio innovation, and keep pushing so that more researchers and industry partners can experience the results.",
  ],
  signature: {
    slogan: "Human Biology. *Connected.*",
    role: "CEO",
    // TODO: 영문 표기 확인 필요
    name: "Sanghoon Cha",
  },
  portrait: { src: portrait, alt: "Sanghoon Cha, CEO of TissNexus" },
};

export const content: Localized<typeof ko> = { ko, en };
