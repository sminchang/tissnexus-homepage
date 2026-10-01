/**
 * 회사 정보 단일 출처(Single Source of Truth).
 * 확정되지 않은 값은 TODO 로 표시했습니다. 이 파일만 채우면
 * 헤더·푸터·문의 페이지에 한 번에 반영됩니다.
 */
import type { Localized } from "../i18n";

export interface CompanyContact {
  email: string;
  phone: string;
  address: string;
}

export interface CompanyProfile {
  /** 등기상 법인명 */
  legalName: string;
  /** 화면에 노출되는 브랜드명 */
  brandName: string;
  /** 로고 아래·푸터·탭 제목에 쓰는 한 줄 슬로건 */
  tagline: string;
  /** 검색 결과에 보이는 사이트 설명 */
  description: string;
  /** 사업자등록번호 등 푸터 표기 항목 */
  registrationNumber: string;
  contact: CompanyContact;
}

const shared = {
  brandName: "TissNexus",
  registrationNumber: "TODO: 000-00-00000",
  email: "TODO@tissnexus.com",
  phone: "TODO: 02-0000-0000",
};

export const company: Localized<CompanyProfile> = {
  ko: {
    legalName: "주식회사 티스넥서스", // TODO: 확정된 법인명으로 교체
    brandName: shared.brandName,
    tagline: "인간 생물학을 연결합니다",
    description:
      "TissNexus는 Human-Relevant MPS와 Organ-on-Chip 기술로 신약개발과 바이오 연구의 더 나은 의사결정을 지원합니다.",
    registrationNumber: shared.registrationNumber,
    contact: { email: shared.email, phone: shared.phone, address: "TODO: 서울특별시 ..." },
  },
  en: {
    legalName: "TissNexus Inc.", // TODO: 확정된 영문 법인명으로 교체
    brandName: shared.brandName,
    tagline: "Human Biology. Connected.",
    description:
      "TissNexus supports better decisions in drug development and bio research with Human-Relevant MPS and Organ-on-Chip technology.",
    registrationNumber: shared.registrationNumber,
    contact: { email: shared.email, phone: shared.phone, address: "TODO: Seoul, Republic of Korea" },
  },
};

export interface NavItem {
  label: string;
  /** 언어를 뺀 경로. 링크를 그릴 때 LangLink 가 /ko, /en 을 붙입니다. */
  to: string;
}

export interface NavGroup {
  label: string;
  /** 그룹 대표 링크(1depth 클릭 시 이동) */
  to: string;
  /** 언어를 뺀 현재 경로가 이 접두사로 시작하면 그룹을 활성으로 표시 */
  match: string;
  children: NavItem[];
}

/** 전역 사이트맵. 시안 PPTX 1번 슬라이드 기준입니다. */
export const siteMap: Localized<NavGroup[]> = {
  ko: [
    {
      label: "회사",
      to: "/",
      match: "/company",
      children: [
        { label: "회사 개요", to: "/" },
        { label: "대표 인사말", to: "/company/ceo" },
        { label: "비전 · 미션", to: "/company/vision" },
      ],
    },
    {
      label: "기술",
      to: "/platform/humimic",
      match: "/platform",
      children: [
        { label: "HUMIMIC® 플랫폼", to: "/platform/humimic" },
        { label: "MPS 기술", to: "/platform/mps-technology" },
        { label: "연구 워크플로", to: "/platform/workflow" },
      ],
    },
    {
      label: "어세이",
      to: "/assays/liver",
      match: "/assays",
      children: [
        { label: "간", to: "/assays/liver" },
        { label: "골수", to: "/assays/bone-marrow" },
        { label: "폐 · 호흡기", to: "/assays/lung" },
        { label: "다장기", to: "/assays/multi-organ" },
        { label: "맞춤형 어세이", to: "/assays/custom" },
      ],
    },
    {
      label: "파트너십",
      to: "/partnership/cro",
      match: "/partnership",
      children: [
        { label: "CRO 서비스", to: "/partnership/cro" },
        { label: "공동개발", to: "/partnership/co-development" },
      ],
    },
    { label: "뉴스", to: "/news", match: "/news", children: [] },
  ],
  en: [
    {
      label: "Company",
      to: "/",
      match: "/company",
      children: [
        { label: "Overview", to: "/" },
        { label: "CEO", to: "/company/ceo" },
        { label: "Vision & Mission", to: "/company/vision" },
      ],
    },
    {
      label: "Technology",
      to: "/platform/humimic",
      match: "/platform",
      children: [
        { label: "HUMIMIC® Platform", to: "/platform/humimic" },
        { label: "MPS Technology", to: "/platform/mps-technology" },
        { label: "Workflow", to: "/platform/workflow" },
      ],
    },
    {
      label: "Assays",
      to: "/assays/liver",
      match: "/assays",
      children: [
        { label: "Liver", to: "/assays/liver" },
        { label: "Bone Marrow", to: "/assays/bone-marrow" },
        { label: "Lung & Respiratory", to: "/assays/lung" },
        { label: "Multi-organ", to: "/assays/multi-organ" },
        { label: "Custom Assay", to: "/assays/custom" },
      ],
    },
    {
      label: "Partnership",
      to: "/partnership/cro",
      match: "/partnership",
      children: [
        { label: "CRO Service", to: "/partnership/cro" },
        { label: "Co-development", to: "/partnership/co-development" },
      ],
    },
    { label: "News", to: "/news", match: "/news", children: [] },
  ],
};
