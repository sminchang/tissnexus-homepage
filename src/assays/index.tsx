import type { RouteObject } from "react-router";
import { BoneMarrowPage } from "./bone-marrow/pages";
import { CustomAssayPage } from "./custom/pages";
import { LiverPage } from "./liver/pages";
import { LungPage } from "./lung/pages";
import { MultiOrganPage } from "./multi-organ/pages";

export const assaysRoutes: RouteObject[] = [
  { path: "assays/liver", element: <LiverPage /> },
  { path: "assays/bone-marrow", element: <BoneMarrowPage /> },
  { path: "assays/lung", element: <LungPage /> },
  { path: "assays/multi-organ", element: <MultiOrganPage /> },
  { path: "assays/custom", element: <CustomAssayPage /> },
];
