import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import imageMap from "virtual:image-map";
import { App } from "./App";
import { installImageMap } from "./shared/singleFileImages";
import "./shared/styles/global.css";

installImageMap(imageMap);

const container = document.getElementById("root");
if (!container) throw new Error("#root 엘리먼트를 찾을 수 없습니다.");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
