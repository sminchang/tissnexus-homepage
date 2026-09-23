/** 서비스(또는 제품) 목록. 업종이 확정되면 항목을 바꾸면 됩니다. */

export interface ServiceItem {
  id: string;
  name: string;
  summary: string;
  /** 그 서비스가 실제로 제공하는 것들 */
  deliverables: string[];
}

export const services: ServiceItem[] = [
  {
    id: "service-1",
    name: "TODO: 서비스 1",
    summary: "TODO: 어떤 고객의 어떤 문제를 해결하는지 한 문장.",
    deliverables: ["TODO: 제공 항목", "TODO: 제공 항목", "TODO: 제공 항목"],
  },
  {
    id: "service-2",
    name: "TODO: 서비스 2",
    summary: "TODO: 서비스 1과 겹치지 않게, 구분되는 가치를 적습니다.",
    deliverables: ["TODO: 제공 항목", "TODO: 제공 항목"],
  },
  {
    id: "service-3",
    name: "TODO: 서비스 3",
    summary: "TODO: 항목이 3개가 안 되면 배열에서 지우면 됩니다.",
    deliverables: ["TODO: 제공 항목", "TODO: 제공 항목"],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  { step: "01", title: "TODO: 단계명", description: "TODO: 고객이 이 단계에서 무엇을 경험하는지." },
  { step: "02", title: "TODO: 단계명", description: "TODO: 소요 기간이 있으면 함께 적습니다." },
  { step: "03", title: "TODO: 단계명", description: "TODO: 마지막 단계는 결과물로 끝나게." },
];
