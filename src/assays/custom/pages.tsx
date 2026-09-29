import { FeatureRow, Hero } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { AssayBrief } from "../components/AssayBrief";
import { content } from "./content";

/** Assays · Custom Assay. 전용 시안이 없어 요약 페이지로 구성합니다. */
export function CustomAssayPage() {
  const custom = useLocalized(content);
  return (
    <Hero eyebrow={{ label: custom.eyebrow }} kicker={custom.kicker} title={custom.title} body={custom.body}>
      <FeatureRow items={custom.features} />
      <AssayBrief {...custom.brief} />
    </Hero>
  );
}
