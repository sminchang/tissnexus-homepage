import { useEffect } from "react";
import { useLocation } from "react-router";
import { Banner, CardGrid, Hero, StepFlow } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { ChevronBar } from "../components/ChevronBar";
import { SplitSection } from "../components/SplitSection";
import { VisionFlow } from "../components/VisionFlow";
import { content } from "./content";
import styles from "./pages.module.css";

/** Vision & Mission. 시안 13~18번 슬라이드를 한 페이지로 잇습니다. */
export function VisionPage() {
  useHashScroll();
  const { hero, vision, mission, pillars, direction, finalMessage } = useLocalized(content);

  return (
    <>
      <Hero
        size="page"
        eyebrow={{ label: hero.eyebrow }}
        title={hero.title}
        lead={hero.lead}
        body={hero.body}
        image={hero.image}
        actions={[
          { label: hero.actions.vision, to: "#vision" },
          { label: hero.actions.mission, to: "#mission", variant: "secondary" },
        ]}
      />

      <SplitSection
        id="vision"
        eyebrow={{ index: "02", label: vision.eyebrow }}
        kicker={vision.kicker}
        title={vision.title}
        body={vision.body}
        aside={<VisionFlow stages={vision.stages} compact />}
      >
        <Banner title={vision.closing} />
      </SplitSection>

      <Hero
        id="mission"
        eyebrow={{ index: "03", label: mission.eyebrow }}
        kicker={mission.kicker}
        title={mission.title}
        image={mission.image}
      >
        <div className={styles.compactCards}>
          <CardGrid cards={mission.cards} imageShape="circle" />
        </div>
        <ChevronBar steps={mission.flow} compact />
      </Hero>

      <Hero eyebrow={{ index: "04", label: pillars.eyebrow }} title={pillars.title} body={pillars.body} image={pillars.image}>
        <div className={styles.compactCards}>
          <CardGrid cards={pillars.cards} imageShape="circle" />
        </div>
        <ChevronBar steps={pillars.flow} compact />
      </Hero>

      <SplitSection
        eyebrow={{ index: "05", label: direction.eyebrow }}
        title={direction.title}
        backdrop={direction.image}
        aside={
          <div className={styles.asideText}>
            {direction.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        }
      >
        <div className={styles.compactCards}>
          <CardGrid cards={direction.cards} imageShape="circle" />
        </div>
        <ChevronBar steps={direction.flow} caption={direction.flowCaption} compact />
      </SplitSection>

      <Hero
        eyebrow={{ index: "06", label: finalMessage.eyebrow }}
        title={finalMessage.title}
        body={finalMessage.body}
        image={finalMessage.image}
      >
        <StepFlow items={finalMessage.steps} />
        <p className={styles.caption}>{finalMessage.caption}</p>
      </Hero>
    </>
  );
}

/** 같은 페이지 안의 #vision, #mission 링크로 이동합니다. */
function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);
}
