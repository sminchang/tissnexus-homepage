import { Section } from "../shared/components";
import { Hero } from "./components/Hero";
import { HighlightGrid, MetricRow } from "./components/HighlightGrid";
import { highlights, metrics } from "./content";

export function HomePage() {
  return (
    <>
      <Hero />
      <Section
        tone="surface"
        eyebrow="Why us"
        title="TODO: 우리를 선택해야 하는 이유"
        description="TODO: 이 섹션이 답해야 하는 질문은 '왜 다른 곳이 아니라 여기인가' 입니다."
      >
        <HighlightGrid items={highlights} />
      </Section>
      <Section eyebrow="Numbers" title="숫자로 보는 TissNexus">
        <MetricRow items={metrics} />
      </Section>
    </>
  );
}
