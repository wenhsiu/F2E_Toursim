import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../style/createTheme';
import MainPage from './MainPage';
import { AppContext } from '../context/AppContext';
import { TABS } from '../constants/general';
import Header from './Header';
import AboutPage from './AboutPage.js';

const TainanToursim = () => {
  const [currentTab, setCurrentTab] = useState(TABS.MAIN);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={{ currentTab, setCurrentTab }}>
        <Header />
        <MainPage />
        <AboutPage />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default TainanToursim;
