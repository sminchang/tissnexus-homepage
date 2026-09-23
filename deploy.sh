#!/usr/bin/env bash
# 서버 재배포: 최신 코드를 받아 빌드하고 nginx 가 서빙하는 경로를 교체한다.
# 사용법: ./deploy.sh  (최초 서버 세팅은 README 의 "배포" 참고)

# git pull 이 실행 중인 이 파일을 바꿔도 안전하도록 전체를 먼저 읽고 실행한다.
{
set -euo pipefail

WEB_ROOT=/var/www/tissnexus

cd "$(dirname "$0")"

git pull --ff-only
npm ci
npm run build

sudo mkdir -p "$WEB_ROOT"
sudo find "$WEB_ROOT" -mindepth 1 -delete
sudo cp -r dist/. "$WEB_ROOT"/

echo "배포 완료: $WEB_ROOT"
exit
}
