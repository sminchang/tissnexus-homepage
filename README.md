# TissNexus Homepage

React 19 + Vite + TypeScript 회사 홈페이지. 페이지는 Home / 회사소개 / 서비스 / 문의 4개입니다.

## 실행

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # 타입 검사 (build 는 타입을 보지 않습니다)
npm run build      # dist/ 생성
```

## 회사 정보 채우기

내용은 전부 코드가 아니라 데이터 파일에 있습니다. 아래 5개 파일의 `TODO` 만 채우면 화면이 완성됩니다.

| 파일 | 채울 내용 |
|------|-----------|
| `src/shared/config/company.ts` | 사명·태그라인·헤드라인·연락처·사업자번호 (헤더/푸터/문의에 공통 반영) |
| `src/home/content.ts` | 홈 강점 3가지, 숫자 지표 |
| `src/about/content.ts` | 미션, 회사 스토리, 핵심가치, 연혁 |
| `src/services/content.ts` | 서비스 목록, 진행 단계 |
| `src/shared/styles/tokens.css` | 브랜드 컬러 (`--color-accent` 계열) |

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
├── shared/        # 공용 커널 — UI 컴포넌트, api 래퍼, 회사 정보, 토큰
├── home/          # feature 단위. 각자 components/, content.ts, pages.tsx, index.tsx
├── about/
├── services/
├── contact/       # api.ts + hooks/ 포함
└── App.tsx        # 각 feature 의 라우트를 모아 레이아웃 아래에 배치
```

feature 끼리는 직접 import 하지 않습니다. 공유가 필요하면 `shared/` 로 올립니다.
