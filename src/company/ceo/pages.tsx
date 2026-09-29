import { Container, Eyebrow, Rich } from "../../shared/components";
import { useLocalized } from "../../shared/i18n";
import { content } from "./content";
import styles from "./pages.module.css";

/** CEO 인사말. 왼쪽 메시지, 오른쪽 대표 사진. */
export function CeoPage() {
  const { eyebrow, title, body, signature, portrait } = useLocalized(content);
  return (
    <section className={styles.ceo}>
      <Container className={styles.inner}>
        <div className={styles.text}>
          <Eyebrow label={eyebrow} />
          <h1 className={styles.title}>
            <Rich text={title} />
          </h1>
          <div className={styles.body}>
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className={styles.signature}>
            <p className={styles.slogan}>
              <Rich text={signature.slogan} />
            </p>
            <p className={styles.name}>
              {signature.role} <strong>{signature.name}</strong>
            </p>
          </div>
        </div>
        <div className={styles.portrait}>
          <img src={portrait.src} alt={portrait.alt} />
        </div>
      </Container>
    </section>
  );
}
