import type { Preview } from '@storybook/react';

import {
  ThemeProvider,
  CssBaseline,
  css,
  GlobalStyles,
  useTheme,
} from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { themes } from '../src/themes';

// Load Roboto fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@mui/icons-material';

const StorybookDocsOverride = (theme) => css`
  .docs-story {
    background-color: ${theme.palette.backgroundColor.default};
  }
`;

const CustomCssBaseline = () => {
  const theme = useTheme();
  const overrides = StorybookDocsOverride(theme);
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={overrides} />
    </>
  );
};

export const decorators = [
  withThemeFromJSXProvider({
    Provider: ThemeProvider,
    GlobalStyles: CustomCssBaseline,
    themes,
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
    },
  },
};

export default preview;
