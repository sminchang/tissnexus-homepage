# TissNexus Homepage

React 19 + Vite + TypeScript 회사 홈페이지. 사이트맵은 Company / Platform / Assays / Partnership / News / Contact 입니다.

## 실행

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # 타입 검사 (build 는 타입을 보지 않습니다)
npm run build      # dist/ 생성 (서버 배포용)
npm run build:single  # dist-single/tissnexus-homepage.html — 파일 하나로 공유용
```

`build:single` 은 이미지까지 모두 넣은 HTML 한 파일(약 2.5MB)을 만듭니다. 더블클릭으로 열리고, 파일로 열기 때문에
주소는 `tissnexus-homepage.html#/ko/assays/liver` 처럼 `#` 뒤에 붙습니다. 서버 배포에는 쓰지 않습니다.

## 콘텐츠 수정

디자인은 `docs/홈페이지.pptx` 시안(이미지로 된 슬라이드)을 HTML/CSS 로 옮긴 것입니다.
문구는 코드가 아니라 각 페이지의 `content.ts` 에 있으므로 문구만 바꿀 때는 그 파일만 고치면 됩니다.

| 파일 | 내용 |
|------|------|
| `src/shared/config/company.ts` | 법인명·연락처·사업자번호(`TODO`), 전역 메뉴(사이트맵). 언어별로 나뉘어 있습니다 |
| `src/**/content.ts` | 페이지별 문구. `ko` / `en` 두 벌이 있고, 제목의 `*강조*` 는 블루·틸 그라데이션, `\n` 은 줄바꿈 |
| `src/shared/styles/tokens.css` | 색상·간격·폰트 토큰 |
| `public/images/` | 이미지. 현재는 시안에서 잘라낸 **임시 이미지**라 해상도가 낮고 일부에 시안 글자가 남아 있습니다 |

### 다국어 (KO / EN)

- 모든 주소에 언어가 붙습니다: `/ko/platform/humimic`, `/en/platform/humimic`.
- `/` 로 들어오면 저장된 선택 → 브라우저 언어 순으로 `/ko` 또는 `/en` 으로 보냅니다. 언어가 빠진 옛 주소도 언어를 붙여 보냅니다.
- `content.ts` 는 `const en: typeof ko` 로 두 언어의 구조가 같아야 타입 검사를 통과합니다. 한쪽에만 항목을 추가하면 `npm run typecheck` 가 알려 줍니다.
- 콘텐츠 안의 링크는 언어 없이 `"/contact"` 처럼 적습니다. 화면에 그릴 때 현재 언어가 붙습니다.

### 풀페이지 스크롤

데스크톱(901px 이상)에서는 각 섹션이 한 화면을 차지하고 휠·키보드 한 번에 한 섹션씩 넘어갑니다
(`src/shared/hooks/useFullPageWheel.ts`). 섹션이 화면보다 길면 그 안을 스크롤한 뒤 넘어가므로,
문구를 늘릴 때는 1440×900 에서 섹션이 한 화면(824px)을 넘지 않는지 확인하세요. 모바일은 일반 스크롤입니다.

## 문의 폼

`.env` 에 `VITE_API_BASE_URL` 을 넣으면 `POST {BASE}/contact` 로 전송합니다.
설정 전에는 전송을 막고 이메일로 안내하는 메시지를 보여줍니다.

## 배포

서버에서 nginx 가 `/var/www/tissnexus` 를 80번 포트로 서빙합니다.

### 재배포

```bash
cd ~/projects/tissnexus-homepage && ./deploy.sh
```

`git pull` → `npm ci` → `npm run build` → `/var/www/tissnexus` 교체까지 한 번에 합니다.
빌드 시 서버의 `.env` 가 반영되므로 문의 폼 주소를 바꿨다면 재배포해야 합니다.

### 최초 서버 세팅 (한 번만)

Node 는 nvm 으로 사용자 계정에 설치합니다.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install 20
git clone https://github.com/sminchang/tissnexus-homepage.git ~/projects/tissnexus-homepage
```

nginx 설정 (`try_files` 는 `/about` 등을 새로고침해도 404 가 나지 않게 합니다):

```bash
sudo apt update && sudo apt install -y nginx
sudo tee /etc/nginx/sites-available/tissnexus > /dev/null <<'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    root /var/www/tissnexus;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/tissnexus /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

이후 `./deploy.sh` 를 실행하면 사이트가 올라갑니다.

## 구조

```
src/
├── shared/        # 공용 커널 — 섹션 컴포넌트, 헤더·푸터, i18n, 설정, 토큰
├── home/          # Company Overview (홈)
├── company/       # CEO, Vision & Mission
├── platform/      # HUMIMIC® Platform, MPS Technology, Workflow
├── assays/        # Liver, Bone Marrow, Lung, Multi-organ, Custom Assay
├── partnership/   # CRO Service, Co-development (시안 없음 — 준비 중 페이지)
├── news/          # 시안 없음 — 준비 중 페이지
├── contact/       # 문의 폼 (api.ts + hooks/)
└── App.tsx        # 각 feature 의 라우트를 모아 레이아웃 아래에 배치
```

feature 끼리는 직접 import 하지 않습니다. 공유가 필요하면 `shared/` 로 올립니다.
