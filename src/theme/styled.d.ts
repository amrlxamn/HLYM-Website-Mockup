/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import type { SiteTheme } from "./site-theme";

declare module "styled-components" {
  export interface DefaultTheme extends SiteTheme {}
}
