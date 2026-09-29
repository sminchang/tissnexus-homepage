/**
 * 단일 HTML 파일 빌드 전용. 콘텐츠의 "/images/..." 경로는 파일로 열면(file://) 찾을 수 없으므로,
 * <img> 에 src 가 들어가는 순간 빌드에 넣어 둔 data URI 로 바꿉니다.
 * React 는 src 를 속성 대입(img.src = …)으로 넣으므로 그 setter 를 가로챕니다.
 * 일반 빌드에서는 표가 비어 있어 아무것도 하지 않습니다.
 */
export function installImageMap(map: Record<string, string>) {
  if (Object.keys(map).length === 0) return;
  const resolve = (value: string) => map[value] ?? value;

  const desc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src")!;
  Object.defineProperty(HTMLImageElement.prototype, "src", {
    ...desc,
    set(value: string) {
      desc.set!.call(this, resolve(value));
    },
  });

  const setAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name: string, value: string) {
    return setAttribute.call(this, name, name === "src" && this instanceof HTMLImageElement ? resolve(value) : value);
  };
}
