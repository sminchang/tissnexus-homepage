import { useLang, type Localized } from "../i18n";
import { Hero } from "./Hero";

export interface ComingSoonCopy {
  label: string;
  title: string;
  lead?: string;
}

const text = {
  ko: { body: "이 페이지는 준비 중입니다. 관련 문의는 아래 버튼으로 남겨 주세요.", action: "문의하기" },
  en: { body: "This page is being prepared. Please reach out with any questions.", action: "Contact Us" },
};

/** 시안이 아직 없는 메뉴의 자리 표시 페이지. 내용이 정해지면 feature 페이지로 교체합니다. */
export function ComingSoon({ copy }: { copy: Localized<ComingSoonCopy> }) {
  const lang = useLang();
  const { label, title, lead } = copy[lang];
  const t = text[lang];
  return (
    <Hero
      size="page"
      eyebrow={{ label }}
      title={title}
      lead={lead}
      body={[t.body]}
      actions={[{ label: t.action, to: "/contact" }]}
    />
  );
}
