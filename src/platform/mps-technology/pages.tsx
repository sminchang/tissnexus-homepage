import { Container, Eyebrow, Rich } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { OrganGrid, ParameterMedia, StatCircle, SuccessBars, TimelineCompare, ViabilityChart } from "./components/Figures";
import { MediaCardGrid, type MediaCard } from "./components/MediaCardGrid";
import { Benefits, StageStrip, Summary } from "./components/SectionParts";
import { content, type CardContent, type MpsContent, type SectionContent } from "./content";
import styles from "./pages.module.css";

function toMediaCard({ figure, params, organs, ...card }: CardContent, c: MpsContent): MediaCard {
  let media: React.ReactNode;
  if (figure === "failure90") media = <StatCircle text={c.figures.failure} />;
  else if (figure === "viability") media = <ViabilityChart text={c.figures.viability} />;
  else if (figure === "timeline") media = <TimelineCompare text={c.figures.timeline} />;
  else if (figure === "success") media = <SuccessBars text={c.figures.success} />;
  else if (params) media = <ParameterMedia image={c.multiParamImage} params={params} />;
  else if (organs) media = <OrganGrid organs={organs} />;
  return { ...card, media };
}

/**
 * Platform › MPS Technology. 시안 26~32번 슬라이드(01~07)를 한 페이지로 잇습니다.
 * 풀페이지 스크롤에서 섹션 하나가 한 화면에 들어가도록, 공용 Hero 대신
 * 제목·본문·이미지를 한 줄에 두는 압축 레이아웃을 씁니다.
 */
export function MpsTechnologyPage() {
  const c = useLocalized(content);
  const total = String(c.sections.length).padStart(2, "0");

  return (
    <>
      {c.sections.map((s, i) => (
        <MpsSection
          key={s.kicker}
          section={s}
          eyebrow={{ label: c.eyebrow, index: String(i + 1).padStart(2, "0"), total }}
          isFirst={i === 0}
        >
          {i === c.sections.length - 1 && <StageStrip items={c.impactStages} />}
          {s.groupLabel && <p className={styles.groupLabel}>{s.groupLabel}</p>}
          <MediaCardGrid
            cards={s.cards.map((card) => toMediaCard(card, c))}
            aside={s.aside && <Benefits label={s.aside.label} items={s.aside.items} />}
          />
          <Summary title={s.banner.title} desc={s.banner.desc} items={s.banner.items} />
        </MpsSection>
      ))}
    </>
  );
}

function MpsSection({
  section: s,
  eyebrow,
  isFirst,
  children,
}: {
  section: SectionContent;
  eyebrow: { label: string; index: string; total: string };
  isFirst: boolean;
  children: React.ReactNode;
}) {
  const Heading = isFirst ? "h1" : "h2";
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <header className={styles.head} data-has-image={Boolean(s.image)}>
          <div className={styles.titleBlock}>
            <Eyebrow {...eyebrow} />
            <p className={styles.kicker}>{s.kicker}</p>
            <Heading className={styles.title}>
              <Rich text={s.title} />
            </Heading>
            <p className={styles.lead}>
              <Rich text={s.lead} />
            </p>
          </div>
          <div className={styles.body}>
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {s.image && (
            <div className={styles.media}>
              <img src={s.image.src} alt={s.image.alt} />
            </div>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
