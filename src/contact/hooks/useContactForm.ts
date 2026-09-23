import { useEffect, useRef, useState } from "react";
import { ApiError, isApiConfigured } from "../../shared/api";
import { company } from "../../shared/config";
import { submitContact } from "../api";
import type { ContactRequest, SubmitState } from "../types";

const EMPTY: ContactRequest = { name: "", email: "", company: "", message: "" };

export function useContactForm() {
  const [values, setValues] = useState<ContactRequest>(EMPTY);
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const controllerRef = useRef<AbortController | null>(null);

  // 언마운트 시 진행 중인 요청을 취소합니다.
  useEffect(() => () => controllerRef.current?.abort(), []);

  function setField(field: keyof ContactRequest, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function submit() {
    if (!isApiConfigured) {
      // 접수되지 않은 문의를 접수된 것처럼 보여주지 않습니다.
      setState({
        status: "error",
        message: `문의 접수 기능이 아직 연결되지 않았습니다. ${company.contact.email} 로 연락해 주세요.`,
      });
      return;
    }

    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setState({ status: "submitting" });
    try {
      await submitContact(values, controller.signal);
      setValues(EMPTY);
      setState({ status: "success" });
    } catch (error) {
      if (controller.signal.aborted) return;
      const message =
        error instanceof ApiError ? error.message : "문의 전송에 실패했습니다. 다시 시도해 주세요.";
      setState({ status: "error", message });
    }
  }

  return { values, state, setField, submit };
}
