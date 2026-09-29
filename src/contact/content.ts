/** 문의 페이지 문구. */
const ko = {
  eyebrow: "문의하기",
  title: "*더 나은 과학*을 함께 만들어 갑니다.",
  lead: "연구 협력, 시험 의뢰, 파트너십 등 무엇이든 문의해 주세요.",
  form: {
    name: "이름",
    email: "이메일",
    company: "회사명",
    message: "문의 내용",
    submit: "문의 보내기",
    submitting: "전송 중...",
    success: "문의가 접수되었습니다. 빠르게 회신드리겠습니다.",
    notConnected: (email: string) => `문의 접수 기능이 아직 연결되지 않았습니다. ${email} 로 연락해 주세요.`,
    failed: "문의 전송에 실패했습니다. 다시 시도해 주세요.",
    phone: "전화",
    address: "주소",
  },
};

const en: typeof ko = {
  eyebrow: "Contact",
  title: "Let's Build *Better Science* Together.",
  lead: "Reach out about research collaboration, study requests, partnerships, or anything else.",
  form: {
    name: "Name",
    email: "Email",
    company: "Company",
    message: "Message",
    submit: "Send Message",
    submitting: "Sending...",
    success: "Thank you. We have received your inquiry and will get back to you soon.",
    notConnected: (email: string) => `Online inquiries are not connected yet. Please email us at ${email}.`,
    failed: "Your message could not be sent. Please try again.",
    phone: "Phone",
    address: "Address",
  },
};

export const content = { ko, en };
