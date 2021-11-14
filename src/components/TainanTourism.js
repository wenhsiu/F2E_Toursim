import React, { useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../style/createTheme';
import MainPage from './MainPage';
import { AppContext } from '../context/AppContext';
import { TABS, PATH } from '../constants/general';
import Header from './Header';
import AboutPage from './AboutPage.js';
import MapPage from './MapPage';
import SightPage from './SightPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './DetailPage';
import { placeListLocation } from '../data/sightsLocation';
import { getSightInfo } from '../service/toursium';

const TainanToursim = () => {
  const [currentTab, setCurrentTab] = useState(TABS.MAIN);
  const [places, setPlaces] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await Promise.all(placeListLocation.map((location) => getSightInfo(location)));
        setPlaces(list);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={{ currentTab, setCurrentTab, places, setPlaces }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={PATH.MAIN} element={<MainPage />} />
            <Route path={PATH.ABOUT} element={<AboutPage />} />
            <Route path={PATH.MAP} element={<MapPage />} />
            <Route path={PATH.PLACE} element={<SightPage />} />
            <Route path={`${PATH.PLACE}/:id`} element={<DetailPage />} />
          </Routes>
          {/* <MainPage />
          <AboutPage />
          <MapPage />
          <SightPage /> */}
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default TainanToursim;
