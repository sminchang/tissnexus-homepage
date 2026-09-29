/**
 * Assays · Bone Marrow 문구. 시안 PPTX 45~46번 슬라이드에서 옮기고 KO/EN 으로 나눴습니다.
 * (시안은 04개 중 01~02만 있음)
 */
import { Blend, Droplet, ShieldCheck, Waves } from "lucide-react";
import type { Feature } from "../../shared/components";
import type { Localized } from "../../shared/i18n";

const src = (name: string) => `/images/assays/bone-marrow/${name}.webp`;

const ko = {
  hero: {
    eyebrow: "골수 어세이",
    title: "혈액독성을\n*더 일찍* 이해합니다.",
    lead: "*인간 중심 골수 어세이*",
    body: [
      "TissNexus는 인체 유래 골수 기반 MPS 어세이를 통해 후보물질의 혈액독성 및 골수 반응을 보다 실제와 유사한 환경에서 평가합니다.",
    ],
    image: { src: src("hero"), alt: "골수 조직이 배양된 MPS 칩" },
    features: [
      { icon: Blend, title: "인체 유래 골수 모델" },
      { icon: Waves, title: "동적 MPS 환경" },
      { icon: ShieldCheck, title: "안전성 중심의 생물학적 인사이트" },
    ] as Feature[],
  },
  whyItMatters: {
    eyebrow: "왜 중요한가",
    title: "골수는\n*핵심 안전성 지표*입니다.",
    lead: "*골수와 혈액계 반응은 후보물질의 안전성을 조기에 판단하는*\n*중요한 지표입니다.*",
    body: [
      "TissNexus는 Human-Relevant Bone Marrow Assay를 통해 조혈계와 골수 환경에서 나타나는 반응을 보다 실제와 유사한 조건에서 평가하여, 안전성 리스크를 더 이른 단계에서 확인할 수 있도록 지원합니다.",
    ],
    image: { src: src("why"), alt: "골수 미세환경 속 혈액세포" },
    features: [
      { icon: Droplet, title: "혈액독성", desc: "후보물질의 혈액독성 및 조혈계 영향 평가" },
      { icon: Blend, title: "세포 반응", desc: "골수 미세환경에서의 세포 반응 분석" },
      { icon: ShieldCheck, title: "안전성 평가", desc: "안전성 리스크의 조기 식별 지원" },
    ] as Feature[],
  },
};

const en: typeof ko = {
  hero: {
    eyebrow: "Bone Marrow Assay",
    title: "Understand\nHematotoxicity *Earlier.*",
    lead: "*Human-Relevant Bone Marrow Assay*",
    body: [
      "TissNexus's MPS assay built on human-derived bone marrow evaluates hematotoxicity and marrow response of candidates in conditions closer to real life.",
    ],
    image: { src: src("hero"), alt: "MPS chip with cultured bone marrow tissue" },
    features: [
      { icon: Blend, title: "Human-derived marrow model" },
      { icon: Waves, title: "Dynamic MPS environment" },
      { icon: ShieldCheck, title: "Safety-focused biological insight" },
    ],
  },
  whyItMatters: {
    eyebrow: "Why It Matters",
    title: "Bone Marrow is a\n*Critical Safety Indicator.*",
    lead: "*Bone marrow and hematopoietic responses are key indicators for judging candidate safety early.*",
    body: [
      "With its Human-Relevant Bone Marrow Assay, TissNexus evaluates responses in the hematopoietic system and marrow environment under more realistic conditions, helping you confirm safety risks at an earlier stage.",
    ],
    image: { src: src("why"), alt: "Blood cells in the bone marrow microenvironment" },
    features: [
      { icon: Droplet, title: "Hematotoxicity", desc: "Hematotoxicity and hematopoietic effects of candidates" },
      { icon: Blend, title: "Cellular Response", desc: "Cell response in the marrow microenvironment" },
      { icon: ShieldCheck, title: "Safety Assessment", desc: "Early identification of safety risks" },
    ],
  },
};

export const content: Localized<typeof ko> = { ko, en };
