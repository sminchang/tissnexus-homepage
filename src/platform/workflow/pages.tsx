import { FeatureRow, Hero, StepFlow, type Feature } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { CompactCards } from "../humimic/components/CompactCards";
import { DenseSection } from "../humimic/components/DenseSection";
import { AnalysisPanel, InsightPanel, StudyDesignPanel } from "./components/Panels";
import { content } from "./content";
import styles from "./pages.module.css";

/** 각 상세 섹션 하단의 5단계 스테퍼. 현재 단계를 강조합니다. */
function Stepper({ steps, active }: { steps: Feature[]; active: number }) {
  return (
    <div className={styles.stepper}>
      <StepFlow items={steps} active={active} numbered />
    </div>
  );
}

/** Workflow. 시안 34번(개요) + 35~38번(02~05 단계)을 한 페이지로 잇습니다. */
export function WorkflowPage() {
  const { label, panels, overviewSteps, detailSteps, overview, design, experiment, analysis, insight } =
    useLocalized(content);
  const eyebrow = (index: string) => ({ label, index, total: "05" });

  return (
    <>
      <Hero size="page" eyebrow={{ label: overview.label }} title={overview.title} lead={overview.lead} image={overview.image}>
        <StepFlow items={overviewSteps} numbered />
      </Hero>

      <DenseSection
        eyebrow={eyebrow("02")}
        kicker={design.kicker}
        title={design.title}
        lead={design.lead}
        body={design.body}
        aside={
          <div className={styles.designVisual}>
            <img src={design.image.src} alt={design.image.alt} loading="lazy" />
            <StudyDesignPanel items={design.checklist} labels={panels} />
          </div>
        }
      >
        <FeatureRow items={design.features} />
        <Stepper steps={detailSteps} active={1} />
      </DenseSection>

      <DenseSection
        eyebrow={eyebrow("03")}
        kicker={experiment.kicker}
        title={experiment.title}
        lead={experiment.lead}
        body={experiment.body}
        aside={<img className={styles.visual} src={experiment.image.src} alt={experiment.image.alt} loading="lazy" />}
      >
        <CompactCards cards={experiment.cards} columns={3} />
        <Stepper steps={detailSteps} active={2} />
      </DenseSection>

      <DenseSection
        eyebrow={eyebrow("04")}
        kicker={analysis.kicker}
        title={analysis.title}
        lead={analysis.lead}
        body={analysis.body}
        aside={<AnalysisPanel pathways={analysis.pathways} insights={analysis.keyInsights} labels={panels} />}
      >
        <FeatureRow items={analysis.features} />
        <Stepper steps={detailSteps} active={3} />
      </DenseSection>

      <DenseSection
        eyebrow={eyebrow("05")}
        kicker={insight.kicker}
        title={insight.title}
        lead={insight.lead}
        body={insight.body}
        aside={
          <InsightPanel findings={insight.findings} assessment={insight.assessment} summary={insight.summary} labels={panels} />
        }
      >
        <FeatureRow items={insight.features} />
        <Stepper steps={detailSteps} active={4} />
      </DenseSection>
    </>
  );
}
