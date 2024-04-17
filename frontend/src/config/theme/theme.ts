const theme = {
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1280px',
    xl: '1600px'
  },
  palette: {
    primary: {
      main: '#4B6BFB',
      light: '#6D8EFF'
    },
    secondary: {
      main: '#181A2A'
    },
    white: '#FFFFFF',
    grey: {
      darkGrey: '#434242',
      borderGrey: '#707070',
      lightGrey: '#EBECEC',
      300: '#696A75'
    },
    green: '#008A64',
    error: '#FC2020',
    boxShadow: '0px 2px 6px rgba(34, 35, 58, 0.5)'
  },
  gap: {
    small: '8px',
    medium: '20px',
    large: '40px'
  },
  borderRadius: {
    default: '6px',
    small: '4px'
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeight: {
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700,
      superBold: 800
    },
    fontSize: {
      default: '16px',
      small: '12px',
      normal: '18px',
      medium: '20px',
      large: '24px',
      xl: '32px',
      '2xl': '60px'
    },
    fontStyle: {
      default: 'normal',
      inherit: 'inherit'
    },
    lineHeight: {
      default: '24px',
      sm: '16px',
      md: '24px',
      lg: '28px',
      xl: '36px',
      '2xl': '70px'
    }
  }
};

export type ITheme = typeof theme;

export default theme;
