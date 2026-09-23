import { isRouteErrorResponse, useRouteError } from "react-router";
import { ButtonLink } from "./Button";
import styles from "./ErrorPage.module.css";

/** 라우터 errorElement. 404 와 예기치 못한 오류를 모두 받습니다. */
export function ErrorPage() {
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : 500;
  const title = status === 404 ? "페이지를 찾을 수 없습니다" : "문제가 발생했습니다";
  const message =
    status === 404
      ? "주소가 바뀌었거나 삭제된 페이지일 수 있습니다."
      : "잠시 후 다시 시도해 주세요. 문제가 계속되면 문의해 주세요.";

  return (
    <div className={styles.wrap}>
      <span className={styles.code}>{status}</span>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <ButtonLink to="/" variant="secondary">
        홈으로 돌아가기
      </ButtonLink>
    </div>
  );
}
