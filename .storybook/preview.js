import { withThemesProvider } from "themeprovider-storybook";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/icomoon-font.prod.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
      viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [withThemesProvider([
  {
    colors: {
      white: "#ffffff",
      black: "#000",
      neutral: "#0E1729",
      baseColor: "#f4f4f4",
      primaryColorScale: {
        p1: "#efeeff",
        p2: "#4c42f6",
        p3: "#5337ff",
        p4: "#0c02c1",
        p5: "#A59BFD",
      },
      secondary:{
        main: "#8A43F5",
        s2:"#9e64f8",
        s3:"#b588f9",
      },
      greenScale: {
        g1: "#dcffea",
        g2: "#00ea96",
        g3: "#0dc382",
        g4: "#02b47f",
        g5: "#129556",
        g6: "#25D366",
        g7:"#01825C",
      },
      redScale: {
        r1: "#ffe4e4",
        r2: "#ff5b24",
        r3: "#e34c1a",
        r4: "#ffb237",
        r5: "#f93c00"
      },
      grayScale: {
        gr: "#878788",
        gr1: "#fafafa",
        gr2: "#666666",
        gr3: "#888888",
        gr4: "#adadad",
        gr5: "#d2d2d2",
        gr6: "#e4e9f2",
        gr7: "#dddddd",
        gr8: "#E5E5E5",
        gr9: "#BABABA",
        gr10: "#DDE0F5",
        gr11: "#2E5679",
        gr12: "#646464",
        gr13: "#878788",
        gr14: "#0C1220",
      },
      blueScale: {
        b1: "#0c7df2",
        b2: "#DBD9FD",
        b6: "#8942f6",
        b7: "#0052F1",
        b8: "#4B44F2",
        b9: "#8942F6",
        b10: "#DDE0F5",
        b11: "#16233D",
        b12: "#362FAF"
      },
      purpleScale: {
        p1: "#7879F1",
        p2: "#6F1DF4",
        p3:"#8173fc",
      },
      whatsScale: {
        w1: "#2adb26",
      },
      boxShadow: {
        bs1: "#b5b5b5",
      },
    }
  }
], { disableThemePreview: true })];