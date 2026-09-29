import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

const PUBLIC_DIR = "public";
const MIME: Record<string, string> = { webp: "image/webp", png: "image/png", jpg: "image/jpeg", svg: "image/svg+xml" };

function dataUri(file: string) {
  const ext = file.split(".").pop()!.toLowerCase();
  return `data:${MIME[ext]};base64,${readFileSync(file).toString("base64")}`;
}

function listFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? listFiles(path) : [path];
  });
}

/**
 * `virtual:image-map` — 단일 파일 빌드에서만 public/images 를 "/images/..." → data URI 표로 내보냅니다.
 * 일반 빌드에서는 빈 표라 아무 영향이 없습니다. (src/shared/singleFileImages.ts 참고)
 */
function imageMap(single: boolean): Plugin {
  const id = "virtual:image-map";
  return {
    name: "image-map",
    resolveId: (source) => (source === id ? "\0" + id : undefined),
    load(source) {
      if (source !== "\0" + id) return;
      if (!single) return "export default {};";
      const map = Object.fromEntries(
        listFiles(join(PUBLIC_DIR, "images")).map((f) => ["/" + relative(PUBLIC_DIR, f).replaceAll("\\", "/"), dataUri(f)]),
      );
      return `export default ${JSON.stringify(map)};`;
    },
    transformIndexHtml: {
      // singlefile 플러그인이 경로를 바꾸기 전에 파비콘을 data URI 로 넣습니다.
      order: "pre",
      handler(html) {
        if (!single) return html;
        return html.replace('href="/favicon.png"', `href="${dataUri(join(PUBLIC_DIR, "favicon.png"))}"`);
      },
    },
  };
}

// `npm run build:single` (mode=single): 더블클릭으로 열리는 HTML 한 파일로 굽습니다.
export default defineConfig(({ mode }) => {
  const single = mode === "single";
  return {
    plugins: [react(), imageMap(single), ...(single ? [viteSingleFile()] : [])],
    server: { port: 5173 },
    build: single ? { outDir: "dist-single", copyPublicDir: false } : undefined,
  };
});
