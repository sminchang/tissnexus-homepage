import type { LucideIcon } from "lucide-react";

/** public/ 기준 이미지 경로와 대체 텍스트 */
export interface ImageRef {
  src: string;
  alt: string;
}

/** 아이콘 + 짧은 제목 + 설명. 특징 행, 혜택 목록, 단계 흐름이 공유합니다. */
export interface Feature {
  icon: LucideIcon;
  title: string;
  desc?: string;
}

export interface Action {
  label: string;
  to: string;
  variant?: "primary" | "secondary";
}
