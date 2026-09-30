import { FlaskConical } from "lucide-react";
import { Banner, ButtonLink, CardGrid, FeatureRow, Hero, Section } from "../shared/components";
import { useLocalized } from "../shared/i18n";
import { GapDiagram } from "./components/GapDiagram";
import { content } from "./content";
import styles from "./pages.module.css";

/** 홈 = Company Overview. 시안 3~9번 슬라이드를 한 페이지로 잇습니다. */
export function HomePage() {
  const { hero, whoWeAre, gap, whatWeDo, why, tissNexus, commitment } = useLocalized(content);

  return (
    <>
      <Hero
        size="page"
        eyebrow={{ label: hero.eyebrow }}
        title={hero.title}
        lead={hero.lead}
        image={hero.image}
        actions={[{ label: hero.action, to: "/platform/humimic", variant: "secondary" }]}
      />

      <Hero eyebrow={{ index: "02", label: whoWeAre.eyebrow }} title={whoWeAre.title} body={whoWeAre.body} image={whoWeAre.image} />

      <Hero eyebrow={{ index: "03", label: gap.eyebrow }} title={gap.title} lead={gap.lead} image={gap.image}>
        <GapDiagram {...gap.diagram} />
      </Hero>

      <Hero eyebrow={{ index: "04", label: whatWeDo.eyebrow }} title={whatWeDo.title} lead={whatWeDo.lead} image={whatWeDo.image}>
        <CardGrid cards={whatWeDo.assays} />
        <Banner icon={FlaskConical} title={whatWeDo.custom.title} desc={whatWeDo.custom.desc} items={whatWeDo.custom.items} />
      </Hero>

      <Section eyebrow={{ index: "05", label: why.eyebrow }} title={why.title} lead={why.lead} tone="surface">
        <CardGrid cards={why.reasons} imageShape="circle" />
        <div className={styles.spacer} />
        <Banner title={why.closing.title} desc={why.closing.desc} />
      </Section>

      <Hero
        eyebrow={{ index: "06", label: tissNexus.eyebrow }}
        title={tissNexus.title}
        lead={tissNexus.lead}
        body={tissNexus.body}
        image={tissNexus.image}
        imageFit="contain"
        actions={[
          { label: tissNexus.actions.platform, to: "/platform/humimic" },
          { label: tissNexus.actions.partner, to: "/partnership/co-development", variant: "secondary" },
        ]}
      />

      <Hero eyebrow={{ index: "07", label: commitment.eyebrow }} title={commitment.title} lead={commitment.lead} image={commitment.image}>
        <div className={styles.commitment}>
          <FeatureRow items={commitment.features} />
          <ButtonLink to="/contact">{commitment.action}</ButtonLink>
        </div>
      </Hero>
    </>
  );
}
