import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorPage, SiteLayout } from "./shared/components";
import { aboutRoutes } from "./about";
import { contactRoutes } from "./contact";
import { homeRoutes } from "./home";
import { servicesRoutes } from "./services";

// 각 feature 가 자기 라우트를 내보내고, 여기서 셸 아래에 모읍니다.
const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <ErrorPage />,
    children: [...homeRoutes, ...aboutRoutes, ...servicesRoutes, ...contactRoutes],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
