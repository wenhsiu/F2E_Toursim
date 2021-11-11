import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import MapBackground from '../../assets/map_background.png';
import BigBackground from '../../assets/1440_background.png';
import { ReactComponent as SpotIcon } from '../../assets/map_spot_icon.svg';
import LagoonPic from '../../assets/lagoon.png';
import SaltFieldsPic from '../../assets/salt_fields.png';
import LuermenTemplePic from '../../assets/temple.png';
import SicaoRefugePic from '../../assets/refuge.png';
import SightInfoCard from './SightInfoCard';
import clsx from 'clsx';
import { getSightInfo } from '../../service/toursium';

const useStyles = makeStyles((theme) =>
  createStyles({
    outside: {
      backgroundImage: `url(${BigBackground})`,
      backgroundSize: '100% 100%',
    },
    container: {
      backgroundImage: `url(${MapBackground})`,
      backgroundSize: '100% 100%',
      height: 667,
      maxHeight: 667,
    },
    sightInfoCard: {
      margin: '16px 0',
      position: 'relative',
      right: 30,
    },
    tabTitle: {
      fontSize: 24,
      fontWeight: theme.typography.fontWeightMedium,
      margin: 72,
      position: 'absolute',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    unselected: {
      opacity: 0.65,
    },
    selected: {
      opacity: 1,
    },
    sight: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    icon: {
      position: 'relative',
    },
    text: {
      fontSize: 20,
      position: 'relative',
      fontWeight: theme.typography.fontWeightBold,
    },
    beimenLagoon: {
      left: 320,
      top: 12,
    },
    beimenLagoonIcon: {
      bottom: 70,
      left: 236,
    },
    beimenLagoonText: {
      bottom: 146,
      left: 310,
    },
    saltFields: {
      right: 72,
      top: 56,
    },
    saltFieldsIcon: {
      bottom: 80,
      left: 240,
    },
    saltFieldsText: {
      bottom: 120,
      left: 300,
    },
    luermenTempleIcon: {},
    luermenTemple: {},
    luermenTempleText: {
      left: 50,
    },
    sicaoRefuge: {
      left: 100,
      bottom: 40,
    },
    sicaoRefugeIcon: {
      left: 484,
      bottom: 60,
    },
    sicaoRefugeText: {
      bottom: 100,
      left: 556,
    },
  })
);

const SPOT = {
  LAGOON: 'beimenLagoon',
  SALT_FIELDS: 'saltFields',
  TEMPLE: 'luermenTemple',
  REFUGE: 'sicaoRefuge',
};

const location = {
  [SPOT.LAGOON]: { longitude: 120.10552978515625, latitude: 23.259729385375977 },
  [SPOT.SALT_FIELDS]: { longitude: 120.09017181396484, latitude: 23.193080902099617 },
  [SPOT.TEMPLE]: { longitude: 120.12751007080078, latitude: 23.06797981262207 },
  [SPOT.REFUGE]: { longitude: 120.137687683105475, latitude: 23.029539108276367 },
};

const MapPage = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(SPOT.LAGOON);
  const [sightsData, setSightsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lagoon = await getSightInfo(location[SPOT.LAGOON]);
        const saltFields = await getSightInfo(location[SPOT.SALT_FIELDS]);
        const temple = await getSightInfo(location[SPOT.TEMPLE]);
        const refuge = await getSightInfo(location[SPOT.REFUGE]);

        setSightsData({
          [SPOT.LAGOON]: lagoon,
          [SPOT.SALT_FIELDS]: saltFields,
          [SPOT.TEMPLE]: temple,
          [SPOT.REFUGE]: refuge,
        });
      } catch (err) {
        console.log('err', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.outside}>
      <Container fixed disableGutters>
        <Grid container className={classes.container}>
          <Grid item container xs>
            <Grid item>
              <Typography className={classes.tabTitle}>水的地圖</Typography>
            </Grid>
            <Grid
              item
              className={clsx(classes.sight, selected === SPOT.LAGOON ? classes.selected : classes.unselected)}
              onClick={() => setSelected(SPOT.LAGOON)}
            >
              <SpotIcon className={clsx(classes.icon, classes.beimenLagoonIcon)} />
              <img src={LagoonPic} className={clsx(classes.icon, classes.beimenLagoon)} />
              <Typography color="textPrimary" className={clsx(classes.text, classes.beimenLagoonText)}>
                北門潟湖
              </Typography>
            </Grid>
            <Grid
              item
              className={clsx(
                classes.sight,
                selected,
                selected === SPOT.SALT_FIELDS ? classes.selected : classes.unselected
              )}
              onClick={() => setSelected(SPOT.SALT_FIELDS)}
            >
              <SpotIcon className={clsx(classes.icon, classes.saltFieldsIcon)} />
              <img src={SaltFieldsPic} className={clsx(classes.icon, classes.saltFields)} />
              <Typography color="textPrimary" className={clsx(classes.text, classes.saltFieldsText)}>
                青鯤鯓扇形鹽田
              </Typography>
            </Grid>
            <Grid
              item
              className={clsx(classes.sight, selected === SPOT.TEMPLE ? classes.selected : classes.unselected)}
              onClick={() => setSelected(SPOT.TEMPLE)}
            >
              <SpotIcon className={clsx(classes.icon, classes.luermenTempleIcon)} />
              <img src={LuermenTemplePic} className={clsx(classes.icon, classes.luermenTemple)} />
              <Typography color="textPrimary" className={clsx(classes.text, classes.luermenTempleText)}>
                土城正統鹿耳門聖母廟
              </Typography>
            </Grid>
            <Grid
              item
              className={clsx(classes.sight, selected === SPOT.REFUGE ? classes.selected : classes.unselected)}
              onClick={() => setSelected(SPOT.REFUGE)}
            >
              <SpotIcon className={clsx(classes.icon, classes.sicaoRefugeIcon)} />
              <img src={SicaoRefugePic} className={clsx(classes.icon, classes.sicaoRefuge)} />
              <Typography color="textPrimary" className={clsx(classes.text, classes.sicaoRefugeText)}>
                四草野生動物保護區
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.sightInfoCard}>
            {sightsData && <SightInfoCard {...sightsData[selected]} />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MapPage;
