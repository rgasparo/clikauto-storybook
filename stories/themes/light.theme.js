import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    highlight: {
      main: '#E3007D',
    },

    primary: {
      main: '#10B1D7',
      light: '#F4FCFE',
      dark: '#0F7899',
      contrastText: '#ffffff',
    },

    secondary: {
      main: '#122549',
      light: '#283B5F',
      dark: '#091630',
      contrastText: '#ffffff',
    },

    error: {
      main: '#FF6262',
      light: '#FF8585',
      dark: '#DE5B5B',
    },

    warning: {
      main: '#EC7E0D',
      light: '#FFEEA6',
      dark: '#F2DA72',
    },

    info: {
      main: '#0D5ABE',
      light: '#5FA4FF',
      dark: '#0D5ABE',
    },

    success: {
      main: '#07AE91',
      light: '#09C7A6',
      dark: '#049A80',
    },

    text: {
      primary: '#122549',
      primaryDark: '#343434',
      primaryLight: '#1F2CAF',
      secondaryDark: '#484848',
      white: '#ffffff',
      grey200: '#ABABAB',
      grey300: '#666666',
      grey500: '#F7F9FB',
      grey800: '#828282',
      grey900: '#4F4F4F',
      black: '#000000',
      alert: '#DF2831',
      blue: '#135FC4',
      easySecondary: '#1F2358',
    },

    common: {
      black: '#1A1A1A',
      magenta: '#E3007D',
      blueDark: '#1D2932',
      blueLight: '#004CB0',
      purple: '#8C46ED',
      primaryEasy: '#202BB0',
      secondaryEasy: '#54DCF2',
    },

    background: {
      primary: '#FBFBFB',
      secondary: '#F2F7FE',
      third: '#D9E9FF',
      highlight: '#F0F0F0',
      white: '#FBFBFB',
      default: '#FFFFFF',
      blue: '#135FC4',
      tile: '#F9F9F9',
      grey: '#ECF0F1',
      grey200: '#D9E9FF',
      grey300: '#F0F0F0',
      grey400: '#F1F1F1',
      grey450: '#F2F2F2',
      grey500: '#F7F9FB',
      grey600: '#EFEFEF',
      grey700: '#D0D0D0',
      grey800: '#828282',
      border: '#E9E9E9',
      primaryEasy: '#202BB0',
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          border: '1px solid #F0F0F0',
        },
      },
    },
  },

  typography: {
    fontFamily: [
      'Poppins',
      'Poppins-fallback',
      '-apple-system',
      'BigShouldersDisplay',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ].join(','),
  },

  shadows: [
    'none',
    '0px -12px 41px -45px rgba(0,0,0,1)',
    '0px 6px 6px -3px rgb(0 0 0 / 1%), 0px 10px 14px 1px rgb(0 0 0 / -1%), 0px 4px 18px 3px rgb(0 0 0 / 6%)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  ],
});
