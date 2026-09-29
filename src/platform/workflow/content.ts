/**
 * Workflow 문구. 시안 PPTX 34~38번 슬라이드에서 옮기고 KO/EN 으로 나눴습니다.
 * en 은 `typeof ko` 라서 두 언어의 항목이 어긋나면 타입 오류가 납니다.
 * 분석·인사이트 패널의 수치와 문장은 화면 예시(목업 데이터)입니다.
 */
import {
  Atom,
  ChartColumn,
  CircleCheck,
  Droplet,
  FileText,
  FlaskConical,
  Layers,
  Lightbulb,
  MessageCircleQuestion,
  Network,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import type { Card, Feature } from "../../shared/components";
import type { Localized } from "../../shared/i18n";

const src = (name: string) => `/images/platform/workflow/${name}.webp`;

const stepIcons = [MessageCircleQuestion, FileText, FlaskConical, ChartColumn, Lightbulb];
const withIcons = (steps: { title: string; desc: string }[]): Feature[] =>
  steps.map((s, i) => ({ ...s, icon: stepIcons[i] }));

const ko = {
  label: "워크플로",
  /** 소프트웨어 화면을 옮긴 패널의 라벨 */
  panels: {
    sample: "화면 예시",
    done: "완료",
    studyDesign: "연구 설계",
    analysis: "TissNexus | 분석",
    pathway: "경로 농축 분석",
    keyInsights: "핵심 인사이트",
    insight: "TissNexus | 인사이트",
    findings: "주요 결과",
    assessment: "종합 평가",
    summary: "AI 요약",
  },
  /** 개요의 5단계 */
  overviewSteps: withIcons([
    { title: "질문", desc: "연구 질문 정의" },
    { title: "설계", desc: "연구 설계" },
    { title: "실험", desc: "시험 수행" },
    { title: "분석", desc: "데이터 분석" },
    { title: "인사이트", desc: "인사이트 도출" },
  ]),
  /** 상세 섹션 하단 스테퍼의 5단계 */
  detailSteps: withIcons([
    { title: "질문", desc: "연구 목적과 문제 정의" },
    { title: "설계", desc: "최적의 모델·시험 설계" },
    { title: "실험", desc: "MPS 시험 수행" },
    { title: "분석", desc: "데이터 분석과 검증" },
    { title: "인사이트", desc: "R&D 의사결정 지원" },
  ]),
  overview: {
    label: "더 예측 가능한 내일",
    title: "연구 질문에서\n*더 나은 의사결정까지.*",
    lead: "연구 질문에서 시작해\n검증된 데이터와 더 나은 의사결정으로 연결합니다.",
    image: { src: src("overview"), alt: "미세유체 칩 속 오가노이드" },
  },
  design: {
    kicker: "연구 설계",
    title: "실제와 가까운 결과를 위한\n*연구 설계.*",
    lead: "더 사람에 가까운 결과를 위해,\n최적의 모델과 시험을 설계합니다.",
    body: [
      "TissNexus는 연구 목적에 맞춰 최적의 장기 모델, 어세이 조건, 평가 지표를 설계하여 성공적인 연구를 시작할 수 있도록 지원합니다.",
    ],
    features: [
      { icon: Target, title: "목적 중심", desc: "연구 목적에 최적화" },
      { icon: Layers, title: "모델 매칭", desc: "적절한 장기 모델 선택" },
      { icon: SlidersHorizontal, title: "맞춤형 어세이", desc: "맞춤형 시험 디자인" },
    ] as Feature[],
    checklist: [
      { icon: Target, title: "연구 목표", desc: "질환 영역 / 작용기전(MoA) / 평가 지표" },
      { icon: User, title: "모델 선택", desc: "장기 / 공동배양 / 질환 모델" },
      { icon: FlaskConical, title: "어세이 설계", desc: "투여 / 기간 / 측정 항목" },
      { icon: ChartColumn, title: "분석 계획", desc: "바이오마커 / AI 분석" },
    ] as Feature[],
    image: { src: src("design-chip"), alt: "4개 조직이 배양된 HUMIMIC® 칩" },
  },
  experiment: {
    kicker: "시험 수행",
    title: "인간에 가까운\n*시험을 수행합니다.*",
    lead: "사람과 더 가까운 시험으로,\n더 신뢰할 수 있는 데이터를 만듭니다.",
    body: ["TissNexus는 인간 유래 세포 기반의 MPS 플랫폼을 활용하여 질병과 약물 반응을 정밀하게 재현합니다."],
    image: { src: src("experiment-chip"), alt: "HUMIMIC® 칩에 시료를 주입하는 모습" },
    cards: [
      {
        icon: Atom,
        title: "인간 중심 모델",
        subtitle: "인간 유래 세포 기반 모델",
        image: { src: src("exp-models"), alt: "인간 유래 세포" },
        bullets: ["다양한 장기 모델 지원", "질환 특이적 모델 구축", "생리학적 환경 재현"],
      },
      {
        icon: Droplet,
        title: "표준화된 어세이",
        subtitle: "표준화된 시험 수행",
        image: { src: src("exp-assays"), alt: "미세유체 채널" },
        bullets: ["약물 처리 및 노출 시험", "실시간 모니터링", "반복 가능한 프로토콜"],
      },
      {
        icon: ShieldCheck,
        title: "고품질 데이터",
        subtitle: "신뢰도 높은 데이터 생산",
        image: { src: src("exp-data"), alt: "측정 데이터 그래프" },
        bullets: ["정량적 측정 데이터", "생물학적 반응 확인", "다음 단계 분석으로 연계"],
      },
    ] as Card[],
  },
  analysis: {
    kicker: "분석",
    title: "데이터를\n*생물학적 인사이트로.*",
    lead: "데이터는 답을 만듭니다.\nAI 기반 분석으로 더 깊은 인사이트를 제공합니다.",
    body: ["TissNexus는 다중 오믹스 데이터와 AI 분석을 통해 약물 반응과 생물학적 기전을 정밀하게 해석합니다."],
    features: [
      { icon: ChartColumn, title: "멀티오믹스 통합", desc: "다중 오믹스 데이터 통합 분석" },
      { icon: Network, title: "AI 기반 분석", desc: "AI 기반 패턴 분석과 예측" },
      { icon: FileText, title: "실행 가능한 인사이트", desc: "연구와 개발로 연결되는 인사이트" },
    ] as Feature[],
    /** 분석 화면 예시 (시안의 대시보드를 단순화) */
    pathways: [
      { name: "염증", value: 92 },
      { name: "대사", value: 78 },
      { name: "세포주기", value: 61 },
      { name: "DNA 복구", value: 44 },
      { name: "세포자멸사", value: 36 },
    ],
    keyInsights: ["유의미한 반응 확인", "핵심 바이오마커 검출", "작용기전(MoA) 제시"],
  },
  insight: {
    kicker: "인사이트",
    title: "데이터에서\n*더 나은 의사결정으로.*",
    lead: "과학적 근거가\n더 건강한 내일을 만듭니다.",
    body: ["TissNexus는 신뢰할 수 있는 데이터와 AI 기반 인사이트로 연구 개발의 다음 단계를 제시합니다."],
    features: [
      { icon: Lightbulb, title: "바로 쓰는 보고서", desc: "바로 활용 가능한 결과 보고서" },
      { icon: Target, title: "확신 있는 의사결정", desc: "더 빠르고 정확한 의사결정" },
      { icon: Users, title: "더 큰 임팩트", desc: "환자에게 더 가까운 혁신" },
    ] as Feature[],
    /** 인사이트 리포트 화면 예시 */
    findings: [
      { icon: TrendingUp, title: "효능 신호 확인", desc: "통계적으로 유의한 반응" },
      { icon: ShieldCheck, title: "허용 가능한 안전성", desc: "주요 독성 신호 없음" },
      { icon: CircleCheck, title: "다음 단계 권고", desc: "IND 지원 시험으로 진행" },
    ] as Feature[],
    assessment: "높은 가능성",
    summary:
      "후보물질은 인간 중심 모델에서 허용 가능한 안전성 프로파일과 함께 뚜렷한 효능을 보였습니다. IND 지원 시험으로의 진행을 권고합니다.",
  },
};

const en: typeof ko = {
  label: "Workflow",
  panels: {
    sample: "Sample screen",
    done: "Done",
    studyDesign: "Study Design",
    analysis: "TissNexus | Analysis",
    pathway: "Pathway Enrichment",
    keyInsights: "Key Insights",
    insight: "TissNexus | Insight",
    findings: "Key Findings",
    assessment: "Overall Assessment",
    summary: "AI Summary",
  },
  overviewSteps: withIcons([
    { title: "Question", desc: "Define the question" },
    { title: "Design", desc: "Design the study" },
    { title: "Experiment", desc: "Run the study" },
    { title: "Analysis", desc: "Analyze the data" },
    { title: "Insight", desc: "Derive insight" },
  ]),
  detailSteps: withIcons([
    { title: "Question", desc: "Define goals and the problem" },
    { title: "Design", desc: "Design optimal models & studies" },
    { title: "Experiment", desc: "Run MPS studies" },
    { title: "Analysis", desc: "Analyze & validate data" },
    { title: "Insight", desc: "Support R&D decisions" },
  ]),
  overview: {
    label: "A More Predictive Tomorrow",
    title: "From Research\nQuestion to\n*Better Decisions.*",
    lead: "Starting from your research question,\nwe connect it to validated data and better decisions.",
    image: { src: src("overview"), alt: "Organoid inside a microfluidic chip" },
  },
  design: {
    kicker: "Study Design",
    title: "Design Studies\n*for Real Relevance.*",
    lead: "For results closer to humans,\nwe design the optimal models and studies.",
    body: [
      "TissNexus designs the optimal organ models, assay conditions and endpoints for your research goals, so your study starts on the right foundation.",
    ],
    features: [
      { icon: Target, title: "Purpose-driven", desc: "Optimized for your research goal" },
      { icon: Layers, title: "Model Matching", desc: "Choosing the right organ model" },
      { icon: SlidersHorizontal, title: "Customized Assay", desc: "Tailored study design" },
    ],
    checklist: [
      { icon: Target, title: "Objective", desc: "Disease area / MoA / Endpoint" },
      { icon: User, title: "Model Selection", desc: "Organ(s) / Co-culture / Disease model" },
      { icon: FlaskConical, title: "Assay Design", desc: "Dosing / Duration / Readouts" },
      { icon: ChartColumn, title: "Analysis Plan", desc: "Biomarkers / AI analysis" },
    ],
    image: { src: src("design-chip"), alt: "HUMIMIC® chip with four cultured tissues" },
  },
  experiment: {
    kicker: "Experiment",
    title: "Run Experiments\n*with Human Relevance.*",
    lead: "With studies closer to humans,\nwe generate more reliable data.",
    body: ["TissNexus uses MPS platforms based on human-derived cells to precisely recreate disease and drug responses."],
    image: { src: src("experiment-chip"), alt: "Loading a sample into a HUMIMIC® chip" },
    cards: [
      {
        icon: Atom,
        title: "Human-relevant Models",
        subtitle: "Models based on human-derived cells",
        image: { src: src("exp-models"), alt: "Human-derived cells" },
        bullets: ["Support for diverse organ models", "Disease-specific models", "Recreated physiological conditions"],
      },
      {
        icon: Droplet,
        title: "Standardized Assays",
        subtitle: "Standardized study execution",
        image: { src: src("exp-assays"), alt: "Microfluidic channels" },
        bullets: ["Drug treatment & exposure studies", "Real-time monitoring", "Reproducible protocols"],
      },
      {
        icon: ShieldCheck,
        title: "High-quality Data",
        subtitle: "Producing highly reliable data",
        image: { src: src("exp-data"), alt: "Measurement data chart" },
        bullets: ["Quantitative measurement data", "Confirmed biological responses", "Linked to next-stage analysis"],
      },
    ],
  },
  analysis: {
    kicker: "Analysis",
    title: "Turn Data into\n*Biological Insight.*",
    lead: "Data creates answers.\nAI-driven analysis delivers deeper insight.",
    body: ["TissNexus precisely interprets drug responses and biological mechanisms through multi-omics data and AI analysis."],
    features: [
      { icon: ChartColumn, title: "Multi-omics Integration", desc: "Integrated multi-omics analysis" },
      { icon: Network, title: "AI-driven Analysis", desc: "AI pattern analysis & prediction" },
      { icon: FileText, title: "Actionable Insight", desc: "Insight that carries into R&D" },
    ],
    pathways: [
      { name: "Inflammation", value: 92 },
      { name: "Metabolism", value: 78 },
      { name: "Cell Cycle", value: 61 },
      { name: "DNA Repair", value: 44 },
      { name: "Apoptosis", value: 36 },
    ],
    keyInsights: ["Significant response identified", "Key biomarkers detected", "Mechanism of action suggested"],
  },
  insight: {
    kicker: "Insight",
    title: "From Data to\n*Better Decisions.*",
    lead: "Scientific evidence\nbuilds a healthier tomorrow.",
    body: ["With reliable data and AI-driven insight, TissNexus points to the next step in R&D."],
    features: [
      { icon: Lightbulb, title: "Actionable Report", desc: "A results report ready to use" },
      { icon: Target, title: "Confident Decisions", desc: "Faster, more accurate decisions" },
      { icon: Users, title: "Greater Impact", desc: "Innovation closer to patients" },
    ],
    findings: [
      { icon: TrendingUp, title: "Efficacy signal confirmed", desc: "Statistically significant response" },
      { icon: ShieldCheck, title: "Safety profile acceptable", desc: "No major toxicity signals" },
      { icon: CircleCheck, title: "Recommended next step", desc: "Advance to IND-enabling studies" },
    ],
    assessment: "High Potential",
    summary:
      "The candidate shows strong efficacy with an acceptable safety profile in human-relevant models. We recommend proceeding to IND-enabling studies.",
  },
};

export const content: Localized<typeof ko> = { ko, en };
