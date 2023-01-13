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