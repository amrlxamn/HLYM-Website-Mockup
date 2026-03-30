import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/global-style";
import { siteTheme } from "./site-theme";

type AppThemeProviderProps = {
  children: ReactNode;
};

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    <ThemeProvider theme={siteTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
