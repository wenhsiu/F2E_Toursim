import { CssBaseline, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { theme } from '../style/createTheme';
import MainPage from './MainPage';

const TainanToursim = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
      <Typography variant="h1">中文</Typography>
    </ThemeProvider>
  );
};

export default TainanToursim;
