import { Section } from "../shared/components";
import { useLocalized } from "../shared/i18n";
import { ContactForm } from "./components/ContactForm";
import { content } from "./content";

export function ContactPage() {
  const c = useLocalized(content);
  return (
    <Section eyebrow={{ label: c.eyebrow }} title={c.title} lead={c.lead}>
      <ContactForm />
    </Section>
  );
}
