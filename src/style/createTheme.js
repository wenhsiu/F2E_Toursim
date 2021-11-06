import { createTheme } from '@material-ui/core';
import GenJyuuGothicRef from './fonts/GenJyuuGothic-Normal.ttf';

const colors = {
  darkNavy: '#211E55',
  softBlue: '#4778A5',
  deepGreen: '#306654',
  grayishYellow: '#E0DCC2',
  white: '#FFFFFF',
};

const GenJyuuGothic = {
  fontFamily: 'GenJyuuGothic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `local('GenJyuuGothic'), local('GenJyuuGothic-Normal'), url(${GenJyuuGothicRef})`,
};

export const theme = createTheme({
  colors,
  shape: {
    borderRadius: 40,
  },
  palette: {
    primary: {
      main: colors.darkNavy,
      hyperlinkColor: colors.darkNavy,
    },
    secondary: {
      main: colors.deepGreen,
    },
  },
  typography: {
    fontFamily: 'GenJyuuGothic',
    fontSize: 16,
    allVariants: {
      color: colors.darkNavy,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [GenJyuuGothic],
      },
    },
  },
});
