/** 회사소개 문구. */

export interface ValueItem {
  title: string;
  description: string;
}

export const mission =
  "TODO: 회사가 존재하는 이유를 한 문장으로. 제품이 아니라 목적을 씁니다.";

export const story = [
  "TODO: 어떤 문제를 발견했고 왜 이 회사를 만들었는지.",
  "TODO: 지금 무엇을 하고 있으며 어디까지 왔는지.",
  "TODO: 앞으로 어디로 가려 하는지.",
];

export const values: ValueItem[] = [
  { title: "TODO: 핵심가치 1", description: "TODO: 그 가치가 실제 일하는 방식에서 어떻게 드러나는지." },
  { title: "TODO: 핵심가치 2", description: "TODO: 추상적인 단어 대신 구체적인 행동으로." },
  { title: "TODO: 핵심가치 3", description: "TODO: 지키지 못하는 가치는 적지 않습니다." },
];

export interface MilestoneItem {
  year: string;
  description: string;
}

export const milestones: MilestoneItem[] = [
  { year: "TODO", description: "TODO: 설립" },
  { year: "TODO", description: "TODO: 주요 성과" },
  { year: "TODO", description: "TODO: 주요 성과" },
];
