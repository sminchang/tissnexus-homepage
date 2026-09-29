import { isRouteErrorResponse, useRouteError } from "react-router";
import { useLang } from "../i18n";
import { ButtonLink } from "./Button";
import styles from "./ErrorPage.module.css";

const text = {
  ko: {
    notFound: "페이지를 찾을 수 없습니다",
    notFoundMessage: "주소가 바뀌었거나 삭제된 페이지일 수 있습니다.",
    error: "문제가 발생했습니다",
    errorMessage: "잠시 후 다시 시도해 주세요. 문제가 계속되면 문의해 주세요.",
    home: "홈으로 돌아가기",
  },
  en: {
    notFound: "Page not found",
    notFoundMessage: "The page may have moved or no longer exists.",
    error: "Something went wrong",
    errorMessage: "Please try again in a moment. If the problem continues, contact us.",
    home: "Back to home",
  },
};

/**
 * 라우터 errorElement 이자 없는 경로("*")용 페이지.
 * 라우트 오류 없이 렌더되면 404 로 봅니다.
 */
export function ErrorPage() {
  const error = useRouteError();
  const t = text[useLang()];

  const status = error == null ? 404 : isRouteErrorResponse(error) ? error.status : 500;
  const notFound = status === 404;

  return (
    <div className={styles.wrap}>
      <span className={styles.code}>{status}</span>
      <h1 className={styles.title}>{notFound ? t.notFound : t.error}</h1>
      <p className={styles.message}>{notFound ? t.notFoundMessage : t.errorMessage}</p>
      <ButtonLink to="/" variant="secondary">
        {t.home}
      </ButtonLink>
    </div>
  );
}
