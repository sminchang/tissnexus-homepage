import { Banner, FeatureRow, Hero, StepFlow } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { CompactCards } from "./components/CompactCards";
import { DenseSection } from "./components/DenseSection";
import { content } from "./content";
import styles from "./pages.module.css";

/** HUMIMIC® Platform. 시안 20~24번 슬라이드(01~05 / 06)를 한 페이지로 잇습니다. */
export function HumimicPage() {
  const { label, motion, applications, connected, capabilities, solutions } = useLocalized(content);
  const eyebrow = (index: string) => ({ label, index, total: "06" });

  return (
    <>
      <Hero
        size="page"
        eyebrow={eyebrow("01")}
        title={motion.title}
        lead={motion.lead}
        body={motion.body}
        image={motion.image}
      >
        <FeatureRow items={motion.features} />
      </Hero>

      <Hero
        eyebrow={eyebrow("02")}
        title={applications.title}
        lead={applications.lead}
        body={applications.body}
        image={applications.image}
      >
        <StepFlow items={applications.steps} />
      </Hero>

      <DenseSection
        eyebrow={eyebrow("03")}
        title={connected.title}
        lead={connected.lead}
        body={connected.body}
        aside={<img className={styles.diagram} src={connected.image.src} alt={connected.image.alt} loading="lazy" />}
      >
        <CompactCards cards={connected.capabilities} columns={5} />
        <div className={styles.flow}>
          <StepFlow items={connected.flow} />
        </div>
      </DenseSection>

      <DenseSection
        eyebrow={eyebrow("04")}
        kicker={capabilities.kicker}
        title={capabilities.title}
        lead={capabilities.lead}
        body={capabilities.body}
        aside={<img className={styles.visual} src={capabilities.image.src} alt={capabilities.image.alt} loading="lazy" />}
      >
        <CompactCards cards={capabilities.cards} columns={4} checks />
        <Banner title={capabilities.banner.title} items={capabilities.banner.items} />
      </DenseSection>

      <DenseSection
        eyebrow={eyebrow("05")}
        kicker={solutions.kicker}
        title={solutions.title}
        lead={solutions.lead}
        body={solutions.body}
        aside={
          <div className={styles.solutionsAside}>
            <img className={`${styles.visual} ${styles.short}`} src={solutions.image.src} alt={solutions.image.alt} loading="lazy" />
            <div className={styles.valueChain}>
              <p className={styles.valueLabel}>{solutions.valueChain.label}</p>
              <ul className={styles.valueList}>
                {solutions.valueChain.items.map(({ icon: Icon, title }) => (
                  <li key={title}>
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                    <span>{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      >
        <CompactCards cards={solutions.cards} columns={3} />
        <Banner title={solutions.banner.title} items={solutions.banner.items} />
      </DenseSection>
    </>
  );
}
