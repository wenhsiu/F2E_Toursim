import React, { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../style/createTheme';
import MainPage from './MainPage';
import { AppContext } from '../context/AppContext';
import { TABS } from '../constants/general';
import Header from './Header';
import AboutPage from './AboutPage.js';
import MapPage from './MapPage';
import SightPage from './SightPage';

const TainanToursim = () => {
  const [currentTab, setCurrentTab] = useState(TABS.MAIN);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={{ currentTab, setCurrentTab }}>
        <Container fixed disableGutters>
          <Header />
          <MainPage />
          <AboutPage />
          <MapPage />
          <SightPage />
        </Container>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default TainanToursim;
