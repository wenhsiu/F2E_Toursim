import React, { useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../style/createTheme';
import { AppContext } from '../context/AppContext';
import { TABS } from '../constants/general';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './DetailPage';
import { placeListLocation } from '../data/sightsLocation';
import { getSightInfo } from '../service/toursium';
import MainPage from './MainPage';

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

  useEffect(() => {
    const violation = document.getElementById(currentTab);
    if (!violation) return;
    window.scrollTo({
      top: violation.offsetTop,
      behavior: 'smooth',
    });
  }, [currentTab]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={{ currentTab, setCurrentTab, places, setPlaces }}>
        <BrowserRouter basename={'F2E_Toursim'}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path={`${TABS.PLACE}/:id`} element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default TainanToursim;
