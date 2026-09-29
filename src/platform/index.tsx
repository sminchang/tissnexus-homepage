import type { RouteObject } from "react-router";
import { HumimicPage } from "./humimic/pages";
import { MpsTechnologyPage } from "./mps-technology/pages";
import { WorkflowPage } from "./workflow/pages";

export const platformRoutes: RouteObject[] = [
  { path: "platform/humimic", element: <HumimicPage /> },
  { path: "platform/mps-technology", element: <MpsTechnologyPage /> },
  { path: "platform/workflow", element: <WorkflowPage /> },
];
