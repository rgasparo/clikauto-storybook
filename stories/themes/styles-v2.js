import { darken } from '@mui/material/styles'

const styles = (theme) => ({
  '.wrapper-stycky-header': {
    position: 'relative',
    // zIndex: '2000',
  },
  '.card-gray-border': {
    border: `1px solid ${theme.palette.background.border}`,
    padding: theme.spacing(2),
    borderRadius: '4px',
  },
  '.bg-grey': {
    backgroundColor: '#ECF0F1',
    '#root-container': {
      minHeight: '100vh', // ' 'calc(100vh - 64px)',
      position: 'relative',
      '#main-content-container': {
        minHeight: '85vh',
        paddingBottom: 151,
        paddingX: 2,
        [theme.breakpoints.down('sm')]: {
          // paddingBottom: 200,
          paddingBottom: 0,
        },
        [theme.breakpoints.up('sm')]: {
          paddingBottom: 100,
        },
      },
      '#main-easy-content-container': {
        paddingBottom: 151,
        [theme.breakpoints.down('sm')]: {
          // paddingBottom: 200,
          paddingBottom: 0,
        },
        [theme.breakpoints.up('sm')]: {
          paddingBottom: 100,
        },
      },
    },
  },

  '.pb-0': {
    paddingBottom: '0 !important',
  },

  'html, body': {
    scrollBehavior: 'smooth',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.background.default,
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
  },

  '.PrivatePickersToolbar-dateTitleContainer': {
    display: 'none!important',
  },

  '#root-container > div > .sticky:first-of-type': {
    zIndex: '1001!important',
  },

  '.sticky': {
    zIndex: 1000,
  },

  '.swiper': {
    width: '100%',
    height: '100%',

    '& div[class^="swiper-button-"]': {
      color: theme.palette.common.white,
    },

    '& .swiper-pagination': {
      bottom: 0,
    },

    '& .swiper-pagination-bullet': {
      backgroundColor: `${theme.palette.background.grey400}!important`,
      opacity: '1!important',
    },

    '& .swiper-pagination-bullet-active': {
      backgroundColor: `${theme.palette.primary.main}!important`,
    },

    '& .swiper-button-next::after, .swiper-button-prev::after': {
      color: theme.palette.primary.main,
      background: '#EFEFEF',
      borderRadius: '50%',
      padding: '10px 13px',
      fontSize: '12px',
      fontWeight: 'bold',
      border: `4px solid ${theme.palette.text.white}!important`,
    },

    '& .swiper-button-disabled': {
      '& *': {
        opacity: '0!important',
      },
    },

    '& .swiper-slide': {
      borderRadius: 5,
      boxSizing: 'border-box',
    },

    '& .swiper-button-prev:focus, .swiper-button-next:focus': {
      WebkitTapHighlightColor: 'transparent',
      outline: 'none',
      touchAction: 'manipulation',
    },
  },

  '&.touched-appraisal': {
    backgroundColor: '#F2F7FE !important',
  },

  '.MuiTextField-root.Mui-style': {
    marginBottom: theme.spacing(1),
    '.MuiInputLabel-root': {
      color: `${theme.palette.text.grey300}!important`,
      fontSize: 14,
      fontWeight: '600!important',
    },
    '&.touched': {
      '.MuiInputLabel-root': {
        backgroundColor: '#fff',
        color: `${theme.palette.primary.main}!important`,
      },
      '.MuiOutlinedInput-notchedOutline': {
        border: '1px solid #10B1D7',
        boxShadow: 'none',
      },
    },

    '&.error': {
      '.MuiInputLabel-root': {
        marginTop: 4,
        backgroundColor: '#fff',
        paddingX: 1,
        color: `${theme.palette.error.main}!important`,
      },
      '.MuiOutlinedInput-notchedOutline': {
        border: '1px solid #10B1D7',
        boxShadow: 'none',
      },
      '.MuiFormHelperText-root': {
        color: `${theme.palette.error.main}!important`,
        fontWeight: 600,
        lineHeight: '14px',
      },

    },

    '&.MuiFormControl-root': {
      '&.MuiTextField-root.Mui-style .Mui-error': {
        color: `${theme.palette.warning.main}!important`,
        ' input': {
          color: `${theme.palette.text.primaryDark}`,
        },
      },
    },

    '&.error-empty': {
      '&.MuiTextField-root.Mui-style .Mui-error': {
        color: `${theme.palette.error.main}!important`,
        ' input': {
          color: `${theme.palette.text.primaryDark}`,
        },
      },
      '.MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.error.main}!important`,
        boxShadow: 'none',
      },
    },

    '& .MuiOutlinedInput-root': {
      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${theme.palette.warning.main}`,
          borderColor: `${theme.palette.warning.main}`,
        },
        '.MuiInputLabel-root': {
          color: `${theme.palette.warning.main}!important`,
        },
      },
      '&.Mui-error-red': {
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${theme.palette.error.main}!important`,
          borderColor: `${theme.palette.error.main}!important`,
        },
        /*         '.MuiInputLabel-root': {
          color: `${theme.palette.error.main}!important`,
        }, */
      },
    },
  },

  '.MuiTextField-root:not(.Mui-style)': {
    '& .MuiFormLabel-root': {
      position: 'relative',
      fontWeight: 'bold',
      fontSize: 14,
      color: `${theme.palette.text.primaryDark}`,
      transform: 'none!important',
      marginBottom: theme.spacing(1),
    },

    '& .MuiInputBase-root': {
      color: `${theme.palette.text.primaryDark}`,
      position: 'relative',
      backgroundColor: '#FFF',
      marginBottom: theme.spacing(1),
      // borderRadius: theme.shape.borderRadius * 2,
      boxShadow: '0 0 0 1pt #343434',

      '& .MuiInputAdornment-root': {
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '100%',
        paddingRight: theme.spacing(),
        marginRight: theme.spacing(),
      },

      '&.Mui-disabled': {
        backgroundColor: '#FFFFFF',
      },

      '&.Mui-focused': {
        backgroundColor: '#FFFFFF',
        boxShadow: `0 0 0 1pt ${theme.palette.primary.main}`,
      },

      '&.Mui-error': {
        // backgroundColor: `${theme.palette.warning.dark}!important`,
        backgroundColor: '#fff',
      },

      '&.touched': {
        backgroundColor: '#fff',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },

    '& .MuiFormHelperText-root': {
      margin: 0,
    },
  },

  '.MuiFormControl-root': {
    '& .MuiFormLabel-root': {
      fontWeight: 'bold',
      fontSize: 12,
      fontFamily: 'Poppins',
    },

    '& .Mui-focused': {
      color: 'unset!important',
    },
  },

  '.MuiTypography-root': {
    '&.MuiTypography-h1': {
      fontSize: '30px',
      lineHeight: '34px',
      letterSpacing: 'normal',
      fontWeight: '800',
      color: theme.palette.text.primary,
    },
    '&.MuiTypography-h2': {
      fontSize: '25px',
      lineHeight: '28px',
      fontWeight: '700',
      color: theme.palette.text.primaryDark,
    },
    '&.MuiTypography-h3': {
      fontSize: '22px',
      lineHeight: '22px',
      fontWeight: '600',
      color: theme.palette.text.primaryDark,
    },
    '&.MuiTypography-h4': {
      fontSize: '18px',
      lineHeight: '20px',
      fontWeight: '600',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-subtitle1': {
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: '600',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-subtitle2': {
      fontSize: '15px',
      lineHeight: '17px',
      fontWeight: '600',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-body1': {
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: '500',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-body2': {
      fontSize: '13px',
      lineHeight: '15px',
      fontWeight: '400',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-strong': {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '600',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-caption': {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '300',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-quote': {
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '300',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-button-text': {
      fontSize: '14px',
      lineHeight: 'normal',
      fontWeight: '600',
      color: `${theme.palette.text.primaryDark}`,
    },
    '&.MuiTypography-link-text': {
      fontSize: '12px',
      lineHeight: '12px',
      fontWeight: '500',
      color: `${theme.palette.text.primaryDark}`,
      textDecoration: 'underline',
      textDecorationColor: `${theme.palette.text.black}!important`,
      cursor: 'pointer',
    },
  },

  '#combo-year-listbox': {
    '& .MuiAutocomplete-option:last-child': {
      backgroundColor: `${theme.palette.common.primaryEasy}`,
      color: theme.palette.text.white,
      fontSize: '14px!important',
      fontWeight: 600,
    },
  },

  '.MuiButtonBase-root': {
    textTransform: 'none!important',
    fontSize: '14px',
    lineHeight: '21px!important',
    fontWeight: '600!important',
    justifyContent: 'center!important',
    ':not(.MuiButton-easy)': {
      borderRadius: `${theme.shape.borderRadius * 8}px!important`,
    },
    '&.MuiButton-root': {
      '&.MuiButton-root.slim': {
        padding: `${theme.spacing(1.5)}!important`,
        height: '100%',
        minWidth: '200px',
        width: '100%',
        borderRadius: `${theme.shape.borderRadius * 8}px!important`,
      },
      '&.MuiButton-containedPrimary': {
        borderRadius: `${theme.shape.borderRadius * 8}px!important`,
        padding: theme.spacing(1.5),
        height: '48px',
        backgroundColor: theme.palette.highlight.main,
        color: theme.palette.secondary.contrastText,
        '&:hover': {
          backgroundColor: darken(theme.palette.highlight.main, 0.1),
        },
      },
      '&.MuiButton-outlinedPrimary': {
        borderRadius: `${theme.shape.borderRadius * 8}px!important`,
        padding: theme.spacing(1.5),
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.main,
        color: theme.palette.text.primaryDark,
        '&:hover': {
          backgroundColor: '#B3E4EF',
        },
      },
      '&.MuiButton-special': {
        borderRadius: `${theme.shape.borderRadius * 8}px!important`,
        background: theme.palette.primary.main,
        color: theme.palette.text.white,
        '&:hover': {
          background: '#10B1D7',
          borderRadius: `${theme.shape.borderRadius * 8}px!important`,
        },
        '&.selected': {
        },
      },

      '&.MuiButton-secondary': {
        borderRadius: `${theme.shape.borderRadius * 8}px!important`,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.primary.main,
        color: theme.palette.text.primaryDark,
        backgroundColor: '#F4FCFE',
        fontSize: '14px',
        lineHeight: 'normal',
        fontWeight: '600',
        '&:hover': {
          background: theme.palette.background.default,
          borderRadius: `${theme.shape.borderRadius * 8}px!important`,
        },
        '&.selected': {
        },
      },
      '&.MuiButton-default': {
        padding: theme.spacing(1.5),
        borderRadius: `${theme.shape.borderRadius * 8}px`,
        color: theme.palette.text.primaryDark,
        fontSize: '14px',
        lineHeight: 'normal',
        fontWeight: '600',
        '&.selected': {
        },
      },
      '&.MuiButton-hightlight': {
        borderRadius: `${theme.shape.borderRadius * 8}px!important`,
        background: theme.palette.highlight.main,
        color: theme.palette.text.white,
      },
      '&.Mui-disabled': {
        fontWeight: 500,
        backgroundColor: `${theme.palette.background.grey700}!important`,
        border: 'none!important',
        color: `${theme.palette.text.white}!important`,
      },
      '&.MuiButton-easy': {
        background: '#202BB0',
        height: '56px',
        color: theme.palette.text.white,
        '&:hover': {
          background: '#10B1D7',
          transform: 'scale(1.02)',
        },
      },
    },
  },

  '.MuiTabs-root': {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(6),
    padding: `${theme.spacing(0.5)}!important`,
    justifyContent: 'center',
    maxWidth: { xs: 'auto', md: '100%!important' },
    width: { xs: 'auto', md: '100%!important' },
    '& .MuiTab-root': {
      borderRadius: theme.spacing(4),
      textTransform: 'none',
      margin: theme.spacing(0, 1),
      color: theme.palette.primary.main,
      height: 40,
      minHeight: 'unset',
      fontSize: 14,
      fontWeight: 600,
    },
    '& .Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: `${theme.palette.secondary.contrastText}!important`,
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiTab-root': {
        minHeight: 'unset',
        fontSize: 14,
      },
    },
    '& .MuiTabs-scrollButtons': {
    },
    '&.easy': {
      backgroundColor: '#fff',
      border: '1px solid #F1F1F1!important',
      borderRadius: '8px!important',
      '& .MuiTab-root': {
        borderRadius: '4px!important',
        color: '#343434!important',
        height: '56px!important',
        margin: '0!important',
        padding: '0!important',
      },
      '& .Mui-selected': {
        backgroundColor: '#202BB0',
        color: `${theme.palette.secondary.contrastText}!important`,
      },
    },
  },

  '.MuiRating-root': {
    '& .MuiRating-iconFilled': {
      color: '#FFE81D',
    },

    '& .MuiRating-iconEmpty': {
      color: '#989898',
    },
  },

  '.TilePicker-root': {
    '& .MuiTypography-h2': {
      color: theme.palette.common.black,
    },
  },

  '.Tile-root': {
    backgroundColor: theme.palette.background.tile,
    '&.button-secondary': {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.main,
      padding: theme.spacing(0.5),

      '& .MuiTypography-quote': {
        color: theme.palette.text.primaryDark,
        lineHeight: '21px',
        fontWeight: '600',
        padding: theme.spacing(0.5, 1),
        fontSize: '14px',
      },
      '&:hover': {
        backgroundColor: '#B3E4EF',
      },
    },
    '&.Tile-selected': {
      backgroundColor: theme.palette.primary.main,
    },
    '&.dense': {
      '& .Tile-text': {
        padding: theme.spacing(0.5, 1),
        fontSize: 11,
      },
      '& .Tile-icon': {
        padding: theme.spacing(0.5, 0, 0.5, 1),
        fontSize: 11,
      },
    },
  },
  '.Version-card-root': {
    backgroundColor: theme.palette.background.tile,
    '&:hover': {
      backgroundColor: theme.palette.background.highlight,
    },
  },
  '.MuiMenuItem-root': {
    textTransform: 'capitalize',
  },

  '& .MuiModal-root ': {
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
  },
  '.center-content': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.MuiAutocomplete-listbox': {
    '& .MuiAutocomplete-option:not(:last-of-type)': {
      borderBottom: '1px solid #ececec',
    },
  },
  '.MuiAccordionSummary-root': {
    minHeight: theme.spacing(6),
    '&.Mui-expanded': {
      minHeight: `${theme.spacing(6)}!important`,
    },
  },
  '& .MuiAccordionDetails-root .p0': {
    padding: 0,
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: '0px!important',
  },
  '& .MuiAccordion-root.withBorder': {
    border: '1px solid #E9E9E9',
    boxShadow: 'none!important',
  },

  '.Snackbar-root': {
    zIndex: '1200!important',
  },

})

export default styles
