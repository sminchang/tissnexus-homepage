import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { LangLink } from "./LangLink";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", children, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}

interface ButtonLinkProps {
  to: string;
  variant?: Variant;
  children: ReactNode;
}

/** 버튼 모양의 라우터 링크. 시안처럼 오른쪽에 화살표가 붙습니다. "/..." 경로에는 현재 언어가 붙습니다. */
export function ButtonLink({ to, variant = "primary", children }: ButtonLinkProps) {
  return (
    <LangLink to={to} className={`${styles.button} ${styles[variant]}`}>
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </LangLink>
  );
}
