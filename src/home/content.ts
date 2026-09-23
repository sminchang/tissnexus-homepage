/** 홈 화면 문구. 회사 정보가 확정되면 이 파일을 교체합니다. */

export interface Highlight {
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    title: "TODO: 강점 1",
    description: "TODO: 이 강점이 고객에게 어떤 결과를 주는지 한두 문장으로 적습니다.",
  },
  {
    title: "TODO: 강점 2",
    description: "TODO: 경쟁사가 아니라 고객의 언어로 씁니다.",
  },
  {
    title: "TODO: 강점 3",
    description: "TODO: 숫자나 사례가 있으면 여기에 넣습니다.",
  },
];

export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: "TODO", label: "TODO: 지표 이름 (예: 누적 고객사)" },
  { value: "TODO", label: "TODO: 지표 이름 (예: 프로젝트 수행)" },
  { value: "TODO", label: "TODO: 지표 이름 (예: 설립 연차)" },
];
