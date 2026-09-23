export interface ContactRequest {
  name: string;
  email: string;
  company: string;
  message: string;
}

export type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };
