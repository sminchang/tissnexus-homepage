/**
 * Assays · Liver 문구. 시안 PPTX 40~43번 슬라이드에서 옮기고 KO/EN 으로 나눴습니다.
 * en 은 `typeof ko` 라서 두 언어의 항목이 어긋나면 타입 오류가 납니다.
 */
import {
  ChartColumn,
  ChartSpline,
  FileSearch,
  HeartPulse,
  History,
  Lightbulb,
  Pill,
  RefreshCw,
  ScanSearch,
  Share2,
  Shield,
  ShieldPlus,
  Target,
  Users,
} from "lucide-react";
import type { Card, Feature } from "../../shared/components";
import type { Localized } from "../../shared/i18n";
import type { ImageStep } from "../components/ImageSteps";

const src = (name: string) => `/images/assays/liver/${name}.webp`;

const ko = {
  hero: {
    eyebrow: "어세이 · 간",
    title: "간 리스크를 *더 일찍* 확인합니다.",
    lead: "간독성과 대사 리스크를\n더 사람에 가까운 모델에서\n먼저 확인합니다.",
    body: [
      "TissNexus는 Human-Relevant Liver MPS를 기반으로 후보물질의 간독성, 대사 반응 및 장기 노출 영향을 평가하여 더 빠르고 신뢰할 수 있는 R&D 의사결정을 지원합니다.",
    ],
    image: { src: src("hero"), alt: "MPS 칩과 연결된 인체 간 모델" },
    features: [
      { icon: ShieldPlus, title: "간독성" },
      { icon: Share2, title: "대사" },
      { icon: ChartColumn, title: "리스크 조기 발견" },
    ] as Feature[],
  },
  whyItMatters: {
    eyebrow: "간",
    kicker: "왜 중요한가",
    title: "간 안전성이\n*후보물질의 성패를 가릅니다.*",
    body: [
      "간은 약물의 대사와 독성 반응이 가장 먼저 나타나는 주요 장기입니다. 간 관련 리스크를 조기에 정확하게 평가하는 것이 성공적인 신약 개발의 필수 조건입니다.",
    ],
    image: { src: src("why"), alt: "인체 속 간 일러스트" },
    features: [
      { icon: HeartPulse, title: "독성", desc: "간세포 손상 및 독성 반응 평가" },
      { icon: Pill, title: "대사", desc: "약물 대사 특성 및 대사산물 분석" },
      { icon: History, title: "장기 반응", desc: "반복 노출에 따른 장기 반응 평가" },
    ] as Feature[],
    banner: {
      icon: Lightbulb,
      title: "*더 이른 간 인사이트*가 더 나은 의사결정으로 이어집니다.",
      desc: "후보물질의 간 관련 리스크를 보다 이른 단계에서 확인하여, 개발 성공 가능성을 높입니다.",
    },
  },
  solution: {
    eyebrow: "간",
    kicker: "TissNexus 솔루션",
    title: "인간 중심\n*간 어세이*",
    body: [
      "TissNexus는 인체 유래 간 기반의 MPS 어세이를 통해 약물 반응, 독성 및 대사 특성을 보다 실제와 유사한 환경에서 평가합니다.",
    ],
    image: { src: src("solution"), alt: "MPS 칩 위의 간 모델" },
    steps: [
      { num: "01", title: "인체 간 모델", desc: "인체 유래 간 조직 기반 모델", image: { src: src("step-model"), alt: "간 모델" } },
      { num: "02", title: "동적 MPS 배양", desc: "미세유체 기반의 동적 배양 환경", image: { src: src("step-culture"), alt: "MPS 칩" } },
      { num: "03", title: "약물 노출", desc: "후보물질 처리 및 용량 반응 평가", image: { src: src("step-exposure"), alt: "약물 캡슐" } },
      { num: "04", title: "생물학적 분석", desc: "독성, 대사 및 기능적 데이터 분석", image: { src: src("step-readout"), alt: "분석 데이터 화면" } },
    ] as ImageStep[],
    features: [
      { icon: Users, title: "인간 중심 모델", desc: "인체 유래 간 조직 기반 모델" },
      { icon: RefreshCw, title: "동적 노출", desc: "미세유체 기반의 동적 노출 환경" },
      { icon: ChartColumn, title: "통합 분석", desc: "독성, 대사 및 기능적 데이터 분석" },
    ] as Feature[],
    banner: {
      icon: Lightbulb,
      title: "인간 중심 생물학이 *더 신뢰할 수 있는 간 인사이트*를 만듭니다.",
      desc: "TissNexus는 보다 신뢰할 수 있는 간 반응 데이터를 제공하여, 더 나은 R&D 의사결정을 지원합니다.",
    },
  },
  whatYouGet: {
    eyebrow: "간",
    kicker: "제공 결과",
    title: "간 반응에서\n*더 나은 의사결정으로.*",
    body: [
      "TissNexus는 인체 유래 간 반응 데이터를 바탕으로 후보물질의 독성, 대사 특성 및 연구개발 의사결정을 지원합니다.",
    ],
    image: { src: src("deliverables"), alt: "간 모델과 미세유체 칩" },
    deliverablesLabel: "주요 제공 데이터",
    deliverables: [
      { icon: HeartPulse, title: "간독성 데이터", body: "간세포 손상, 독성 반응 및 안전성 지표" },
      { icon: Share2, title: "대사 반응", body: "약물 대사 특성 및 대사산물 분석" },
      { icon: ChartColumn, title: "바이오마커 데이터", body: "간 기능 관련 바이오마커 변화 분석" },
      { icon: ScanSearch, title: "이미징 · 형태 분석", body: "세포 형태 변화 및 조직 수준 이미지 분석" },
      { icon: ChartSpline, title: "용량-반응", body: "농도 의존적 반응 및 유효성 범위 평가" },
      { icon: FileSearch, title: "과학적 해석", body: "전문가 기반 데이터 해석 및 연구개발 인사이트 제공" },
    ] as Card[],
    businessValueLabel: "비즈니스 가치",
    businessValue: [
      { icon: Shield, title: "리스크 조기 발견", desc: "간 독성 및 이상 반응을 조기에 식별하여 개발 리스크를 최소화합니다." },
      { icon: Target, title: "더 나은 후보물질 선별", desc: "사람에 더 가까운 데이터를 통해 더 유망한 후보물질을 선별합니다." },
      { icon: ChartColumn, title: "확신 있는 R&D 의사결정", desc: "신뢰할 수 있는 인사이트로 더 빠르고 확신 있는 의사결정을 지원합니다." },
    ] as Feature[],
  },
};

const en: typeof ko = {
  hero: {
    eyebrow: "Assays · Liver",
    title: "See Liver Risk *Earlier.*",
    lead: "Identify hepatotoxicity and metabolic risk\nfirst, in models closer to humans.",
    body: [
      "Built on Human-Relevant Liver MPS, TissNexus evaluates hepatotoxicity, metabolic response and the effects of long-term exposure to support faster, more reliable R&D decisions.",
    ],
    image: { src: src("hero"), alt: "Human liver model connected to an MPS chip" },
    features: [
      { icon: ShieldPlus, title: "Liver Toxicity" },
      { icon: Share2, title: "Metabolism" },
      { icon: ChartColumn, title: "Early Risk Detection" },
    ],
  },
  whyItMatters: {
    eyebrow: "Liver",
    kicker: "Why It Matters",
    title: "Liver Safety Can\n*Make or Break a Candidate.*",
    body: [
      "The liver is where drug metabolism and toxicity show up first. Assessing liver-related risk early and accurately is essential to successful drug development.",
    ],
    image: { src: src("why"), alt: "Illustration of the liver inside the body" },
    features: [
      { icon: HeartPulse, title: "Toxicity", desc: "Hepatocyte damage and toxic response" },
      { icon: Pill, title: "Metabolism", desc: "Drug metabolism and metabolite analysis" },
      { icon: History, title: "Long-term Response", desc: "Long-term response to repeated exposure" },
    ],
    banner: {
      icon: Lightbulb,
      title: "*Earlier liver insight* leads to better decisions.",
      desc: "Confirming liver-related risk earlier raises the chance of development success.",
    },
  },
  solution: {
    eyebrow: "Liver",
    kicker: "TissNexus Solution",
    title: "Human-Relevant\n*Liver Assay*",
    body: [
      "TissNexus's MPS assays built on human-derived liver evaluate drug response, toxicity and metabolism in conditions closer to real life.",
    ],
    image: { src: src("solution"), alt: "Liver model on an MPS chip" },
    steps: [
      { num: "01", title: "Human Liver Model", desc: "Model built on human-derived liver tissue", image: { src: src("step-model"), alt: "Liver model" } },
      { num: "02", title: "Dynamic MPS Culture", desc: "Microfluidic dynamic culture", image: { src: src("step-culture"), alt: "MPS chip" } },
      { num: "03", title: "Drug Exposure", desc: "Compound treatment and dose response", image: { src: src("step-exposure"), alt: "Drug capsule" } },
      { num: "04", title: "Biological Readout", desc: "Toxicity, metabolic and functional data", image: { src: src("step-readout"), alt: "Analysis data on screen" } },
    ],
    features: [
      { icon: Users, title: "Human-Relevant Model", desc: "Model built on human-derived liver tissue" },
      { icon: RefreshCw, title: "Dynamic Exposure", desc: "Microfluidic dynamic exposure" },
      { icon: ChartColumn, title: "Integrated Readout", desc: "Toxicity, metabolic and functional data" },
    ],
    banner: {
      icon: Lightbulb,
      title: "Human-relevant biology leads to *more reliable liver insight.*",
      desc: "TissNexus delivers more reliable liver response data to support better R&D decisions.",
    },
  },
  whatYouGet: {
    eyebrow: "Liver",
    kicker: "What You Get",
    title: "From Liver Response\nto *Better Decisions.*",
    body: [
      "Using human-derived liver response data, TissNexus supports decisions on candidate toxicity, metabolism and R&D direction.",
    ],
    image: { src: src("deliverables"), alt: "Liver model and microfluidic chip" },
    deliverablesLabel: "Key Deliverables",
    deliverables: [
      { icon: HeartPulse, title: "Liver Toxicity Data", body: "Hepatocyte damage, toxic response and safety markers" },
      { icon: Share2, title: "Metabolic Response", body: "Drug metabolism and metabolite analysis" },
      { icon: ChartColumn, title: "Biomarker Data", body: "Changes in liver-function biomarkers" },
      { icon: ScanSearch, title: "Imaging / Morphology", body: "Cell morphology and tissue-level image analysis" },
      { icon: ChartSpline, title: "Dose-response", body: "Concentration-dependent response and effective range" },
      { icon: FileSearch, title: "Scientific Interpretation", body: "Expert data interpretation and R&D insight" },
    ],
    businessValueLabel: "Business Value",
    businessValue: [
      { icon: Shield, title: "Early Risk Detection", desc: "Spot liver toxicity and adverse responses early to minimize development risk." },
      { icon: Target, title: "Better Candidate Selection", desc: "Select more promising candidates with data closer to humans." },
      { icon: ChartColumn, title: "More Confident R&D Decisions", desc: "Make faster, more confident decisions with reliable insight." },
    ],
  },
};

export const content: Localized<typeof ko> = { ko, en };
