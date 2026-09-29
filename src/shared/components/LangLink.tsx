import { Link, NavLink, type LinkProps, type NavLinkProps } from "react-router";
import { localizePath, useLang } from "../i18n";

/** 콘텐츠의 "/assays/liver" 같은 경로에 현재 언어를 붙여 주는 Link. */
export function LangLink({ to, ...rest }: LinkProps & { to: string }) {
  return <Link to={localizePath(to, useLang())} {...rest} />;
}

export function LangNavLink({ to, ...rest }: NavLinkProps & { to: string }) {
  return <NavLink to={localizePath(to, useLang())} {...rest} />;
}
