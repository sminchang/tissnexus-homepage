/**
 * Vision & Mission 문구. 시안 PPTX 13~18번 슬라이드에서 옮기고 KO/EN 으로 나눴습니다.
 * 시안은 한글 제목 아래 영문 번역을(또는 그 반대를) 부제로 달았는데,
 * 언어별 페이지에서는 같은 말의 반복이라 그 부제는 뺐습니다.
 * en 은 `typeof ko` 라서 두 언어의 항목이 어긋나면 타입 오류가 납니다.
 */
import {
  Activity,
  Atom,
  Boxes,
  ChartColumn,
  Database,
  Dna,
  FlaskConical,
  Lightbulb,
  Microscope,
  Pill,
  Rat,
  Users,
} from "lucide-react";
import type { Card, Feature } from "../../shared/components";
import type { Localized } from "../../shared/i18n";
import type { ChevronStep } from "../components/ChevronBar";
import type { VisionStage } from "../components/VisionFlow";

const src = (name: string) => `/images/company/${name}.webp`;

const ko = {
  hero: {
    eyebrow: "비전 · 미션",
    title: "인간 중심 생물학,\n*새롭게 정의하다.*",
    lead: "인간 생물학을 더 정확하게 구현하고,\n바이오 연구와 신약개발의 새로운 기준을 만듭니다.",
    body: [
      "TissNexus는 Human-Relevant MPS와 Organ-on-Chip 기술을 통해 실험실의 연구결과와 실제 인간의 생체반응 사이의 간극을 줄이고자 합니다.",
    ],
    image: { src: src("vision-hero"), alt: "간·폐·장 조직이 연결된 Organ-on-Chip" },
    actions: { vision: "비전 보기", mission: "미션 알아보기" },
  },
  vision: {
    eyebrow: "비전",
    kicker: "우리의 비전",
    title: "Human-Relevant MPS를\n바이오 연구와 신약개발의\n*새로운 표준*으로 만듭니다.",
    body: [
      "TissNexus는 세포와 조직, 장기 간 상호작용을 인간의 생리환경에 더 가깝게 구현하는 Human-Relevant MPS와 Organ-on-Chip 기술을 통해 바이오 연구의 패러다임을 바꾸고 있습니다.",
      "우리는 보다 정확하고 신뢰할 수 있는 연구결과를 바탕으로 후보물질의 효능과 안전성을 예측하고, 신약개발의 성공 가능성을 높이는 새로운 기준을 만들어가겠습니다.",
    ],
    image: { src: src("vision-human"), alt: "인체와 장기 오가노이드 일러스트" },
    stages: [
      {
        label: "현재",
        title: "기존 연구모델",
        items: [
          { icon: Microscope, title: "정적 세포배양" },
          { icon: Rat, title: "동물 모델" },
        ],
        caption: "낮은 예측력 · 인간 생물학과의 큰 간극",
      },
      {
        label: "TissNexus",
        title: "Human-Relevant MPS",
        items: [
          { icon: Boxes, title: "Organ-on-Chip" },
          { icon: Atom, title: "다장기 MPS" },
          { icon: FlaskConical, title: "예측형 어세이" },
        ],
        caption: "인간 생물학에 더 가깝게 · 더 정확한 인사이트",
      },
      {
        label: "미래",
        title: "더 건강한 세상",
        items: [
          { icon: Pill, title: "더 정확한 예측" },
          { icon: ChartColumn, title: "더 나은 의사결정" },
          { icon: Users, title: "더 나은 임상 전환" },
        ],
        caption: "더 나은 과학으로 만드는 더 건강한 세상",
      },
    ] as [VisionStage, VisionStage, VisionStage],
    closing: "더 가까운 인간 생물학이,\n*더 나은 바이오의 미래*를 만듭니다.",
  },
  mission: {
    eyebrow: "미션",
    kicker: "우리의 미션",
    title: "인간 생물학을 더 정밀하게 재현하고,\n그 결과를 *더 나은 연구개발 의사결정*으로 연결합니다.",
    image: { src: src("mission-lab"), alt: "Organ-on-Chip을 관찰하는 연구자" },
    cards: [
      {
        num: "01",
        title: "재현",
        subtitle: "인간 생물학의 정밀한 재현",
        image: { src: src("mission-recreate"), alt: "인간 유래 세포 일러스트" },
        body: "인간 유래 세포와 조직, 미세유체 기술을 기반으로 인체의 생리적 환경과 조직 간 상호작용을 보다 정교하게 구현합니다.",
        bullets: ["실험실 안에 더 가까운 인간 생물학을 구현합니다."],
      },
      {
        num: "02",
        title: "예측",
        subtitle: "더 정확한 예측",
        image: { src: src("mission-predict"), alt: "미세유체 칩 속 조직" },
        body: "기존 정적 세포배양과 동물모델만으로 설명하기 어려운 생체반응을 Human-Relevant MPS를 통해 보다 입체적으로 분석합니다.",
        bullets: ["보다 정확한 관찰에서 더 신뢰할 수 있는 예측으로 연결합니다."],
      },
      {
        num: "03",
        title: "연결",
        subtitle: "연구에서 의사결정으로",
        image: { src: src("mission-connect"), alt: "인체 데이터를 검토하는 연구자들" },
        body: "실험결과를 단순한 데이터로 끝내지 않고 신약개발, 안전성 평가, 연구개발 과정의 실제 의사결정에 활용할 수 있도록 연결합니다.",
        bullets: ["과학적 인사이트를 더 나은 연구개발 의사결정으로 연결합니다."],
      },
    ] as Card[],
    flow: [
      { title: "모델", desc: "인간 생물학의 재현" },
      { title: "어세이", desc: "신뢰할 수 있는 분석" },
      { title: "데이터", desc: "검증된 인사이트" },
      { title: "더 나은 의사결정", desc: "더 나은 바이오의 미래" },
    ] as ChevronStep[],
  },
  pillars: {
    eyebrow: "네 가지 전략 축",
    title: "미션을 실현하는\n*네 가지 전략 축*",
    body: [
      "TissNexus는 과학, 인간 생물학, 그리고 더 나은 의사결정을 연결하는 네 가지 전략 축을 통해 우리의 미션을 실현합니다.",
    ],
    image: { src: src("pillars-hero"), alt: "오가노이드가 담긴 웰 플레이트" },
    cards: [
      {
        num: "01",
        title: "인간 중심 시험모델",
        image: { src: src("pillar-models"), alt: "인간 유래 세포" },
        body: "인간 유래 세포와 조직을 기반으로 실제 인간 생리환경에 보다 가까운 모델을 구축합니다.",
      },
      {
        num: "02",
        title: "동적 MPS",
        image: { src: src("pillar-mps"), alt: "미세유체 채널이 있는 MPS 칩" },
        body: "미세유체 기반의 순환과 동적 환경을 구현하여 기존 정적 세포배양의 한계를 보완합니다.",
      },
      {
        num: "03",
        title: "조직·장기 간 연결",
        image: { src: src("pillar-multi-organ"), alt: "연결된 여러 장기 일러스트" },
        body: "단일 조직을 넘어 여러 조직과 장기의 상호작용을 구현하여 복합적인 생체반응을 이해합니다.",
      },
      {
        num: "04",
        title: "예측형 어세이",
        image: { src: src("pillar-assays"), alt: "인체 데이터 분석 화면" },
        body: "간, 골수, 폐, 다장기 등 다양한 어세이로 확장하여 실제 연구개발에 활용 가능한 플랫폼으로 발전시킵니다.",
      },
    ] as Card[],
    flow: [
      { title: "인간 중심 시험모델" },
      { title: "동적 MPS" },
      { title: "조직·장기 간 연결" },
      { title: "예측형 어세이" },
    ] as ChevronStep[],
  },
  direction: {
    eyebrow: "우리가 나아갈 방향",
    title: "모델에서 플랫폼으로,\n실험에서 *예측*으로.",
    body: [
      "TissNexus는 개별 Organ-on-Chip 제품을 넘어, 인간과 더 가까운 생물학을 기반으로 포괄적인 연구 자산을 축적하여 Predictive Bio Platform을 구축하고자 합니다.",
      "우리는 인간 중심 모델, 어세이, 프로토콜, 연구 데이터, 그리고 분석 역량을 유기적으로 연결하여, 제약·바이오 기업과 연구기관이 더 빠르고, 더 신뢰할 수 있는 R&D 의사결정을 내릴 수 있도록 지원합니다.",
    ],
    image: { src: src("direction-hero"), alt: "피펫과 MPS 칩" },
    cards: [
      {
        num: "01",
        title: "모델",
        subtitle: "인간 중심 시험모델",
        image: { src: src("direction-model"), alt: "인간 유래 세포" },
        body: "인간 유래 세포와 조직을 기반으로 실제 생리환경에 가까운 모델을 구축합니다.",
      },
      {
        num: "02",
        title: "어세이",
        subtitle: "예측형 어세이",
        image: { src: src("direction-assay"), alt: "미세생리시스템 칩" },
        body: "동적 미세생리시스템 기반의 정밀하고 재현성 높은 평가체계를 제공합니다.",
      },
      {
        num: "03",
        title: "데이터",
        subtitle: "연구 데이터와 분석",
        image: { src: src("direction-data"), alt: "효능·독성·바이오마커 분석 대시보드" },
        body: "다양한 실험 데이터를 축적하고, AI 기반 분석을 통해 생물학적 인사이트를 도출합니다.",
      },
      {
        num: "04",
        title: "인사이트",
        subtitle: "더 나은 의사결정",
        image: { src: src("direction-insight"), alt: "인체 데이터 인사이트 화면" },
        body: "축적된 지식과 분석 역량을 바탕으로 제약·바이오 기업과 연구기관의 더 빠르고, 더 신뢰할 수 있는 R&D 의사결정을 돕습니다.",
      },
    ] as Card[],
    flow: [{ title: "모델" }, { title: "어세이" }, { title: "데이터" }, { title: "인사이트" }] as ChevronStep[],
    flowCaption: "Predictive Bio Platform으로 확장",
  },
  finalMessage: {
    eyebrow: "맺음말",
    title: "인간 생물학에 *더 가까이.*\n더 나은 의사결정에 *더 가까이.*",
    body: [
      "TissNexus는 Human-Relevant MPS와 Organ-on-Chip 기술을 바탕으로 실험실의 연구결과를 실제 인간 생물학에 더 가까운 통찰로 전환하고자 합니다.",
      "우리는 세포와 조직, 장기와 데이터, 연구와 산업을 연결하여 보다 정확한 예측과 보다 신뢰할 수 있는 의사결정을 지원합니다.",
      "앞으로도 TissNexus는 과학의 정밀성과 플랫폼의 확장성을 기반으로 바이오 연구와 신약개발의 새로운 기준을 만들어가겠습니다.",
    ],
    image: { src: src("final-human"), alt: "장기와 데이터로 연결된 인체 일러스트" },
    steps: [
      { icon: Dna, title: "과학" },
      { icon: Atom, title: "모델" },
      { icon: FlaskConical, title: "어세이" },
      { icon: Database, title: "데이터" },
      { icon: Activity, title: "인사이트" },
      { icon: Lightbulb, title: "더 나은 의사결정" },
    ] as Feature[],
    caption: "더 나은 의사결정을 위한 인간 중심 생물학",
  },
};

const en: typeof ko = {
  hero: {
    eyebrow: "Vision & Mission",
    title: "Human-Relevant\nBiology, *Redefined.*",
    lead: "Recreating human biology more accurately\nand setting new standards for bio research and drug development.",
    body: [
      "Through Human-Relevant MPS and Organ-on-Chip technology, TissNexus aims to close the gap between laboratory results and real human biological responses.",
    ],
    image: { src: src("vision-hero"), alt: "Organ-on-Chip connecting liver, lung and intestine tissue" },
    actions: { vision: "Explore Our Vision", mission: "Discover Our Mission" },
  },
  vision: {
    eyebrow: "Vision",
    kicker: "Our Vision",
    title: "Making Human-Relevant MPS\n*the New Standard* for Bio Research\nand Drug Development.",
    body: [
      "TissNexus is changing the paradigm of bio research with Human-Relevant MPS and Organ-on-Chip technology that recreates cells, tissues, and organ-to-organ interactions closer to human physiology.",
      "Building on more accurate and reliable results, we will predict the efficacy and safety of drug candidates and set new standards that raise the chance of success in drug development.",
    ],
    image: { src: src("vision-human"), alt: "Illustration of the human body with organ organoids" },
    stages: [
      {
        label: "Today",
        title: "Traditional Models",
        items: [
          { icon: Microscope, title: "Static Cell Culture" },
          { icon: Rat, title: "Animal Models" },
        ],
        caption: "Limited Predictivity · Wide Gap to Human Biology",
      },
      {
        label: "TissNexus",
        title: "Human-Relevant MPS",
        items: [
          { icon: Boxes, title: "Organ-on-Chip" },
          { icon: Atom, title: "Multi-Organ MPS" },
          { icon: FlaskConical, title: "Predictive Assays" },
        ],
        caption: "Closer to Human Biology · More Accurate Insights",
      },
      {
        label: "Future",
        title: "A Healthier World",
        items: [
          { icon: Pill, title: "Better Prediction" },
          { icon: ChartColumn, title: "Better Decisions" },
          { icon: Users, title: "Better Translation" },
        ],
        caption: "A Healthier World Through Better Science",
      },
    ],
    closing: "Closer human biology\nbuilds *a better future for bio.*",
  },
  mission: {
    eyebrow: "Mission",
    kicker: "Our Mission",
    title: "We recreate human biology with precision\nand connect it to *better R&D decisions.*",
    image: { src: src("mission-lab"), alt: "Researcher examining an Organ-on-Chip" },
    cards: [
      {
        num: "01",
        title: "Recreate",
        subtitle: "Human Biology",
        image: { src: src("mission-recreate"), alt: "Illustration of human-derived cells" },
        body: "Using human-derived cells, tissues, and microfluidics, we recreate the body's physiological environment and tissue-to-tissue interactions with greater fidelity.",
        bullets: ["We bring human biology closer, inside the lab."],
      },
      {
        num: "02",
        title: "Predict",
        subtitle: "Improved Predictability",
        image: { src: src("mission-predict"), alt: "Tissue inside a microfluidic chip" },
        body: "With Human-Relevant MPS, we analyze in greater depth the responses that static cell culture and animal models alone struggle to explain.",
        bullets: ["We turn more accurate observation into more reliable prediction."],
      },
      {
        num: "03",
        title: "Connect",
        subtitle: "Science to Decisions",
        image: { src: src("mission-connect"), alt: "Researchers reviewing human body data" },
        body: "Results don't end as raw data: we connect them to real decisions in drug development, safety assessment, and R&D.",
        bullets: ["We turn scientific insight into better R&D decisions."],
      },
    ],
    flow: [
      { title: "Model", desc: "Recreating human biology" },
      { title: "Assay", desc: "Reliable analysis" },
      { title: "Data", desc: "Validated insight" },
      { title: "Better Decisions", desc: "A better future for bio" },
    ],
  },
  pillars: {
    eyebrow: "Four Strategic Pillars",
    title: "Four Strategic Pillars\nThat *Deliver Our Mission*",
    body: [
      "TissNexus delivers its mission through four strategic pillars that connect science, human biology, and better decision-making.",
    ],
    image: { src: src("pillars-hero"), alt: "Well plate holding organoids" },
    cards: [
      {
        num: "01",
        title: "Human-Relevant Models",
        image: { src: src("pillar-models"), alt: "Human-derived cells" },
        body: "We build models closer to real human physiology from human-derived cells and tissues.",
      },
      {
        num: "02",
        title: "Dynamic MPS",
        image: { src: src("pillar-mps"), alt: "MPS chip with microfluidic channels" },
        body: "Microfluidic circulation and a dynamic environment overcome the limits of static cell culture.",
      },
      {
        num: "03",
        title: "Multi-Organ Connection",
        image: { src: src("pillar-multi-organ"), alt: "Illustration of connected organs" },
        body: "Going beyond single tissues, we recreate interactions across tissues and organs to understand complex responses.",
      },
      {
        num: "04",
        title: "Predictive Assays",
        image: { src: src("pillar-assays"), alt: "Human body data analysis screen" },
        body: "Expanding into Liver, Bone Marrow, Lung, Multi-Organ and more, we grow a platform ready for real-world R&D.",
      },
    ],
    flow: [
      { title: "Human-Relevant Models" },
      { title: "Dynamic MPS" },
      { title: "Multi-Organ Connection" },
      { title: "Predictive Assays" },
    ],
  },
  direction: {
    eyebrow: "Our Direction",
    title: "From Model to Platform.\nFrom Experiment to *Prediction.*",
    body: [
      "Beyond individual Organ-on-Chip products, TissNexus aims to build a Predictive Bio Platform by accumulating comprehensive research assets grounded in biology closer to humans.",
      "We connect Human-Relevant Models, Assays, Protocols, Research Data, and analytical expertise so that pharma and biotech companies and research institutes can make faster, more reliable R&D decisions.",
    ],
    image: { src: src("direction-hero"), alt: "Pipette and MPS chip" },
    cards: [
      {
        num: "01",
        title: "Model",
        subtitle: "Human-Relevant Models",
        image: { src: src("direction-model"), alt: "Human-derived cells" },
        body: "We build models close to real physiology from human-derived cells and tissues.",
      },
      {
        num: "02",
        title: "Assay",
        subtitle: "Predictive Assays",
        image: { src: src("direction-assay"), alt: "Microphysiological system chip" },
        body: "Precise, highly reproducible evaluation built on dynamic microphysiological systems.",
      },
      {
        num: "03",
        title: "Data",
        subtitle: "Research Data & Analysis",
        image: { src: src("direction-data"), alt: "Efficacy, toxicity and biomarker dashboard" },
        body: "We accumulate diverse experimental data and derive biological insight with AI-based analysis.",
      },
      {
        num: "04",
        title: "Insight",
        subtitle: "Better Decisions",
        image: { src: src("direction-insight"), alt: "Human body data insight screen" },
        body: "Our knowledge and analytics help pharma, biotech, and research institutes make faster, more reliable R&D decisions.",
      },
    ],
    flow: [{ title: "Model" }, { title: "Assay" }, { title: "Data" }, { title: "Insight" }],
    flowCaption: "Expanding into a Predictive Bio Platform",
  },
  finalMessage: {
    eyebrow: "Final Message",
    title: "Closer to *Human Biology.*\nCloser to *Better Decisions.*",
    body: [
      "Built on Human-Relevant MPS and Organ-on-Chip technology, TissNexus aims to turn laboratory results into insight closer to real human biology.",
      "By connecting cells and tissues, organs and data, research and industry, we support more accurate prediction and more reliable decisions.",
      "Grounded in scientific precision and a scalable platform, TissNexus will keep setting new standards for bio research and drug development.",
    ],
    image: { src: src("final-human"), alt: "Human body connected through organs and data" },
    steps: [
      { icon: Dna, title: "Science" },
      { icon: Atom, title: "Model" },
      { icon: FlaskConical, title: "Assay" },
      { icon: Database, title: "Data" },
      { icon: Activity, title: "Insight" },
      { icon: Lightbulb, title: "Better Decisions" },
    ],
    caption: "Human-Relevant Biology for Better Decisions",
  },
};

export const content: Localized<typeof ko> = { ko, en };
