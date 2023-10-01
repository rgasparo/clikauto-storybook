import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themes } from '../stories/themes/index';
import stylesV2 from '../stories/themes/styles-v2'
import GlobalStyles from '@mui/material/GlobalStyles'

export const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals;

    // only recompute the theme if the themeKey changes
    const theme = useMemo(() => themes[themeKey] || themes['light'], [themeKey])
  
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Story/>
      <GlobalStyles styles={stylesV2} />
    </ThemeProvider>
    );
  };
