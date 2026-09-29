import { Hero } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { AssayBrief } from "../components/AssayBrief";
import { content } from "./content";

/** Assays · Multi-organ. 전용 시안이 없어 요약 페이지로 구성합니다. */
export function MultiOrganPage() {
  const multiOrgan = useLocalized(content);
  return (
    <Hero eyebrow={{ label: multiOrgan.eyebrow }} kicker={multiOrgan.kicker} title={multiOrgan.title} lead={multiOrgan.lead}>
      <AssayBrief {...multiOrgan.brief} />
    </Hero>
  );
}
