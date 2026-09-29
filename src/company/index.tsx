import type { RouteObject } from "react-router";
import { CeoPage } from "./ceo/pages";
import { VisionPage } from "./vision/pages";

export const companyRoutes: RouteObject[] = [
  { path: "company/ceo", element: <CeoPage /> },
  { path: "company/vision", element: <VisionPage /> },
];
