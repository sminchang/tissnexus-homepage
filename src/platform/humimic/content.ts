/**
 * HUMIMIC® Platform 문구. 시안 PPTX 20~24번 슬라이드에서 옮기고 KO/EN 으로 나눴습니다.
 * en 은 `typeof ko` 라서 두 언어의 항목이 어긋나면 타입 오류가 납니다.
 */
import {
  Boxes,
  Brain,
  ChartColumn,
  Database,
  Droplet,
  FlaskConical,
  Heart,
  Layers,
  Lightbulb,
  Microscope,
  Network,
  PersonStanding,
  Pill,
  Settings,
  Share2,
  ShieldCheck,
  Target,
  TestTube,
  TrendingUp,
  User,
  Users,
  Waves,
} from "lucide-react";
import type { Card, Feature } from "../../shared/components";
import type { Localized } from "../../shared/i18n";

const src = (name: string) => `/images/platform/humimic/${name}.webp`;

const ko = {
  label: "HUMIMIC® 플랫폼",
  motion: {
    title: "움직이는\n*인간 생물학.*",
    lead: "인간 생물학을 정적인 모델이 아닌\n*살아 움직이는 시스템*으로 구현합니다.",
    body: [
      "TissNexus의 HUMIMIC® Platform은 인간 유래 세포와 조직을 미세유체 기반의 동적 환경에서 배양하여, 보다 실제 인체에 가까운 생리적 반응을 구현하고, 더 나은 신약개발의 가능성을 만들어갑니다.",
    ],
    image: { src: src("motion-chip"), alt: "장기 모델이 연결된 HUMIMIC® 칩" },
    features: [
      { icon: User, title: "인간 중심", desc: "인간 유래 세포·조직 기반" },
      { icon: Waves, title: "동적 환경", desc: "살아있는 생리환경 모사" },
      { icon: Share2, title: "연결된 시스템", desc: "장기 간 상호작용 구현" },
      { icon: ChartColumn, title: "더 나은 의사결정", desc: "더 정확한 예측과 신뢰할 수 있는 의사결정" },
    ] as Feature[],
  },
  applications: {
    title: "기술에서\n*실제 연구개발 적용까지*",
    lead: "첨단 MPS 기술을 실제 연구개발 가치로 전환합니다",
    body: [
      "HUMIMIC®은 단순한 연구 장비가 아닙니다. TissNexus는 Human-Relevant MPS 기술을 실용적인 모델, 예측형 어세이, 연구 데이터, 그리고 더 나은 R&D 의사결정을 위한 실행 가능한 인사이트로 전환합니다.",
    ],
    image: { src: src("applications"), alt: "미세유체 칩에 시료를 주입하는 모습" },
    steps: [
      { icon: Boxes, title: "HUMIMIC®", desc: "첨단 MPS 기술" },
      { icon: PersonStanding, title: "인간 중심 모델", desc: "생리학적으로 유의한 모델" },
      { icon: TestTube, title: "예측형 어세이", desc: "신뢰할 수 있는 인간 중심 시험" },
      { icon: Database, title: "연구 데이터", desc: "고품질 다차원 데이터" },
      { icon: Brain, title: "과학적 인사이트", desc: "인간 생물학에 대한 더 깊은 이해" },
      { icon: TrendingUp, title: "R&D 의사결정", desc: "더 빠르고 현명한 R&D 의사결정" },
    ] as Feature[],
  },
  connected: {
    title: "연결된 시스템 속\n*인간 생물학*",
    lead: "연결된 시스템 안에서 인간 생물학을 구현합니다",
    body: [
      "TissNexus는 HUMIMIC® Platform을 통해 인간 유래 조직 모델, 미세유체 순환, 제어된 노출, 조직 간 상호작용, 생물학적 분석을 하나로 연결하여, 실제 연구와 신약개발에 적용 가능한 실용적인 R&D 플랫폼을 제공합니다.",
    ],
    image: { src: src("connected-system"), alt: "간·뇌·장·신장 조직이 미세유체로 연결된 HUMIMIC® 플랫폼 도식" },
    capabilities: [
      { icon: Layers, title: "조직 구획", subtitle: "장기별 특이적 평가" },
      { icon: Droplet, title: "미세유체 순환", subtitle: "인체에 더 가까운 반응" },
      { icon: Share2, title: "조직 간 상호작용", subtitle: "다장기 인사이트" },
      { icon: Pill, title: "제어된 노출", subtitle: "정밀한 시험 설계" },
      { icon: ChartColumn, title: "생물학적 분석", subtitle: "의사결정에 바로 쓰는 데이터" },
    ] as Card[],
    flow: [
      { icon: Network, title: "플랫폼", desc: "인간 모델 통합" },
      { icon: FlaskConical, title: "어세이", desc: "목적 맞춤형 시험" },
      { icon: ChartColumn, title: "데이터", desc: "고품질 생물학적 데이터" },
      { icon: Lightbulb, title: "인사이트", desc: "더 빠른 결정, 더 큰 임팩트" },
    ] as Feature[],
  },
  capabilities: {
    kicker: "핵심 역량",
    title: "실제 연구개발을 위해\n*만든 기술.*",
    lead: "더 정확한 생물학, 더 나은 연구개발의 의사결정.",
    body: [
      "TissNexus는 인간 생리환경을 정밀하게 모사하는 핵심 기술 역량을 바탕으로 신약개발과 바이오 연구의 실질적인 가치를 만들어갑니다.",
    ],
    image: { src: src("chip-hand"), alt: "장갑 낀 손에 들린 HUMIMIC® 칩" },
    cards: [
      {
        num: "01",
        title: "인간 관련성",
        subtitle: "인간에 더 가까운 생물학적 모델",
        image: { src: src("cap-relevance"), alt: "인간 유래 세포 오가노이드" },
        body: "인간 유래 세포와 조직을 기반으로 실제 인체와 유사한 생리학적 특성을 구현합니다.",
        bullets: ["인간 유래 세포·조직 기반", "장기 특이적 생리기능 재현", "동물모델 대비 높은 예측성"],
        tag: "인간 생물학에 더 가깝게",
      },
      {
        num: "02",
        title: "동적 환경",
        subtitle: "살아있는 생리환경의 구현",
        image: { src: src("cap-dynamic"), alt: "혈류를 모사하는 미세유체 채널" },
        body: "미세유체 기술을 통해 혈류, 전단응력, 산소·영양 공급 등 동적인 생체 환경을 정밀하게 재현합니다.",
        bullets: ["미세유체 기반 동적 배양", "생체 유사 유동 조건", "장기 기능의 시간적 변화 관찰"],
        tag: "정적 배양을 넘어",
      },
      {
        num: "03",
        title: "다조직 연결성",
        subtitle: "복합적인 장기 간 상호작용",
        image: { src: src("cap-connectivity"), alt: "여러 장기 조직이 연결된 칩" },
        body: "여러 장기 조직을 하나의 시스템으로 연결하여 약물의 전신적 반응과 장기 간 상호작용을 분석합니다.",
        bullets: ["다장기 연결 플랫폼", "장기 간 신호전달·대사 연계", "복합 독성 및 효능 평가"],
        tag: "시스템 수준의 인사이트",
      },
      {
        num: "04",
        title: "연구 유연성",
        subtitle: "다양한 연구 목적에 최적화",
        image: { src: src("cap-flexibility"), alt: "칩에 시료를 분주하는 모습" },
        body: "표준화된 모델부터 맞춤형 모델까지 고객의 연구 목적에 따라 유연하게 설계·적용합니다.",
        bullets: ["표준 어세이 라이브러리", "맞춤형 모델·어세이 개발", "신규 연구 주제 공동개발"],
        tag: "표준에서 맞춤까지",
      },
    ] as Card[],
    banner: {
      title: "TissNexus는 첨단 과학을 *실제 연구개발의 성과*로 연결합니다.",
      items: [
        { icon: FlaskConical, title: "더 나은 과학" },
        { icon: TrendingUp, title: "더 빠른 R&D" },
        { icon: Target, title: "더 낮은 리스크" },
        { icon: Users, title: "더 건강한 내일" },
      ] as Feature[],
    },
  },
  solutions: {
    kicker: "사업 적용 분야",
    title: "하나의 플랫폼,\n*다양한 R&D 솔루션.*",
    lead: "더 넓은 가능성, 더 빠른 혁신.",
    body: [
      "TissNexus는 HUMIMIC® 플랫폼을 기반으로 다양한 장기 모델과 질환 모델을 구축하여 신약개발, 독성평가, 질환연구 등 폭넓은 연구 분야에 적용하고 있습니다.",
    ],
    image: { src: src("solutions-chip"), alt: "다장기 HUMIMIC® 칩" },
    cards: [
      {
        title: "간",
        subtitle: "간독성 및 대사 평가",
        image: { src: src("app-liver"), alt: "간 조직 모델" },
        bullets: ["약물에 의한 간독성 평가", "약물 대사 및 약물-약물 상호작용", "지방간, 간질환 모델 연구"],
        to: "/assays/liver",
      },
      {
        title: "폐",
        subtitle: "호흡기 반응 평가",
        image: { src: src("app-lung"), alt: "폐 조직 모델" },
        bullets: ["흡입 약물의 폐 독성 평가", "호흡기 질환 모델 연구", "미세먼지 등 환경물질 영향 평가"],
        to: "/assays/lung",
      },
      {
        title: "장",
        subtitle: "장 흡수 및 장독성 평가",
        image: { src: src("app-intestine"), alt: "장 조직 모델" },
        bullets: ["경구 약물의 흡수 및 대사 평가", "장독성 및 장내 미생물 상호작용", "염증성 장질환 모델 연구"],
      },
      {
        title: "골수",
        subtitle: "혈액·면역독성 평가",
        image: { src: src("app-bone-marrow"), alt: "골수 세포 모델" },
        bullets: ["골수 독성 및 혈액계 안전성 평가", "면역반응 및 염증반응 분석", "항암제 등 고위험 약물 평가"],
        to: "/assays/bone-marrow",
      },
      {
        title: "다장기",
        subtitle: "장기 간 상호작용 평가",
        image: { src: src("app-multi-organ"), alt: "간·폐·장이 연결된 다장기 모델" },
        bullets: ["다장기 연결 모델 기반 시스템 독성 평가", "약물의 전신적 반응 및 대사 연계 분석", "복합 질환 모델 및 병용요법 연구"],
        to: "/assays/multi-organ",
      },
      {
        title: "맞춤형 어세이",
        subtitle: "맞춤형 모델·어세이 개발",
        image: { src: src("app-custom"), alt: "맞춤형 어세이용 칩" },
        bullets: ["연구 목적에 최적화된 모델 설계", "질환 특이적 맞춤 어세이 개발", "공동연구 및 파트너십 지원"],
        to: "/assays/custom",
      },
    ] as Card[],
    valueChain: {
      label: "R&D 전 과정에 적용",
      items: [
        { icon: Pill, title: "신약개발" },
        { icon: ShieldCheck, title: "독성평가" },
        { icon: Microscope, title: "질환연구" },
        { icon: Network, title: "바이오마커 발굴" },
        { icon: Users, title: "개인맞춤의학" },
        { icon: Settings, title: "공동연구" },
      ] as Feature[],
    },
    banner: {
      title: "TissNexus는 인간 생물학의 가능성을 확장하여, *더 건강한 미래*를 앞당깁니다.",
      items: [
        { icon: TrendingUp, title: "더 나은 후보물질" },
        { icon: Target, title: "더 낮은 R&D 리스크" },
        { icon: Heart, title: "더 건강한 미래" },
      ] as Feature[],
    },
  },
};

const en: typeof ko = {
  label: "HUMIMIC® Platform",
  motion: {
    title: "Human Biology\n*in Motion.*",
    lead: "We recreate human biology not as a static model,\nbut as a *living, moving system.*",
    body: [
      "TissNexus's HUMIMIC® Platform cultures human-derived cells and tissues in a dynamic microfluidic environment, recreating physiological responses closer to the real human body and opening new possibilities for better drug development.",
    ],
    image: { src: src("motion-chip"), alt: "HUMIMIC® chip with connected organ models" },
    features: [
      { icon: User, title: "Human-Relevant", desc: "Built on human-derived cells and tissues" },
      { icon: Waves, title: "Dynamic", desc: "Mimics a living physiological environment" },
      { icon: Share2, title: "Connected", desc: "Recreates inter-organ interactions" },
      { icon: ChartColumn, title: "Better Decisions", desc: "More accurate prediction, more reliable decisions" },
    ],
  },
  applications: {
    title: "From Technology to\n*Real R&D Applications*",
    lead: "Turning advanced MPS technology into real R&D value",
    body: [
      "HUMIMIC® is more than a research device. TissNexus transforms human-relevant MPS technology into practical models, predictive assays, research data, and actionable insight for better R&D decisions.",
    ],
    image: { src: src("applications"), alt: "Loading a sample into a microfluidic chip" },
    steps: [
      { icon: Boxes, title: "HUMIMIC®", desc: "Advanced MPS Technology" },
      { icon: PersonStanding, title: "Human-Relevant Model", desc: "Physiologically Relevant Models" },
      { icon: TestTube, title: "Predictive Assay", desc: "Reliable Human-Relevant Testing" },
      { icon: Database, title: "Research Data", desc: "High-Quality Multidimensional Data" },
      { icon: Brain, title: "Scientific Insight", desc: "Deeper Understanding of Human Biology" },
      { icon: TrendingUp, title: "R&D Decision", desc: "Faster, Smarter R&D Decisions" },
    ],
  },
  connected: {
    title: "Human Biology in\n*a Connected System*",
    lead: "Recreating human biology within a connected system",
    body: [
      "Through the HUMIMIC® Platform, TissNexus brings together human-derived tissue models, microfluidic circulation, controlled exposure, tissue-to-tissue interaction and biological analysis in one practical R&D platform for real research and drug development.",
    ],
    image: {
      src: src("connected-system"),
      alt: "HUMIMIC® platform diagram with liver, brain, intestine and kidney tissues linked by microfluidics",
    },
    capabilities: [
      { icon: Layers, title: "Tissue Compartments", subtitle: "Organ-specific evaluation" },
      { icon: Droplet, title: "Microfluidic Circulation", subtitle: "Closer-to-human response" },
      { icon: Share2, title: "Tissue Interaction", subtitle: "Multi-organ insights" },
      { icon: Pill, title: "Controlled Exposure", subtitle: "Precise study design" },
      { icon: ChartColumn, title: "Biological Readout", subtitle: "Decision-ready data" },
    ],
    flow: [
      { icon: Network, title: "Platform", desc: "Human models integrated" },
      { icon: FlaskConical, title: "Assay", desc: "Purpose-built studies" },
      { icon: ChartColumn, title: "Data", desc: "High-quality biological data" },
      { icon: Lightbulb, title: "Insight", desc: "Faster decisions, greater impact" },
    ],
  },
  capabilities: {
    kicker: "Core Capabilities",
    title: "Technology Built\n*for Real R&D.*",
    lead: "More accurate biology, better R&D decisions.",
    body: [
      "Built on core capabilities that precisely mimic human physiology, TissNexus creates real value for drug development and bio research.",
    ],
    image: { src: src("chip-hand"), alt: "HUMIMIC® chip held in a gloved hand" },
    cards: [
      {
        num: "01",
        title: "Human Relevance",
        subtitle: "Biological models closer to humans",
        image: { src: src("cap-relevance"), alt: "Human-derived cell organoids" },
        body: "Built on human-derived cells and tissues, our models recreate physiological properties similar to the real human body.",
        bullets: ["Human-derived cells and tissues", "Organ-specific physiological function", "Higher predictivity than animal models"],
        tag: "Closer to Human Biology",
      },
      {
        num: "02",
        title: "Dynamic Environment",
        subtitle: "Recreating living physiology",
        image: { src: src("cap-dynamic"), alt: "Microfluidic channels mimicking blood flow" },
        body: "Microfluidics precisely recreates dynamic conditions such as blood flow, shear stress, and oxygen and nutrient supply.",
        bullets: ["Microfluidic dynamic culture", "Physiological flow conditions", "Tracking organ function over time"],
        tag: "Beyond Static Culture",
      },
      {
        num: "03",
        title: "Multi-Tissue Connectivity",
        subtitle: "Complex inter-organ interactions",
        image: { src: src("cap-connectivity"), alt: "Chip with several connected organ tissues" },
        body: "Multiple organ tissues are linked into one system to analyze systemic drug responses and inter-organ interactions.",
        bullets: ["Multi-organ connected platform", "Inter-organ signaling and metabolism", "Combined toxicity and efficacy testing"],
        tag: "System-Level Insights",
      },
      {
        num: "04",
        title: "Research Flexibility",
        subtitle: "Optimized for diverse research goals",
        image: { src: src("cap-flexibility"), alt: "Pipetting a sample into a chip" },
        body: "From standardized to custom models, we design and apply flexibly to fit your research goals.",
        bullets: ["Standard assay library", "Custom model & assay development", "Co-development of new research topics"],
        tag: "From Standard to Custom",
      },
    ],
    banner: {
      title: "TissNexus turns advanced science into *real-world impact.*",
      items: [
        { icon: FlaskConical, title: "Better Science" },
        { icon: TrendingUp, title: "Faster R&D" },
        { icon: Target, title: "Lower Risk" },
        { icon: Users, title: "Healthier Tomorrow" },
      ],
    },
  },
  solutions: {
    kicker: "Business Applications",
    title: "One Platform.\n*Multiple R&D Solutions.*",
    lead: "Broader possibilities, faster innovation.",
    body: [
      "Building on the HUMIMIC® platform, TissNexus develops a wide range of organ and disease models and applies them across drug development, toxicity testing and disease research.",
    ],
    image: { src: src("solutions-chip"), alt: "Multi-organ HUMIMIC® chip" },
    cards: [
      {
        title: "Liver",
        subtitle: "Hepatotoxicity & metabolism",
        image: { src: src("app-liver"), alt: "Liver tissue model" },
        bullets: ["Drug-induced liver injury", "Drug metabolism & drug-drug interactions", "Fatty liver & liver disease models"],
        to: "/assays/liver",
      },
      {
        title: "Lung",
        subtitle: "Respiratory response",
        image: { src: src("app-lung"), alt: "Lung tissue model" },
        bullets: ["Pulmonary toxicity of inhaled drugs", "Respiratory disease models", "Impact of fine dust and other pollutants"],
        to: "/assays/lung",
      },
      {
        title: "Intestine",
        subtitle: "Absorption & intestinal toxicity",
        image: { src: src("app-intestine"), alt: "Intestinal tissue model" },
        bullets: ["Absorption & metabolism of oral drugs", "Gut toxicity & microbiome interaction", "Inflammatory bowel disease models"],
      },
      {
        title: "Bone Marrow",
        subtitle: "Hemato- & immunotoxicity",
        image: { src: src("app-bone-marrow"), alt: "Bone marrow cell model" },
        bullets: ["Marrow toxicity & hematologic safety", "Immune & inflammatory responses", "High-risk drugs such as anticancer agents"],
        to: "/assays/bone-marrow",
      },
      {
        title: "Multi-Organ",
        subtitle: "Inter-organ interaction",
        image: { src: src("app-multi-organ"), alt: "Multi-organ model linking liver, lung and intestine" },
        bullets: ["Systemic toxicity on multi-organ models", "Systemic response & linked metabolism", "Complex disease & combination therapy"],
        to: "/assays/multi-organ",
      },
      {
        title: "Custom Assay",
        subtitle: "Custom model & assay development",
        image: { src: src("app-custom"), alt: "Chip for custom assays" },
        bullets: ["Models optimized for your research", "Disease-specific custom assays", "Joint research & partnership support"],
        to: "/assays/custom",
      },
    ],
    valueChain: {
      label: "Applied Across the R&D Value Chain",
      items: [
        { icon: Pill, title: "Drug Development" },
        { icon: ShieldCheck, title: "Safety & Toxicology" },
        { icon: Microscope, title: "Disease Research" },
        { icon: Network, title: "Biomarker Discovery" },
        { icon: Users, title: "Personalized Medicine" },
        { icon: Settings, title: "Co-development" },
      ],
    },
    banner: {
      title: "TissNexus expands the possibilities of human biology, *accelerating a healthier tomorrow.*",
      items: [
        { icon: TrendingUp, title: "Better Candidates" },
        { icon: Target, title: "Lower R&D Risk" },
        { icon: Heart, title: "Healthier Tomorrow" },
      ],
    },
  },
};

export const content: Localized<typeof ko> = { ko, en };
