import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { ErrorPage, SiteLayout } from "./shared/components";
import { detectLang } from "./shared/i18n";
import { assaysRoutes } from "./assays";
import { companyRoutes } from "./company";
import { contactRoutes } from "./contact";
import { homeRoutes } from "./home";
import { newsRoutes } from "./news";
import { partnershipRoutes } from "./partnership";
import { platformRoutes } from "./platform";

// 모든 페이지는 /ko/... 또는 /en/... 아래에 있습니다.
// 각 feature 가 자기 라우트를 내보내고, 여기서 언어 셸 아래에 모읍니다.
const router = createBrowserRouter([
  { path: "/", element: <LanguageRedirect /> },
  {
    path: ":lang",
    element: <SiteLayout />,
    errorElement: <ErrorPage />,
    children: [
      ...homeRoutes,
      ...companyRoutes,
      ...platformRoutes,
      ...assaysRoutes,
      ...partnershipRoutes,
      ...newsRoutes,
      ...contactRoutes,
      // SiteLayout 이 먼저 렌더되도록 받아 둡니다. 언어가 빠진 옛 주소는 SiteLayout 이 언어를 붙여 보냅니다.
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function LanguageRedirect() {
  return <Navigate to={`/${detectLang()}`} replace />;
}

export function App() {
  return <RouterProvider router={router} />;
}
