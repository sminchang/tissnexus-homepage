/**
 * 회사 정보 단일 출처(Single Source of Truth).
 * 확정되지 않은 값은 TODO 로 표시했습니다. 이 파일만 채우면
 * 헤더·푸터·회사소개·문의 페이지에 한 번에 반영됩니다.
 */

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
  /** 로고 옆 한 줄 태그라인 */
  tagline: string;
  /** 히어로 영역 헤드라인 */
  headline: string;
  /** 헤드라인 보조 설명 */
  subheadline: string;
  foundedYear: string;
  /** 사업자등록번호 등 푸터 표기 항목 */
  registrationNumber: string;
  contact: CompanyContact;
}

export const company: CompanyProfile = {
  legalName: "주식회사 티스넥서스", // TODO: 확정된 법인명으로 교체
  brandName: "TissNexus",
  tagline: "TODO: 한 줄 태그라인", // 예: "연결이 만드는 다음 단계"
  headline: "TODO: 우리가 무엇을 하는 회사인지 한 문장",
  subheadline:
    "TODO: 헤드라인을 뒷받침하는 2~3줄 설명. 고객이 누구이고 어떤 문제를 해결하는지 적습니다.",
  foundedYear: "TODO",
  registrationNumber: "TODO: 000-00-00000",
  contact: {
    email: "TODO@tissnexus.com",
    phone: "TODO: 02-0000-0000",
    address: "TODO: 서울특별시 ...",
  },
};

/** 전역 네비게이션. 페이지를 추가하면 여기에 항목을 더합니다. */
export const navigation = [
  { label: "회사소개", to: "/about" },
  { label: "서비스", to: "/services" },
  { label: "문의", to: "/contact" },
] as const;
