import type { RouteObject } from "react-router";
import { ComingSoon } from "../shared/components";

// 시안이 아직 없는 메뉴입니다. 소식 데이터가 생기면 pages.tsx 를 만들어 교체합니다.
export const newsRoutes: RouteObject[] = [
  {
    path: "news",
    element: (
      <ComingSoon
        copy={{
          ko: { label: "뉴스", title: "*뉴스*", lead: "TissNexus의 새로운 소식을 곧 전해드리겠습니다." },
          en: { label: "News", title: "*News*", lead: "News from TissNexus is coming soon." },
        }}
      />
    ),
  },
];
