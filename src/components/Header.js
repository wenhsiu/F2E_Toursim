import { AppBar, Grid, Tab, Tabs } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React, { useContext } from 'react';
import { TABS } from '../constants/general';
import { AppContext } from '../context/AppContext';
import logo from '../assets/logo.png';
import mainPageBackground from '../assets/mainPageBackground.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    menuBar: {
      background: `url(${mainPageBackground})`,
      backgroundSize: 'cover',
    },
    tabs: {
      color: theme.colors.white,
      margin: theme.spacing(1.25, 0),
      '& .MuiTabs-indicator': {
        display: 'none',
      },
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const { currentTab, setCurrentTab } = useContext(AppContext);

  const handleTabChange = (e, value) => {
    setCurrentTab(value);
  };

  return (
    <AppBar position="fixed" className={classes.menuBar}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <img src={logo} alt="台南，好水" />
        </Grid>
        <Grid item>
          <Tabs className={classes.tabs} value={currentTab} onChange={handleTabChange} aria-label="nav tabs example">
            <Tab
              value={TABS.ABOUT}
              onClick={(event) => {
                event.preventDefault();
                console.log('關於');
              }}
              label="關於"
            />
            <Tab
              value={TABS.MAP}
              onClick={(event) => {
                event.preventDefault();
                console.log('水的地圖');
              }}
              label="水的地圖"
            />
            <Tab
              value={TABS.PLACE}
              onClick={(event) => {
                event.preventDefault();
                console.log('水的景點');
              }}
              label="水的景點"
            />
          </Tabs>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
