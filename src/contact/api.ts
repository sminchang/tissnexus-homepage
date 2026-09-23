import { fetchJson } from "../shared/api";
import type { ContactRequest } from "./types";

/** 문의 접수. 백엔드 엔드포인트가 정해지면 경로만 맞추면 됩니다. */
export function submitContact(payload: ContactRequest, signal?: AbortSignal): Promise<void> {
  return fetchJson<void>("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
    signal,
  });
}
