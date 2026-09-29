import { useEffect, useRef, useState } from "react";
import { isApiConfigured } from "../../shared/api";
import { company } from "../../shared/config";
import { useLang } from "../../shared/i18n";
import { content } from "../content";
import { submitContact } from "../api";
import type { ContactRequest, SubmitState } from "../types";

const EMPTY: ContactRequest = { name: "", email: "", company: "", message: "" };

export function useContactForm() {
  const [values, setValues] = useState<ContactRequest>(EMPTY);
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const controllerRef = useRef<AbortController | null>(null);
  const lang = useLang();
  const t = content[lang].form;

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
        message: t.notConnected(company[lang].contact.email),
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
      // ApiError 의 메시지는 개발용(한국어·상태코드)이라 화면에는 언어별 안내만 보여 줍니다.
      console.error(error);
      setState({ status: "error", message: t.failed });
    }
  }

  return { values, state, setField, submit };
}
