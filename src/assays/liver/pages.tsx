import { Banner, CardGrid, FeatureRow, Hero } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { ImageSteps } from "../components/ImageSteps";
import { Labeled } from "../components/Labeled";
import { ValueRow } from "../components/ValueRow";
import { content } from "./content";

/** Assays · Liver. 시안 40~43번 슬라이드. */
export function LiverPage() {
  const { hero, whyItMatters, solution, whatYouGet } = useLocalized(content);
  return (
    <>
      <Hero
        size="page"
        eyebrow={{ label: hero.eyebrow, index: "01", total: "04" }}
        title={hero.title}
        lead={hero.lead}
        body={hero.body}
        image={hero.image}
        features={hero.features}
      />

      <Hero
        eyebrow={{ label: whyItMatters.eyebrow, index: "02", total: "04" }}
        kicker={whyItMatters.kicker}
        title={whyItMatters.title}
        body={whyItMatters.body}
        image={whyItMatters.image}
      >
        <FeatureRow items={whyItMatters.features} />
        <Banner {...whyItMatters.banner} />
      </Hero>

      <Hero
        eyebrow={{ label: solution.eyebrow, index: "03", total: "04" }}
        kicker={solution.kicker}
        title={solution.title}
        body={solution.body}
        image={solution.image}
      >
        <ImageSteps steps={solution.steps} />
        <FeatureRow items={solution.features} />
        <Banner {...solution.banner} />
      </Hero>

      <Hero
        eyebrow={{ label: whatYouGet.eyebrow, index: "04", total: "04" }}
        kicker={whatYouGet.kicker}
        title={whatYouGet.title}
        body={whatYouGet.body}
        image={whatYouGet.image}
      >
        <Labeled label={whatYouGet.deliverablesLabel}>
          <CardGrid cards={whatYouGet.deliverables} columns={3} />
        </Labeled>
        <Labeled label={whatYouGet.businessValueLabel} panel>
          <ValueRow items={whatYouGet.businessValue} />
        </Labeled>
      </Hero>
    </>
  );
}
