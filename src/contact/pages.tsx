import { Section } from "../shared/components";
import { ContactForm } from "./components/ContactForm";

export function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="문의하기"
      description="TODO: 어떤 문의를 환영하는지, 회신까지 얼마나 걸리는지 적어두면 전환율이 올라갑니다."
    >
      <ContactForm />
    </Section>
  );
}
