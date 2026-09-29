import { Fragment } from "react";
import styles from "./Rich.module.css";

/**
 * 콘텐츠 문자열의 최소 마크업을 렌더합니다.
 * `*강조*` → 블루·틸 그라데이션 강조, 줄바꿈(\n) → 줄바꿈.
 * 문구를 content.ts 데이터로 두면서 시안의 두 톤 헤드라인을 표현하기 위한 것입니다.
 */
export function Rich({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.split(/(\*[^*]+\*)/).map((part, j) =>
            part.startsWith("*") && part.endsWith("*") ? (
              <span key={j} className={styles.accent}>
                {part.slice(1, -1)}
              </span>
            ) : (
              part
            ),
          )}
        </Fragment>
      ))}
    </>
  );
}
