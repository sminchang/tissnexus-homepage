/**
 * Platform › MPS Technology 문구. 시안 PPTX 26~32번 슬라이드(MPS TECHNOLOGY 01~07)에서 옮기고 KO/EN 으로 나눴습니다.
 * 한 화면(1440×900)에 섹션이 들어가도록, 제목을 그대로 번역한 부제·설명(예: "Perfusion Control / 정밀한 유체 흐름 제어")은
 * 언어별로 한쪽만 남겼습니다.
 */
import {
  ChartColumn,
  Clock,
  Database,
  Dna,
  Globe,
  Heart,
  Leaf,
  Lightbulb,
  Pill,
  Rat,
  Settings,
  Share2,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { Feature, ImageRef } from "../../shared/components";
import type { Localized } from "../../shared/i18n";

const src = (name: string) => `/images/platform/mps-technology/${name}.webp`;

/** 카드 안에 이미지 대신 그릴 도식. pages.tsx 에서 컴포넌트로 바꿉니다. */
export type FigureKey = "failure90" | "viability" | "timeline" | "success";

export interface CardContent {
  num?: string;
  title: string;
  subtitle?: string;
  image?: ImageRef;
  figure?: FigureKey;
  /** Multi-Parameter Control 카드의 제어 항목 */
  params?: string[];
  /** Individual Organ Models 카드의 장기 썸네일 (alt 가 라벨) */
  organs?: ImageRef[];
  body?: string;
  bullets?: string[];
  tag?: string;
  /** contain: 이미지를 자르지 않고 칸 안에 줄여 넣음 (원본이 작은 이미지용) */
  imageFit?: "contain";
  /** 그리드 한 줄을 넓게 쓰는 카드: 수치를 왼쪽, 목록을 오른쪽에 둡니다 */
  wide?: boolean;
}

export interface SectionContent {
  kicker: string;
  title: string;
  lead: string;
  body: string[];
  image?: ImageRef;
  /** 카드 묶음 위 작은 제목 */
  groupLabel?: string;
  cards: CardContent[];
  aside?: { label: string; items: Feature[] };
  banner: { title: string; desc?: string; items?: Feature[] };
}

/*
 * 카드 안 도식의 글자. 수치(~90%, ~10%, ~2–3x)는 모두 시안에 있던 값을 그대로 옮긴 자리 표시용이며,
 * 실제 데이터·출처로 검증한 뒤 교체해야 합니다.
 */
export interface FigureText {
  failure: { value: string; label: string };
  viability: { dynamic: string; static: string; axis: string; aria: string };
  timeline: { stages: string[]; mps: string; conventional: string; caption: string; aria: string };
  success: { conventional: string; mps: string; aria: string };
}

export interface MpsContent {
  eyebrow: string;
  sections: SectionContent[];
  /** 07 섹션 상단의 개발 단계 (시안의 유리 기둥 이미지를 HTML 로 재구성) */
  impactStages: Feature[];
  /** Multi-Parameter Control 카드 이미지 */
  multiParamImage: ImageRef;
  figures: FigureText;
}

const ko: MpsContent = {
  eyebrow: "MPS 기술",
  sections: [
    {
      kicker: "더 나은 모델",
      title: "기존 모델을 넘어,\n*인간 생물학에 더 가깝게.*",
      lead: "더 인간에 가까운 모델이, 더 나은 신약을 만듭니다.",
      body: [
        "TissNexus는 인간 생리환경을 정밀하게 모사하는 MPS(Microphysiological System) 기술을 통해, 기존 연구모델의 한계를 넘어 신약개발과 바이오 연구의 패러다임을 바꾸고 있습니다.",
      ],
      image: { src: src("s1-hero"), alt: "인간 조직이 배양된 HUMIMIC® 칩" },
      cards: [
        {
          title: "2D 세포 배양",
          subtitle: "너무 단순합니다.",
          image: { src: src("s1-2d"), alt: "2D 세포 배양 접시" },
          imageFit: "contain",
          bullets: ["단순한 세포 배양 환경", "제한된 세포 간 상호작용", "인체와 다른 반응"],
          tag: "단순하지만, 충분하지 않습니다.",
        },
        {
          title: "동물 모델",
          subtitle: "생물학이 다릅니다.",
          image: { src: src("s1-animal"), alt: "실험용 쥐" },
          imageFit: "contain",
          bullets: ["종 간 생물학적 차이", "인체와 다른 약물 반응", "높은 비용과 긴 개발 기간"],
          tag: "유용하지만, 예측적이지 않습니다.",
        },
        {
          title: "MPS 기술",
          subtitle: "인간 중심의 해법.",
          image: { src: src("s1-mps"), alt: "MPS 칩 속 조직 단면" },
          imageFit: "contain",
          bullets: [
            "인간 유래 세포와 3차원 조직 구조",
            "동적인 생리환경(미세유체, 전단응력 등)",
            "장기 간 상호작용을 반영한 시스템 모델",
            "더 정확한 예측과 신뢰성 높은 데이터",
          ],
        },
      ],
      aside: {
        label: "실질적인 차이, 실질적인 효과",
        items: [
          { icon: Target, title: "더 높은 예측력", desc: "더 정확한 약물 반응 예측" },
          { icon: ShieldCheck, title: "더 낮은 R&D 리스크", desc: "임상 실패 리스크 감소" },
          { icon: Clock, title: "환자에게 더 빠르게", desc: "더 빠른 신약개발" },
          { icon: Users, title: "더 나은 의약품", desc: "더 안전하고 효과적인 치료제" },
        ],
      },
      banner: {
        title: "*인간 생물학에 더 가깝게.*",
        desc: "TissNexus가 만드는, 더 건강한 내일입니다.",
        items: [
          { icon: Dna, title: "더 예측 가능한 과학" },
          { icon: TrendingUp, title: "더 빠른 연구개발" },
          { icon: Globe, title: "더 건강한 미래" },
        ],
      },
    },
    {
      kicker: "임상 전환의 간극",
      title: "훌륭한 연구가\n*항상 사람에게 통하지는 않습니다.*",
      lead: "좋은 연구결과가, 항상 사람에게도 같지 않습니다.",
      body: [
        "신약개발 과정에서 기존 연구모델은 유용한 정보를 제공하지만, 인간의 복잡한 생물학적 특성을 완전히 반영하지 못해 임상에서의 실패로 이어지는 경우가 많습니다.",
        "TissNexus는 이 간극(Translation Gap)을 줄이기 위해 Human-Relevant MPS 기술을 개발합니다.",
      ],
      image: { src: src("s2-hero"), alt: "인체 장기 일러스트" },
      cards: [
        {
          wide: true,
          title: "임상 전환의 간극",
          subtitle: "좋은 후보물질도 임상에서 실패하는 이유",
          figure: "failure90",
          bullets: ["비임상과 임상의 불일치", "예측하지 못한 독성 발생", "효능 부족으로 인한 개발 중단"],
          tag: "높은 탈락률, 높은 비용, 놓친 기회.",
        },
      ],
      aside: {
        label: "인간 중심 모델이 필요한 이유",
        items: [
          { icon: Users, title: "인간 고유의 생물학", desc: "인간 고유의 생물학적 반응을 반영하기 위해" },
          { icon: Pill, title: "더 나은 예측", desc: "약물의 효능과 독성을 더 정확하게 예측하기 위해" },
          { icon: TrendingUp, title: "더 낮은 R&D 리스크", desc: "임상 실패 리스크를 줄이고 개발 효율을 높이기 위해" },
          { icon: Clock, title: "더 빠르고 효율적인 개발", desc: "더 빠르고 효과적인 신약개발을 실현하기 위해" },
          { icon: Globe, title: "더 건강한 내일", desc: "더 안전한 의약품으로 더 건강한 미래를 만들기 위해" },
        ],
      },
      banner: {
        title: "간극을 잇다. *더 건강한 내일을 위해.*",
        desc: "TissNexus는 Human-Relevant MPS 기술을 통해 연구와 임상의 간극을 줄이고, 더 나은 신약개발의 가능성을 확장합니다.",
      },
    },
    {
      kicker: "우리의 기술",
      title: "인간 중심 생물학을\n*설계합니다.*",
      lead: "인간 생물학을 정밀하게 재현하는 통합 기술.",
      body: [
        "TissNexus는 인간 유래 세포, 조직공학, 미세유체, 동적 배양, 다장기 연결, 생물학적 분석을 통합한 MPS 기술로 실제 인체에 가까운 생물학적 환경을 구현합니다.",
      ],
      image: { src: src("s3-hero"), alt: "여러 장기 조직이 연결된 HUMIMIC® 칩" },
      groupLabel: "TissNexus MPS 기술 스택",
      cards: [
        {
          num: "01",
          title: "인간 유래 세포·조직",
          image: { src: src("s3-cells"), alt: "인간 유래 세포 구체" },
          bullets: ["인간 유래 1차세포, iPSC", "조직 특이적 세포 모델", "3D 조직 구조 형성"],
          tag: "인간 유래 소재",
        },
        {
          num: "02",
          title: "조직공학 기술",
          image: { src: src("s3-tissue"), alt: "3D 조직 구조" },
          bullets: ["3D 조직 구조 및 ECM 구현", "세포 기능 유지 및 성숙 유도", "조직별 맞춤형 모델 개발"],
          tag: "기능성 조직 모델",
        },
        {
          num: "03",
          title: "미세유체 기술",
          image: { src: src("s3-microfluidics"), alt: "미세유체 채널" },
          bullets: ["생체 유사한 유체 흐름 구현", "전단응력 및 농도구배 조절", "정밀한 약물 투여 및 제어"],
          tag: "동적 미세환경",
        },
        {
          num: "04",
          title: "동적 배양 시스템",
          image: { src: src("s3-dynamic"), alt: "흐름 속 조직 배양 단면" },
          bullets: ["지속적인 영양 공급 및 노폐물 제거", "생리 자극(흐름, 기계적 자극)", "장기 기능의 안정적 유지"],
          tag: "생체와 같은 생리 환경",
        },
        {
          num: "05",
          title: "다장기 연결 기술",
          image: { src: src("s3-multi-organ"), alt: "여러 장기가 연결된 칩" },
          bullets: ["여러 장기의 연결 및 상호작용", "전신적 약물 반응 평가", "장기 간 대사·독성 상호작용 분석"],
          tag: "시스템 수준의 생물학",
        },
        {
          num: "06",
          title: "생물학적 분석",
          image: { src: src("s3-analysis"), alt: "분석 소프트웨어 화면" },
          bullets: ["세포 기능, 바이오마커 분석", "오믹스(유전체·전사체·대사체) 연계", "정량적 데이터 및 시각화"],
          tag: "실행 가능한 인사이트",
        },
      ],
      banner: {
        title: "통합된 기술.\n*더 인간에 가까운 해답.*",
        items: [
          { icon: Dna, title: "더 인간에 가까운 모델" },
          { icon: Settings, title: "통합된 핵심 기술" },
          { icon: ChartColumn, title: "신뢰할 수 있는 데이터" },
          { icon: Users, title: "더 나은 연구 의사결정" },
        ],
      },
    },
    {
      kicker: "동적 배양",
      title: "동적 배양.\n*실험실 속 살아있는 생리 환경.*",
      lead: "흐르는 환경이, 더 살아있는 생명을 만듭니다.",
      body: [
        "TissNexus의 동적 배양(Dynamic Culture) 기술은 미세유체 기반 정밀한 유체 제어와 생체 유사한 물리·화학적 자극을 통해, 인체 내 조직의 생리적 환경을 정교하게 재현합니다.",
        "정적인 배양을 넘어, 시간에 따라 변화하는 살아있는 생물학을 구현합니다.",
      ],
      image: { src: src("s4-hero"), alt: "동적 배양 중인 HUMIMIC® 칩" },
      cards: [
        {
          num: "01",
          title: "정밀한 유체 흐름 제어",
          image: { src: src("s4-perfusion"), alt: "관류 채널" },
          bullets: ["정밀 유량 제어 (µL/min 단위)", "산소·영양분의 지속적 공급", "노폐물의 실시간 제거"],
          tag: "안정적이고 재현 가능한 환경",
        },
        {
          num: "02",
          title: "생체 유사한 물리적 자극",
          image: { src: src("s4-mechanical"), alt: "기계적 자극을 받는 조직" },
          bullets: ["전단응력(Shear Stress) 조절", "기계적 신장/압박 자극 구현", "조직 특이적 물리 환경 재현"],
          tag: "생리적으로 적합한 자극",
        },
        {
          num: "03",
          title: "다중 환경 통합 제어",
          params: ["온도", "pH", "산소", "영양분", "유량"],
          bullets: ["온도, pH, 산소, 영양분의 통합 제어", "장기별 맞춤 배양 조건 설정", "실시간 모니터링 및 자동 피드백"],
          tag: "정밀한 환경 제어",
        },
        {
          num: "04",
          title: "장기 배양 안정성",
          figure: "viability",
          bullets: ["조직의 구조와 기능 장기 유지", "약물 반응의 시간 의존적 평가", "만성독성 및 장기 효과 연구 가능"],
          tag: "지속적인 생존력",
        },
      ],
      aside: {
        label: "실질적 효과, 실질적 활용",
        items: [
          { icon: Pill, title: "더 높은 예측력", desc: "약물 효능 예측력 향상" },
          { icon: ShieldCheck, title: "더 낮은 실패율", desc: "임상 실패율 감소" },
          { icon: Clock, title: "장기적 인사이트", desc: "만성질환·장기 효과 분석" },
          { icon: Users, title: "더 넓은 활용", desc: "다양한 치료제 및 질환 연구" },
          { icon: TrendingUp, title: "더 빠른 개발", desc: "더 빠른 신약개발" },
        ],
      },
      banner: {
        title: "흐르는 생물학.\n*실질적인 가능성.*",
        items: [
          { icon: Share2, title: "더 정확한 인체 모사" },
          { icon: Settings, title: "확장 가능한 연구 플랫폼" },
          { icon: Globe, title: "더 건강한 미래" },
        ],
      },
    },
    {
      kicker: "다장기 연결",
      title: "연결된 장기.\n*실제 인간의 반응.*",
      lead: "장기가 연결될 때, 비로소 사람에 가까워집니다.",
      body: [
        "TissNexus의 다장기 통합(Multi-Organ Integration) 기술은 여러 장기 모델을 미세유체로 연결하여 약물의 흡수·분포·대사·배설(ADME)과 장기 간 상호작용을 정밀하게 재현합니다.",
        "더 현실적인 인체 반응을 예측하여, 더 안전하고 효과적인 신약개발을 가속화합니다.",
      ],
      image: { src: src("s5-hero"), alt: "인체 장기 일러스트" },
      cards: [
        {
          num: "01",
          title: "고기능 장기 모델",
          organs: [
            { src: src("s5-liver"), alt: "간" },
            { src: src("s5-lung"), alt: "폐" },
            { src: src("s5-intestine"), alt: "장" },
            { src: src("s5-heart"), alt: "심장" },
            { src: src("s5-kidney"), alt: "신장" },
            { src: src("s5-brain"), alt: "뇌" },
          ],
          bullets: ["장기별 최적화된 3D 조직 모델", "고유한 세포 구성과 기능 유지", "생리학적 지표의 정밀한 모니터링"],
        },
        {
          num: "02",
          title: "미세유체 연결 기술",
          image: { src: src("s5-microfluidic"), alt: "장기를 잇는 미세유체 연결부" },
          bullets: ["장기 간 혈류 유사한 순환 구조", "약물·대사체의 실시간 전달", "농도, 유량, 전단응력 정밀 제어"],
        },
        {
          num: "03",
          title: "전신 반응 평가",
          image: { src: src("s5-systemic"), alt: "전신 장기 일러스트" },
          bullets: ["흡수–분포–대사–배설(ADME) 평가", "장기 간 상호작용 및 독성 분석", "만성 노출 및 반복 투여 시험 가능"],
        },
        {
          num: "04",
          title: "개발 의사결정 지원",
          image: { src: src("s5-insight"), alt: "분석 대시보드" },
          bullets: ["정량적 데이터 기반 효능·독성 분석", "실패 가능성 조기 예측", "더 빠르고 정확한 개발 전략 수립"],
        },
      ],
      aside: {
        label: "핵심 이점",
        items: [
          { icon: Pill, title: "더 높은 예측력", desc: "사람에 더 가까운 예측" },
          { icon: ShieldCheck, title: "더 안전한 의약품" },
          { icon: Clock, title: "더 빠른 개발" },
          { icon: Users, title: "개발 비용 절감" },
          { icon: Globe, title: "글로벌 경쟁력 강화" },
        ],
      },
      banner: {
        title: "장기에서 성과로.\n*더 건강한 내일.*",
        items: [
          { icon: TrendingUp, title: "사람을 더 잘 예측" },
          { icon: Settings, title: "통합된 연구 플랫폼" },
          { icon: Lightbulb, title: "더 나은 의사결정" },
        ],
      },
    },
    {
      kicker: "생물학적 분석",
      title: "복잡한 데이터에서\n*명확한 답으로.*",
      lead: "데이터가 말하게 합니다.",
      body: [
        "TissNexus의 생물학적 분석(Biological Analysis) 기술은 MPS에서 생성되는 방대한 멀티모달 데이터를 AI 기반으로 통합 분석하여, 약물의 효능과 안전성에 대한 의미 있는 인사이트를 도출합니다.",
        "데이터는 더 이상 숫자가 아니라, 더 나은 신약을 위한 방향이 됩니다.",
      ],
      image: { src: src("s6-hero"), alt: "분석 플랫폼 화면" },
      cards: [
        {
          num: "01",
          title: "멀티모달 데이터 통합",
          image: { src: src("s6-multimodal"), alt: "영상·전사체·단백체·대사체 데이터 레이어" },
          bullets: ["영상, 유전자, 단백질, 대사체, 기능 데이터 통합", "시간에 따른 변화 추적", "표준화된 데이터 파이프라인"],
          tag: "하나의 데이터, 완전한 그림.",
        },
        {
          num: "02",
          title: "AI 기반 분석",
          image: { src: src("s6-ai"), alt: "AI 칩 일러스트" },
          bullets: ["머신러닝 기반 패턴 분석", "유효 바이오마커 발굴", "약물 반응 및 독성 예측"],
          tag: "데이터를 인사이트로.",
        },
        {
          num: "03",
          title: "생물학적 인사이트 도출",
          image: { src: src("s6-insight"), alt: "대조군·처리군 비교 분석" },
          bullets: ["세포·조직 수준의 변화 정량화", "작용기전(MoA) 분석", "효능·안전성 관련 인사이트 제공"],
          tag: "더 깊은 이해, 실제 생물학.",
        },
        {
          num: "04",
          title: "의사결정 지원 리포트",
          image: { src: src("s6-report"), alt: "종합 분석 리포트" },
          bullets: ["시각화된 분석 리포트 자동 생성", "핵심 결과 요약 및 해석 제공", "연구개발 및 임상 의사결정 지원"],
          tag: "인사이트에서 성과로.",
        },
      ],
      aside: {
        label: "실제 데이터, 실질적 차이",
        items: [
          { icon: Target, title: "더 높은 개발 성공률" },
          { icon: Clock, title: "더 빠른 개발 기간" },
          { icon: ShieldCheck, title: "더 낮은 연구개발 리스크" },
          { icon: Database, title: "더 풍부한 생물학적 지식" },
          { icon: Users, title: "더 나은 치료제", desc: "더 건강한 삶" },
        ],
      },
      banner: {
        title: "데이터에서 발견으로.\n*더 건강한 내일.*",
        items: [
          { icon: TrendingUp, title: "AI가 여는 새로운 발견" },
          { icon: Share2, title: "연구를 넘어, 실제 치료로" },
          { icon: Globe, title: "함께 만드는 더 건강한 미래" },
        ],
      },
    },
    {
      kicker: "연구에서 성과로",
      title: "실질적인 해법.\n*더 건강한 내일.*",
      lead: "연구를 넘어, 더 건강한 내일로.",
      body: [
        "TissNexus의 MPS 기술은 신약개발 전주기를 지원하여 더 안전하고, 더 빠르게, 더 많은 환자에게 혁신적인 치료제가 도달할 수 있도록 합니다.",
        "우리는 인간에 더 가까운 모델로, 인류의 건강한 미래를 함께 만들어갑니다.",
      ],
      cards: [
        {
          num: "01",
          title: "신약개발 기간 단축",
          figure: "timeline",
          bullets: ["더 빠른 유효성 검증", "비임상-임상 간격 감소", "개발 비용 절감"],
          tag: "더 빠른 개발, 더 많은 기회.",
        },
        {
          num: "02",
          title: "임상 성공률 향상",
          figure: "success",
          bullets: ["사람과 유사한 반응 예측", "독성 및 부작용 조기 탐지", "임상 실패 리스크 최소화"],
          tag: "더 높은 확신, 더 높은 성공.",
        },
        {
          num: "03",
          title: "맞춤형 치료제 개발 지원",
          image: { src: src("s7-personalized"), alt: "장기별 반응 레이어" },
          bullets: ["다양한 환자군 반응 시뮬레이션", "바이오마커 기반 환자 선별", "정밀의료 및 동반진단 개발 지원"],
          tag: "적합한 환자에게, 적합한 약.",
        },
        {
          num: "04",
          title: "환자와 사회에 더 큰 가치",
          image: { src: src("s7-society"), alt: "밝은 표정의 아이" },
          bullets: ["더 안전한 신약, 더 많은 환자에게", "동물실험 감소로 윤리적 연구 실현", "지속가능한 헬스케어 생태계 구축"],
          tag: "실제 과학, 실질적 효과.",
        },
      ],
      aside: {
        label: "우리의 약속",
        items: [
          { icon: Lightbulb, title: "혁신", desc: "지속적인 기술 혁신" },
          { icon: Users, title: "협력", desc: "함께 만드는 솔루션" },
          { icon: Leaf, title: "지속가능성", desc: "사람과 환경을 생각하는 연구" },
          { icon: Globe, title: "글로벌 임팩트", desc: "전세계 환자를 위한 더 나은 치료" },
          { icon: Heart, title: "더 건강한 내일", desc: "모두의 건강한 내일을 위해" },
        ],
      },
      banner: {
        title: "가능성에서 환자에게로.\n*TissNexus와 함께.*",
        items: [
          { icon: Dna, title: "혁신적인 과학" },
          { icon: Settings, title: "실질적 치료제로" },
          { icon: Globe, title: "더 건강한 내일" },
        ],
      },
    },
  ],
  impactStages: [
    { icon: Share2, title: "신약 발굴", desc: "더 나은 후보물질" },
    { icon: Rat, title: "비임상", desc: "더 예측력 있는 데이터" },
    { icon: Users, title: "임상", desc: "더 높은 성공률" },
    { icon: Globe, title: "환자", desc: "더 건강한 삶" },
  ],
  multiParamImage: { src: src("s4-multi-param"), alt: "다중 환경 제어 챔버" },
  figures: {
    failure: { value: "~90%", label: "임상 실패율" },
    viability: {
      dynamic: "동적 배양",
      static: "정적 배양",
      axis: "세포 생존율(%) · 시간(일)",
      aria: "28일간 세포 생존율: 동적 배양은 약 100% 유지, 정적 배양은 약 63%로 감소",
    },
    timeline: {
      stages: ["발굴", "비임상", "임상", "허가"],
      mps: "MPS 기반 개발",
      conventional: "기존 개발",
      caption: "더 빠르고, 더 스마트하게",
      aria: "MPS 기반 개발이 기존 개발보다 빠르게 진행되는 개념도",
    },
    success: { conventional: "기존", mps: "MPS 적용", aria: "기존 약 10% 대비 MPS 적용 시 약 2~3배" },
  },
};

const en: MpsContent = {
  eyebrow: "MPS Technology",
  sections: [
    {
      kicker: "A Better Model",
      title: "Beyond Traditional Models.\n*Closer to Human Biology.*",
      lead: "More human-like models make better medicines.",
      body: [
        "With MPS (Microphysiological System) technology that precisely mimics human physiology, TissNexus moves beyond the limits of conventional research models and is changing the paradigm of drug development and bio research.",
      ],
      image: { src: src("s1-hero"), alt: "HUMIMIC® chip with cultured human tissue" },
      cards: [
        {
          title: "2D Cell Culture",
          subtitle: "Too Simple.",
          image: { src: src("s1-2d"), alt: "2D cell culture dish" },
          imageFit: "contain",
          bullets: ["Oversimplified culture environment", "Limited cell–cell interaction", "Responses unlike the human body"],
          tag: "Simple. But Not Enough.",
        },
        {
          title: "Animal Model",
          subtitle: "Different Biology.",
          image: { src: src("s1-animal"), alt: "Laboratory mouse" },
          imageFit: "contain",
          bullets: ["Biological differences between species", "Drug responses unlike humans", "High cost and long timelines"],
          tag: "Useful. But Not Predictive.",
        },
        {
          title: "MPS Technology",
          subtitle: "A Human-Relevant Solution.",
          image: { src: src("s1-mps"), alt: "Cross-section of tissue inside an MPS chip" },
          imageFit: "contain",
          bullets: [
            "Human-derived cells in 3D tissue structures",
            "Dynamic physiology (microfluidics, shear stress)",
            "System models of inter-organ interaction",
            "More accurate prediction, more reliable data",
          ],
        },
      ],
      aside: {
        label: "Real Difference. Real Impact.",
        items: [
          { icon: Target, title: "Higher Predictivity", desc: "More accurate drug response prediction" },
          { icon: ShieldCheck, title: "Lower R&D Risk", desc: "Lower risk of clinical failure" },
          { icon: Clock, title: "Faster to Patients", desc: "Faster drug development" },
          { icon: Users, title: "Better Medicines", desc: "Safer, more effective therapies" },
        ],
      },
      banner: {
        title: "*Closer to Human Biology.*",
        desc: "A healthier tomorrow, built by TissNexus.",
        items: [
          { icon: Dna, title: "More Predictive Science" },
          { icon: TrendingUp, title: "Accelerated R&D" },
          { icon: Globe, title: "Healthier Tomorrow" },
        ],
      },
    },
    {
      kicker: "The Translation Gap",
      title: "Great Science\n*Doesn’t Always Translate.*",
      lead: "Good research results don’t always hold true in people.",
      body: [
        "Conventional research models provide useful information in drug development, but they cannot fully capture the complexity of human biology, which often leads to failure in the clinic.",
        "TissNexus develops Human-Relevant MPS technology to close this Translation Gap.",
      ],
      image: { src: src("s2-hero"), alt: "Human organ illustration" },
      cards: [
        {
          wide: true,
          title: "The Translation Gap",
          subtitle: "Why good candidates still fail in the clinic",
          figure: "failure90",
          bullets: ["Preclinical–clinical mismatch", "Unexpected toxicity", "Development halted for lack of efficacy"],
          tag: "High Attrition. High Cost. Missed Opportunities.",
        },
      ],
      aside: {
        label: "Why a Human-Relevant Model Is Needed",
        items: [
          { icon: Users, title: "Human-Specific Biology", desc: "To reflect human-specific biological responses" },
          { icon: Pill, title: "Better Prediction", desc: "To predict drug efficacy and toxicity more accurately" },
          { icon: TrendingUp, title: "Lower R&D Risk", desc: "To reduce clinical failure and improve efficiency" },
          { icon: Clock, title: "Faster, More Efficient Development", desc: "To make drug development faster and more effective" },
          { icon: Globe, title: "Healthier Tomorrow", desc: "To build a healthier future with safer medicines" },
        ],
      },
      banner: {
        title: "Bridging the Gap. *For a Healthier Tomorrow.*",
        desc: "With Human-Relevant MPS, TissNexus narrows the gap between research and the clinic and expands what drug development can achieve.",
      },
    },
    {
      kicker: "Our Technology",
      title: "Engineering\n*Human-Relevant Biology.*",
      lead: "Integrated technology that faithfully recreates human biology.",
      body: [
        "TissNexus integrates human-derived cells, tissue engineering, microfluidics, dynamic culture, multi-organ connection and biological analysis into MPS technology that recreates a biological environment close to the human body.",
      ],
      image: { src: src("s3-hero"), alt: "HUMIMIC® chip connecting multiple organ tissues" },
      groupLabel: "TissNexus MPS Technology Stack",
      cards: [
        {
          num: "01",
          title: "Human Cells & Tissues",
          image: { src: src("s3-cells"), alt: "Human-derived cell spheroid" },
          bullets: ["Human primary cells and iPSCs", "Tissue-specific cell models", "3D tissue formation"],
          tag: "Human-Relevant Source",
        },
        {
          num: "02",
          title: "Tissue Engineering",
          image: { src: src("s3-tissue"), alt: "3D tissue structure" },
          bullets: ["3D tissue structure and ECM", "Maintaining and maturing cell function", "Tissue-specific custom models"],
          tag: "Functional Tissue Model",
        },
        {
          num: "03",
          title: "Microfluidics",
          image: { src: src("s3-microfluidics"), alt: "Microfluidic channels" },
          bullets: ["Biomimetic fluid flow", "Shear stress and gradient control", "Precise drug dosing and control"],
          tag: "Dynamic Microenvironment",
        },
        {
          num: "04",
          title: "Dynamic Culture",
          image: { src: src("s3-dynamic"), alt: "Cross-section of tissue cultured under flow" },
          bullets: ["Continuous nutrient supply, waste removal", "Physiological stimuli (flow, mechanical)", "Stable long-term organ function"],
          tag: "Life-Like Physiology",
        },
        {
          num: "05",
          title: "Multi-Organ Integration",
          image: { src: src("s3-multi-organ"), alt: "Chip connecting several organs" },
          bullets: ["Connected organs and their interactions", "Systemic drug response evaluation", "Inter-organ metabolism and toxicity"],
          tag: "System-Level Biology",
        },
        {
          num: "06",
          title: "Biological Analysis",
          image: { src: src("s3-analysis"), alt: "Analysis software screen" },
          bullets: ["Cell function and biomarker analysis", "Omics integration (genome, transcriptome, metabolome)", "Quantitative data and visualization"],
          tag: "Actionable Insights",
        },
      ],
      banner: {
        title: "Integrated Technologies.\n*More Human-Relevant Answers.*",
        items: [
          { icon: Dna, title: "Human Biology" },
          { icon: Settings, title: "Technology Integration" },
          { icon: ChartColumn, title: "Scientific Confidence" },
          { icon: Users, title: "Better Decisions" },
        ],
      },
    },
    {
      kicker: "Dynamic Culture",
      title: "Dynamic Culture.\n*Life-Like Physiology in the Lab.*",
      lead: "A flowing environment brings biology to life.",
      body: [
        "TissNexus Dynamic Culture recreates the physiological environment of human tissue through precise microfluidic flow control and biomimetic physical and chemical stimuli.",
        "Going beyond static culture, we realize living biology that changes over time.",
      ],
      image: { src: src("s4-hero"), alt: "HUMIMIC® chip in dynamic culture" },
      cards: [
        {
          num: "01",
          title: "Perfusion Control",
          image: { src: src("s4-perfusion"), alt: "Perfusion channels" },
          bullets: ["Precise flow control (µL/min)", "Continuous oxygen and nutrient supply", "Real-time waste removal"],
          tag: "Stable & Reproducible Environment",
        },
        {
          num: "02",
          title: "Mechanical Stimulation",
          image: { src: src("s4-mechanical"), alt: "Tissue under mechanical stimulation" },
          bullets: ["Shear stress control", "Mechanical stretch and compression", "Tissue-specific physical environment"],
          tag: "Physiologically Relevant Stimuli",
        },
        {
          num: "03",
          title: "Multi-Parameter Control",
          params: ["Temperature", "pH", "Oxygen", "Nutrients", "Flow"],
          bullets: ["Integrated temperature, pH, O₂ and nutrient control", "Organ-specific culture conditions", "Real-time monitoring and auto feedback"],
          tag: "Precision Environment Control",
        },
        {
          num: "04",
          title: "Long-term Viability",
          figure: "viability",
          bullets: ["Long-term tissue structure and function", "Time-dependent drug response evaluation", "Enables chronic toxicity studies"],
          tag: "Sustained Viability",
        },
      ],
      aside: {
        label: "Real Impact. Real Applications.",
        items: [
          { icon: Pill, title: "More Predictive", desc: "Better prediction of drug efficacy" },
          { icon: ShieldCheck, title: "Lower Failure", desc: "Fewer clinical failures" },
          { icon: Clock, title: "Longer Insight", desc: "Chronic and long-term effect analysis" },
          { icon: Users, title: "Broader Application", desc: "Diverse therapeutics and diseases" },
          { icon: TrendingUp, title: "Faster Development", desc: "Faster drug development" },
        ],
      },
      banner: {
        title: "Flowing Biology.\n*Real Possibilities.*",
        items: [
          { icon: Share2, title: "Human-Relevant Models" },
          { icon: Settings, title: "Scalable Platform" },
          { icon: Globe, title: "Healthier Tomorrow" },
        ],
      },
    },
    {
      kicker: "Multi-Organ Integration",
      title: "Connected Organs.\n*Real Human Responses.*",
      lead: "Only when organs connect do models come close to people.",
      body: [
        "TissNexus Multi-Organ Integration links multiple organ models through microfluidics to precisely recreate drug absorption, distribution, metabolism and excretion (ADME) and inter-organ interactions.",
        "By predicting more realistic human responses, we accelerate safer and more effective drug development.",
      ],
      image: { src: src("s5-hero"), alt: "Human organ illustration" },
      cards: [
        {
          num: "01",
          title: "Individual Organ Models",
          organs: [
            { src: src("s5-liver"), alt: "Liver" },
            { src: src("s5-lung"), alt: "Lung" },
            { src: src("s5-intestine"), alt: "Intestine" },
            { src: src("s5-heart"), alt: "Heart" },
            { src: src("s5-kidney"), alt: "Kidney" },
            { src: src("s5-brain"), alt: "Brain" },
          ],
          bullets: ["Optimized 3D tissue model per organ", "Native cell composition and function", "Precise physiological monitoring"],
        },
        {
          num: "02",
          title: "Microfluidic Integration",
          image: { src: src("s5-microfluidic"), alt: "Microfluidic junction linking organs" },
          bullets: ["Blood-like circulation between organs", "Real-time transfer of drugs and metabolites", "Precise concentration, flow and shear control"],
        },
        {
          num: "03",
          title: "Systemic Response",
          image: { src: src("s5-systemic"), alt: "Whole-body organ illustration" },
          bullets: ["ADME (absorption–distribution–metabolism–excretion)", "Inter-organ interaction and toxicity", "Chronic exposure and repeat-dose studies"],
        },
        {
          num: "04",
          title: "Actionable Insight",
          image: { src: src("s5-insight"), alt: "Analysis dashboard" },
          bullets: ["Quantitative efficacy and toxicity analysis", "Early prediction of failure risk", "Faster, more accurate development strategy"],
        },
      ],
      aside: {
        label: "Key Benefits",
        items: [
          { icon: Pill, title: "More Predictive", desc: "Predictions closer to people" },
          { icon: ShieldCheck, title: "Safer Medicines" },
          { icon: Clock, title: "Faster Development" },
          { icon: Users, title: "Lower Development Cost" },
          { icon: Globe, title: "Global Competitiveness" },
        ],
      },
      banner: {
        title: "From Organs to Outcomes.\n*A Healthier Tomorrow.*",
        items: [
          { icon: TrendingUp, title: "Predict Human Responses" },
          { icon: Settings, title: "Integrated Platforms" },
          { icon: Lightbulb, title: "Better Decisions" },
        ],
      },
    },
    {
      kicker: "Biological Analysis",
      title: "From Complex Data\n*to Clear Answers.*",
      lead: "Let the data speak.",
      body: [
        "TissNexus Biological Analysis integrates the vast multimodal data generated by MPS with AI-based analysis to derive meaningful insights into drug efficacy and safety.",
        "Data is no longer just numbers. It becomes direction for better medicines.",
      ],
      image: { src: src("s6-hero"), alt: "Analysis platform screen" },
      cards: [
        {
          num: "01",
          title: "Multi-Modal Data Integration",
          image: { src: src("s6-multimodal"), alt: "Imaging, transcriptomic, proteomic and metabolomic data layers" },
          bullets: ["Imaging, genomic, protein, metabolite and functional data", "Tracking changes over time", "Standardized data pipeline"],
          tag: "One Data. A Complete Picture.",
        },
        {
          num: "02",
          title: "AI-Powered Analysis",
          image: { src: src("s6-ai"), alt: "AI chip illustration" },
          bullets: ["Machine-learning pattern analysis", "Discovery of meaningful biomarkers", "Drug response and toxicity prediction"],
          tag: "Turning Data into Insights.",
        },
        {
          num: "03",
          title: "Biological Insight",
          image: { src: src("s6-insight"), alt: "Control vs. treated comparison" },
          bullets: ["Quantifying cell- and tissue-level change", "Mechanism of action (MoA) analysis", "Efficacy and safety insights"],
          tag: "Deeper Understanding. Real Biology.",
        },
        {
          num: "04",
          title: "Actionable Reports",
          image: { src: src("s6-report"), alt: "Comprehensive analysis report" },
          bullets: ["Automated visual analysis reports", "Summary and interpretation of key findings", "Supports R&D and clinical decisions"],
          tag: "From Insight to Impact.",
        },
      ],
      aside: {
        label: "Real Data. Real Difference.",
        items: [
          { icon: Target, title: "Higher Success Rate" },
          { icon: Clock, title: "Shorter Development Time" },
          { icon: ShieldCheck, title: "Reduced R&D Risk" },
          { icon: Database, title: "Richer Biological Knowledge" },
          { icon: Users, title: "Better Medicines", desc: "Healthier lives" },
        ],
      },
      banner: {
        title: "Data to Discovery.\n*A Healthier Tomorrow.*",
        items: [
          { icon: TrendingUp, title: "AI-Driven Insights" },
          { icon: Share2, title: "Translational Impact" },
          { icon: Globe, title: "Global Collaboration" },
        ],
      },
    },
    {
      kicker: "From Research to Impact",
      title: "Real Solutions.\n*A Healthier Tomorrow.*",
      lead: "Beyond research, toward a healthier tomorrow.",
      body: [
        "TissNexus MPS Technology supports the entire drug development cycle, helping innovative therapies reach more patients more safely and more quickly.",
        "With models closer to humans, we are building a healthier future together.",
      ],
      cards: [
        {
          num: "01",
          title: "Accelerate Drug Development",
          figure: "timeline",
          bullets: ["Faster efficacy validation", "Narrower preclinical–clinical gap", "Lower development cost"],
          tag: "Faster Development. More Opportunities.",
        },
        {
          num: "02",
          title: "Improve Success Rate",
          figure: "success",
          bullets: ["Predicts human-like responses", "Early detection of toxicity and side effects", "Minimizes clinical failure risk"],
          tag: "Higher Confidence. Higher Success.",
        },
        {
          num: "03",
          title: "Enable Personalized Medicine",
          image: { src: src("s7-personalized"), alt: "Organ-by-organ response layers" },
          bullets: ["Simulating responses across patient groups", "Biomarker-based patient selection", "Precision medicine and companion diagnostics"],
          tag: "Right Drug. For the Right Patient.",
        },
        {
          num: "04",
          title: "Create a Healthier Society",
          image: { src: src("s7-society"), alt: "A smiling child" },
          bullets: ["Safer medicines for more patients", "Ethical research with fewer animal studies", "A sustainable healthcare ecosystem"],
          tag: "Real Science. Real Impact.",
        },
      ],
      aside: {
        label: "Our Commitment",
        items: [
          { icon: Lightbulb, title: "Innovation", desc: "Continuous technological innovation" },
          { icon: Users, title: "Collaboration", desc: "Solutions built together" },
          { icon: Leaf, title: "Sustainability", desc: "Research that cares for people and planet" },
          { icon: Globe, title: "Global Impact", desc: "Better treatments for patients worldwide" },
          { icon: Heart, title: "A Healthier Tomorrow", desc: "For everyone’s healthier tomorrow" },
        ],
      },
      banner: {
        title: "From Possibility to Patients.\n*With TissNexus.*",
        items: [
          { icon: Dna, title: "Innovative Science" },
          { icon: Settings, title: "Real Applications" },
          { icon: Globe, title: "Healthier Tomorrow" },
        ],
      },
    },
  ],
  impactStages: [
    { icon: Share2, title: "Discovery", desc: "Better Candidates" },
    { icon: Rat, title: "Preclinical", desc: "More Predictive Data" },
    { icon: Users, title: "Clinical", desc: "Higher Success Rate" },
    { icon: Globe, title: "Patient Impact", desc: "Healthier Lives" },
  ],
  multiParamImage: { src: src("s4-multi-param"), alt: "Multi-parameter control chamber" },
  figures: {
    failure: { value: "~90%", label: "Clinical failure rate" },
    viability: {
      dynamic: "Dynamic Culture",
      static: "Static Culture",
      axis: "Cell Viability (%) · Time (days)",
      aria: "Cell viability over 28 days: dynamic culture stays near 100%, static culture declines to about 63%",
    },
    timeline: {
      stages: ["Discovery", "Preclinical", "Clinical", "Approval"],
      mps: "MPS-based",
      conventional: "Conventional",
      caption: "Faster & Smarter",
      aria: "Concept diagram: MPS-based development progresses faster than conventional development",
    },
    success: { conventional: "Conventional", mps: "MPS-enabled", aria: "About 10% conventionally versus about 2–3x with MPS" },
  },
};

export const content: Localized<MpsContent> = { ko, en };
