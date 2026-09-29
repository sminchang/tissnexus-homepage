import type { FormEvent } from "react";
import { Button } from "../../shared/components";
import { company } from "../../shared/config";
import { useLang } from "../../shared/i18n";
import { content } from "../content";
import { useContactForm } from "../hooks/useContactForm";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const { values, state, setField, submit } = useContactForm();
  const lang = useLang();
  const t = content[lang].form;
  const contact = company[lang].contact;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit();
  }

  return (
    <div className={styles.layout}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            {t.name}
          </label>
          <input
            id="name"
            className={styles.input}
            required
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {t.email}
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            required
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="company">
            {t.company}
          </label>
          <input
            id="company"
            className={styles.input}
            value={values.company}
            onChange={(event) => setField("company", event.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">
            {t.message}
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            required
            value={values.message}
            onChange={(event) => setField("message", event.target.value)}
          />
        </div>

        <div>
          <Button type="submit" disabled={state.status === "submitting"}>
            {state.status === "submitting" ? t.submitting : t.submit}
          </Button>
        </div>

        {state.status === "success" && (
          <p className={styles.status} data-tone="success" role="status">
            {t.success}
          </p>
        )}
        {state.status === "error" && (
          <p className={styles.status} data-tone="error" role="alert">
            {state.message}
          </p>
        )}
      </form>

      <aside className={styles.info}>
        <div>
          <div className={styles.infoLabel}>{t.email}</div>
          <div>{contact.email}</div>
        </div>
        <div>
          <div className={styles.infoLabel}>{t.phone}</div>
          <div>{contact.phone}</div>
        </div>
        <div>
          <div className={styles.infoLabel}>{t.address}</div>
          <div>{contact.address}</div>
        </div>
      </aside>
    </div>
  );
}
