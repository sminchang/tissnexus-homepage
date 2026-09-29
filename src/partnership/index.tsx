import type { RouteObject } from "react-router";
import { ComingSoon } from "../shared/components";

// 시안이 아직 없는 메뉴입니다. 내용이 정해지면 pages.tsx 를 만들어 교체합니다.
export const partnershipRoutes: RouteObject[] = [
  {
    path: "partnership/cro",
    element: (
      <ComingSoon
        copy={{
          ko: {
            label: "파트너십",
            title: "CRO *서비스*",
            lead: "Human-Relevant MPS 기반 위탁 시험 서비스를 준비하고 있습니다.",
          },
          en: {
            label: "Partnership",
            title: "CRO *Service*",
            lead: "We are preparing contract testing services built on Human-Relevant MPS.",
          },
        }}
      />
    ),
  },
  {
    path: "partnership/co-development",
    element: (
      <ComingSoon
        copy={{
          ko: {
            label: "파트너십",
            title: "*공동개발*",
            lead: "연구 목적에 맞춘 모델·어세이 공동개발 파트너십을 준비하고 있습니다.",
          },
          en: {
            label: "Partnership",
            title: "Co-*development*",
            lead: "We are preparing co-development partnerships for models and assays tailored to your research.",
          },
        }}
      />
    ),
  },
];
