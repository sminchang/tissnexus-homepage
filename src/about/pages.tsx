import { Section } from "../shared/components";
import { Timeline } from "./components/Timeline";
import { ValueList } from "./components/ValueList";
import { milestones, mission, story, values } from "./content";
import styles from "./pages.module.css";

export function AboutPage() {
  return (
    <>
      <Section eyebrow="About" title="회사소개" description={mission}>
        <div className={styles.story}>
          {story.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Section>
      <Section tone="surface" eyebrow="Values" title="일하는 방식">
        <ValueList items={values} />
      </Section>
      <Section eyebrow="History" title="연혁">
        <Timeline items={milestones} />
      </Section>
    </>
  );
}
