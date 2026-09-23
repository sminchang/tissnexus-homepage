import type { FormEvent } from "react";
import { Button } from "../../shared/components";
import { company } from "../../shared/config";
import { useContactForm } from "../hooks/useContactForm";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const { values, state, setField, submit } = useContactForm();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit();
  }

  return (
    <div className={styles.layout}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            이름
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
            이메일
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
            회사명
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
            문의 내용
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
            {state.status === "submitting" ? "전송 중..." : "문의 보내기"}
          </Button>
        </div>

        {state.status === "success" && (
          <p className={styles.status} data-tone="success" role="status">
            문의가 접수되었습니다. 빠르게 회신드리겠습니다.
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
          <div className={styles.infoLabel}>이메일</div>
          <div>{company.contact.email}</div>
        </div>
        <div>
          <div className={styles.infoLabel}>전화</div>
          <div>{company.contact.phone}</div>
        </div>
        <div>
          <div className={styles.infoLabel}>주소</div>
          <div>{company.contact.address}</div>
        </div>
      </aside>
    </div>
  );
}
