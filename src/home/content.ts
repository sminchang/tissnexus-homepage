/**
 * 홈(Company Overview) 문구. 시안 PPTX 3~9번 슬라이드에서 옮기고 KO/EN 으로 나눴습니다.
 * en 은 `typeof ko` 라서 두 언어의 항목이 어긋나면 타입 오류가 납니다.
 */
import {
  ChartColumn,
  FlaskConical,
  Globe,
  Grid3x3,
  Leaf,
  Lightbulb,
  Microscope,
  Rat,
  Settings,
  Users,
} from "lucide-react";
import type { Card, Feature } from "../shared/components";
import type { Localized } from "../shared/i18n";

const src = (name: string) => `/images/home/${name}.webp`;

const ko = {
  hero: {
    eyebrow: "회사",
    title: "인간 생물학,\n*연결되다.*",
    lead: "인간 생체환경을 더 가깝게 구현하고,\n더 나은 연구와 의사결정을 연결합니다.",
    image: { src: src("hero"), alt: "미세유체 칩 속 오가노이드" },
    action: "TissNexus 알아보기",
  },
  whoWeAre: {
    eyebrow: "우리는",
    title: "더 나은 모델.\n*더 정확한 예측.*\n*더 나은 의사결정.*",
    body: [
      "TissNexus는 Human-Relevant MPS와 Organ-on-Chip 기술을 기반으로 인간의 조직과 장기 기능을 보다 실제에 가깝게 구현하는 Predictive Bio Platform Company입니다.",
      "이를 통해 신약개발과 바이오 연구에서 보다 정확한 관찰과 의사결정을 지원합니다.",
    ],
    image: { src: src("who"), alt: "인간 유래 오가노이드" },
  },
  gap: {
    eyebrow: "우리가 해결하는 간극",
    title: "실험실과 인간 생물학 사이의\n*간극을 잇습니다*",
    lead: "기존 연구모델과 실제 인간 생체반응 사이의 간극을\nHuman-Relevant MPS를 통해 줄입니다.",
    diagram: {
      traditionalLabel: "기존 연구모델",
      traditional: [
        { icon: Microscope, title: "세포 배양" },
        { icon: Rat, title: "동물 모델" },
        { icon: Grid3x3, title: "정적 모델" },
      ] as Feature[],
      coreLabel: "TissNexus",
      core: ["MPS", "Organ-on-Chip", "Human-Relevant"],
      outcomesLabel: "인간 생물학",
      outcomes: [
        { icon: ChartColumn, title: "더 정확한 예측" },
        { icon: Lightbulb, title: "더 나은 의사결정" },
      ] as Feature[],
    },
  },
  whatWeDo: {
    eyebrow: "사업 분야",
    title: "인간 중심\n*어세이*",
    lead: "다양한 장기 특이적 모델과 맞춤형 분석 서비스를 통해\n보다 정확하고 의미 있는 연구 결과를 제공합니다.",
    image: { src: src("assays-chip"), alt: "장기 모델이 배양된 MPS 칩" },
    assays: [
      {
        title: "간독성 · 대사 평가",
        subtitle: "대사 · 독성 · 질환",
        image: { src: src("assay-liver"), alt: "간 일러스트" },
        to: "/assays/liver",
      },
      {
        title: "골수 · 혈액독성 평가",
        subtitle: "혈액학 · 면역학",
        image: { src: src("assay-bone-marrow"), alt: "골수 세포 일러스트" },
        to: "/assays/bone-marrow",
      },
      {
        title: "폐 · 호흡기 연구",
        subtitle: "호흡기 독성 · 질환",
        image: { src: src("assay-lung"), alt: "폐 일러스트" },
        to: "/assays/lung",
      },
      {
        title: "다장기 상호작용 분석",
        subtitle: "전신 상호작용 · ADME",
        image: { src: src("assay-multi-organ"), alt: "다장기 일러스트" },
        to: "/assays/multi-organ",
      },
    ] as Card[],
    custom: {
      title: "맞춤형 시험 · *공동개발*",
      desc: "고객의 연구 목적에 최적화된 모델과 분석 서비스를 제공합니다.",
      items: [
        { icon: FlaskConical, title: "맞춤형 모델", desc: "연구 목적에 맞춘 모델 설계" },
        { icon: Settings, title: "유연한 어세이 설계", desc: "유연한 분석 방법" },
        { icon: Users, title: "공동 연구개발", desc: "함께 만드는 연구" },
      ] as Feature[],
    },
  },
  why: {
    eyebrow: "왜 TissNexus인가",
    title: "왜 *TissNexus*인가",
    lead: "더 가까운 인간 생물학,\n더 정확한 예측, 더 나은 내일을 만듭니다.",
    reasons: [
      {
        num: "01",
        title: "인간 관련성",
        subtitle: "인간 생물학에 더 가깝게",
        image: { src: src("why-relevance"), alt: "인체 장기 일러스트" },
        body: "실제 인간의 생리적 환경에 더 가까운 모델로 보다 신뢰할 수 있는 연구 결과를 제공합니다.",
      },
      {
        num: "02",
        title: "동적 시스템",
        subtitle: "정적 세포배양을 넘어",
        image: { src: src("why-dynamic"), alt: "미세유체 채널 속 조직" },
        body: "정적인 세포배양을 넘어 시간에 따른 반응과 상호작용을 반영하는 동적 시스템을 구현합니다.",
      },
      {
        num: "03",
        title: "연결된 시스템",
        subtitle: "다장기 상호작용",
        image: { src: src("why-connected"), alt: "간과 폐, 장이 연결된 모습" },
        body: "장기 간 상호작용을 연결한 통합 모델로 복잡한 생체 반응을 더 깊이 이해합니다.",
      },
      {
        num: "04",
        title: "예측 인사이트",
        subtitle: "실험에서 의사결정으로",
        image: { src: src("why-predictive"), alt: "안전성·효능 데이터 시각화" },
        body: "더 정확한 데이터를 기반으로 신약개발과 바이오 연구의 핵심 의사결정을 지원합니다.",
      },
    ] as Card[],
    closing: {
      title: "과학을 연결해 *더 건강한 내일*로.",
      desc: "TissNexus는 과학을 연결하여, 더 건강한 내일을 만듭니다.",
    },
  },
  tissNexus: {
    eyebrow: "Tiss + Nexus",
    title: "TissNexus\n*Tissue × Nexus*",
    lead: "세포와 조직, 장기와 기술,\n과학과 산업을 연결하여\n더 건강한 내일을 만듭니다.",
    body: ["TissNexus는 연구의 가능성을 연결하여 인간의 건강한 미래를 함께 만들어 갑니다."],
    image: { src: src("tiss-nexus"), alt: "Tissue(세포·조직·장기)와 Nexus(연결·통합·네트워크)의 결합" },
    actions: { platform: "플랫폼 살펴보기", partner: "파트너십 문의" },
  },
  commitment: {
    eyebrow: "우리의 약속",
    title: "다른 과학,\n*더 건강한 내일.*",
    lead: "TissNexus는 인간의 생물학을 더 가까이 연결하여\n질병 없는, 더 건강한 내일을 만들어갑니다.",
    image: { src: src("commitment"), alt: "미래 도시를 바라보는 사람들" },
    features: [
      { icon: Microscope, title: "더 나은 모델", desc: "더 인간에 가까운 인사이트" },
      { icon: Users, title: "더 과감한 발견", desc: "연구 성과의 더 빠른 전환" },
      { icon: Globe, title: "더 건강한 사람들", desc: "실제 삶을 위한 더 나은 치료" },
      { icon: Leaf, title: "더 밝은 내일", desc: "다음 세대를 위한 더 건강한 세상" },
    ] as Feature[],
    action: "함께 시작하기",
  },
};

const en: typeof ko = {
  hero: {
    eyebrow: "Company",
    title: "Human Biology.\n*Connected.*",
    lead: "Bringing the human body closer to the lab,\nand connecting it to better research and decisions.",
    image: { src: src("hero"), alt: "Organoids inside a microfluidic chip" },
    action: "Explore TissNexus",
  },
  whoWeAre: {
    eyebrow: "Who We Are",
    title: "Better Models.\n*Better Prediction.*\n*Better Decisions.*",
    body: [
      "TissNexus is a Predictive Bio Platform Company that recreates human tissue and organ function more faithfully, built on Human-Relevant MPS and Organ-on-Chip technology.",
      "We enable more accurate observation and decision-making in drug development and bio research.",
    ],
    image: { src: src("who"), alt: "Human-derived organoid" },
  },
  gap: {
    eyebrow: "The Gap We Solve",
    title: "Bridging the Gap Between\n*Laboratory and Human Biology*",
    lead: "We narrow the gap between conventional research models\nand real human responses with Human-Relevant MPS.",
    diagram: {
      traditionalLabel: "Traditional Models",
      traditional: [
        { icon: Microscope, title: "Cell Culture" },
        { icon: Rat, title: "Animal Models" },
        { icon: Grid3x3, title: "Static Models" },
      ],
      coreLabel: "TissNexus",
      core: ["MPS", "Organ-on-Chip", "Human-Relevant"],
      outcomesLabel: "Human Biology",
      outcomes: [
        { icon: ChartColumn, title: "Better Prediction" },
        { icon: Lightbulb, title: "Better Decisions" },
      ],
    },
  },
  whatWeDo: {
    eyebrow: "What We Do",
    title: "Human-Relevant\n*Assays*",
    lead: "Organ-specific models and tailored analytical services\ndeliver more accurate, meaningful research results.",
    image: { src: src("assays-chip"), alt: "MPS chip with cultured organ models" },
    assays: [
      {
        title: "Hepatotoxicity · Metabolism",
        subtitle: "Metabolism · Toxicity · Disease",
        image: { src: src("assay-liver"), alt: "Liver illustration" },
        to: "/assays/liver",
      },
      {
        title: "Bone Marrow · Hematotoxicity",
        subtitle: "Hematology · Immunology",
        image: { src: src("assay-bone-marrow"), alt: "Bone marrow cell illustration" },
        to: "/assays/bone-marrow",
      },
      {
        title: "Lung · Respiratory Research",
        subtitle: "Respiratory Toxicity · Disease",
        image: { src: src("assay-lung"), alt: "Lung illustration" },
        to: "/assays/lung",
      },
      {
        title: "Multi-Organ Interaction",
        subtitle: "Systemic Interaction · ADME",
        image: { src: src("assay-multi-organ"), alt: "Multi-organ illustration" },
        to: "/assays/multi-organ",
      },
    ],
    custom: {
      title: "Custom Studies · *Co-development*",
      desc: "Models and analytical services optimized for your research goals.",
      items: [
        { icon: FlaskConical, title: "Tailored Models", desc: "Custom model design" },
        { icon: Settings, title: "Flexible Assay Design", desc: "Flexible analytical methods" },
        { icon: Users, title: "Collaborative R&D", desc: "Joint research & development" },
      ],
    },
  },
  why: {
    eyebrow: "Why TissNexus",
    title: "Why *TissNexus*",
    lead: "Closer human biology,\nmore accurate prediction, and a better tomorrow.",
    reasons: [
      {
        num: "01",
        title: "Human Relevance",
        subtitle: "Closer to Human Biology",
        image: { src: src("why-relevance"), alt: "Human organ illustration" },
        body: "Models closer to real human physiology deliver more reliable research results.",
      },
      {
        num: "02",
        title: "Dynamic System",
        subtitle: "Beyond Static Cell Culture",
        image: { src: src("why-dynamic"), alt: "Tissue inside microfluidic channels" },
        body: "Dynamic systems go beyond static culture to capture responses and interactions over time.",
      },
      {
        num: "03",
        title: "Connected System",
        subtitle: "Multi-Organ Interaction",
        image: { src: src("why-connected"), alt: "Connected liver, lung and intestine" },
        body: "Integrated models that link organs reveal complex biological responses in greater depth.",
      },
      {
        num: "04",
        title: "Predictive Insight",
        subtitle: "From Experiment to Decision",
        image: { src: src("why-predictive"), alt: "Safety and efficacy data visualization" },
        body: "More accurate data supports the key decisions in drug development and bio research.",
      },
    ],
    closing: {
      title: "Connecting Science to a *Healthier Tomorrow.*",
      desc: "TissNexus connects science to build a healthier tomorrow.",
    },
  },
  tissNexus: {
    eyebrow: "Tiss + Nexus",
    title: "TissNexus\n*Tissue × Nexus*",
    lead: "Connecting cells and tissues, organs and technology,\nscience and industry\nfor a healthier tomorrow.",
    body: ["TissNexus connects the possibilities of research to build a healthier future for people."],
    image: { src: src("tiss-nexus"), alt: "Tissue (cells, tissues, organs) meets Nexus (connection, integration, network)" },
    actions: { platform: "Explore Our Platform", partner: "Partner With Us" },
  },
  commitment: {
    eyebrow: "Our Commitment",
    title: "Different Science\n*A Healthier Tomorrow.*",
    lead: "TissNexus brings human biology closer\nto build a healthier tomorrow, free from disease.",
    image: { src: src("commitment"), alt: "People looking out over a future city" },
    features: [
      { icon: Microscope, title: "Better Models", desc: "More human-relevant insights" },
      { icon: Users, title: "Bolder Discoveries", desc: "Faster translation to impact" },
      { icon: Globe, title: "Healthier People", desc: "Improved treatments for real lives" },
      { icon: Leaf, title: "Brighter Tomorrow", desc: "A healthier world for future generations" },
    ],
    action: "Join the Next Chapter",
  },
};

export const content: Localized<typeof ko> = { ko, en };
