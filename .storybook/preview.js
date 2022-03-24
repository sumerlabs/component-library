import { withThemesProvider } from "themeprovider-storybook";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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
      blackScale: {
        b1: '#000',
      }
    }
  }
], { disableThemePreview: true })];