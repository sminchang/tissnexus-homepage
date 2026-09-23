import { ButtonLink, Section } from "../shared/components";
import { ProcessSteps } from "./components/ProcessSteps";
import { ServiceGrid } from "./components/ServiceCard";
import { process, services } from "./content";

export function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="서비스"
        description="TODO: 전체 서비스를 아우르는 한 문단. 개별 설명은 아래 카드에 맡깁니다."
      >
        <ServiceGrid items={services} />
      </Section>
      <Section tone="surface" eyebrow="Process" title="진행 방식">
        <ProcessSteps items={process} />
      </Section>
      <Section title="더 자세한 내용이 필요하신가요?">
        <ButtonLink to="/contact">문의하기</ButtonLink>
      </Section>
    </>
  );
}
