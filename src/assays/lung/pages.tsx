import { Hero } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { AssayBrief } from "../components/AssayBrief";
import { content } from "./content";

/** Assays · Lung & Respiratory. 전용 시안이 없어 요약 페이지로 구성합니다. */
export function LungPage() {
  const lung = useLocalized(content);
  return (
    <Hero eyebrow={{ label: lung.eyebrow }} kicker={lung.kicker} title={lung.title} lead={lung.lead}>
      <AssayBrief {...lung.brief} />
    </Hero>
  );
}
