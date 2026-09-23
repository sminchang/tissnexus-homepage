/**
 * 공용 HTTP 래퍼. 각 feature 의 api.ts 는 이 함수만 사용합니다.
 * VITE_API_BASE_URL 이 비어 있으면 백엔드가 아직 없는 상태로 보고 호출을 막습니다.
 */

const baseUrl = import.meta.env.VITE_API_BASE_URL ?? "";

export const isApiConfigured = baseUrl !== "";

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  if (!isApiConfigured) {
    throw new ApiError("API 주소가 설정되지 않았습니다. .env 의 VITE_API_BASE_URL 을 확인하세요.", 0);
  }

  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new ApiError(`요청이 실패했습니다 (${response.status})`, response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
