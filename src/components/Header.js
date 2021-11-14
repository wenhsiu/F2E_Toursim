import { AppBar, Grid, Tab, Tabs } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React, { useContext } from 'react';
import { TABS } from '../constants/general';
import { AppContext } from '../context/AppContext';
import logo from '../assets/logo.png';
import mainBackground from '../assets/main_background.png';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme) =>
  createStyles({
    menuBar: {
      background: `url(${mainBackground})`,
      backgroundSize: 'cover',
    },
    logo: {
      '& :hover': {
        cursor: 'pointer',
      },
    },
    tabs: {
      color: theme.colors.white,
      margin: theme.spacing(1.25, 0),
      '& .MuiTabs-indicator': {
        display: 'none',
      },
      '& .Mui-selected': {
        color: theme.colors.darkNavy,
      },
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const { currentTab, setCurrentTab } = useContext(AppContext);
  const navigate = useNavigate();

  const handleTabChange = (e, value) => {
    setCurrentTab(value);
  };

  return (
    <AppBar position="static" className={classes.menuBar}>
      <Grid container justifyContent="space-between">
        <Grid item className={classes.logo} onClick={() => navigate('/')}>
          <img src={logo} alt="台南，好水" />
        </Grid>
        <Grid item>
          <Tabs className={classes.tabs} value={currentTab} onChange={handleTabChange} aria-label="nav tabs">
            <Tab
              component="a"
              onClick={() => navigate(TABS.ABOUT)} /* herf={`#${TABS.ABOUT}`} */
              value={TABS.ABOUT}
              label="關於"
            />
            <Tab
              component="a"
              onClick={() => navigate(TABS.MAP)} /* herf={`#${TABS.MAP}`} */
              value={TABS.MAP}
              label="水的地圖"
            />
            <Tab
              component="a"
              onClick={() => navigate(TABS.PLACE)} /* herf={`#${TABS.PLACE}`} */
              value={TABS.PLACE}
              label="水的景點"
            />
          </Tabs>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
