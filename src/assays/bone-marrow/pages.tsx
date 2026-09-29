import { FeatureRow, Hero } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { content } from "./content";

/** Assays · Bone Marrow. 시안 45~46번 슬라이드 (03·04 섹션은 시안이 없어 비워 둠). */
export function BoneMarrowPage() {
  const { hero, whyItMatters } = useLocalized(content);
  return (
    <>
      <Hero
        size="page"
        eyebrow={{ label: hero.eyebrow, index: "01" }}
        title={hero.title}
        lead={hero.lead}
        body={hero.body}
        image={hero.image}
        features={hero.features}
      />

      <Hero
        eyebrow={{ label: whyItMatters.eyebrow, index: "02" }}
        title={whyItMatters.title}
        lead={whyItMatters.lead}
        body={whyItMatters.body}
        image={whyItMatters.image}
      >
        <FeatureRow items={whyItMatters.features} />
      </Hero>
    </>
  );
}
