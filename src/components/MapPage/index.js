import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import MapBackground from '../../assets/map_background.png';
import { ReactComponent as SpotIcon } from '../../assets/map_spot_icon.svg';
import LagoonPic from '../../assets/lagoon.png';
import SaltFieldsPic from '../../assets/salt_fields.png';
import LuermenTemplePic from '../../assets/temple.png';
import SicaoRefugePic from '../../assets/refuge.png';
import SightInfoCard from './SightInfoCard';
import clsx from 'clsx';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundImage: `url(${MapBackground})`,
      backgroundSize: '100% 100%',
      height: 667,
      maxHeight: 667,
    },
    sightInfoCard: {
      margin: '16px 0',
      position: 'absolute',
      right: 30,
    },
    tabTitle: {
      fontSize: 24,
      fontWeight: theme.typography.fontWeightMedium,
      margin: '60px 0',
      position: 'absolute',
      left: 72,
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
    beimenLagoon: {
      left: 320,
      top: 12,
    },
    beimenLagoonIcon: {
      bottom: 70,
      left: 236,
    },
    saltFields: {
      right: 490,
      top: 290,
    },
    saltFieldsIcon: {
      right: 175,
      top: 150,
    },
    luermenTempleIcon: {
      right: 400,
      top: 230,
    },
    luermenTemple: {
      right: 400,
      top: 220,
    },
    sicaoRefuge: {
      left: 100,
      top: 80,
    },
    sicaoRefugeIcon: {
      left: 484,
      top: 60,
    },
  })
);

const SPOT = {
  LAGOON: 'beimenLagoon',
  SALT_FIELDS: 'saltFields',
  TEMPLE: 'luermenTemple',
  REFUGE: 'sicaoRefuge',
};

const MapPage = () => {
  const classes = useStyles();

  const [selected, setSelected] = useState(SPOT.LAGOON);

  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography className={classes.tabTitle}>水的地圖</Typography>
      </Grid>
      <Grid item className={classes.sight} onClick={() => setSelected(SPOT.LAGOON)}>
        <SpotIcon
          className={clsx(
            classes.icon,
            classes.beimenLagoonIcon,
            selected === SPOT.LAGOON ? classes.selected : classes.unselected
          )}
        />
        <img
          src={LagoonPic}
          className={clsx(
            classes.icon,
            classes.beimenLagoon,
            selected === SPOT.LAGOON ? classes.selected : classes.unselected
          )}
        />
        <Typography color="textPrimary" variant="h5">
          北門潟湖
        </Typography>
      </Grid>
      <Grid item className={classes.sight} onClick={() => setSelected(SPOT.SALT_FIELDS)}>
        <SpotIcon
          className={clsx(
            classes.icon,
            classes.saltFieldsIcon,
            selected === SPOT.SALT_FIELDS ? classes.selected : classes.unselected
          )}
        />
        <img
          src={SaltFieldsPic}
          className={clsx(
            classes.icon,
            classes.saltFields,
            selected === SPOT.SALT_FIELDS ? classes.selected : classes.unselected
          )}
        />
      </Grid>
      <Grid item className={classes.sight} onClick={() => setSelected(SPOT.TEMPLE)}>
        <SpotIcon
          className={clsx(
            classes.icon,
            classes.luermenTempleIcon,
            selected === SPOT.TEMPLE ? classes.selected : classes.unselected
          )}
        />
        <img
          src={LuermenTemplePic}
          className={clsx(
            classes.icon,
            classes.luermenTemple,
            selected === SPOT.TEMPLE ? classes.selected : classes.unselected
          )}
        />
      </Grid>
      <Grid item className={classes.sight} onClick={() => setSelected(SPOT.REFUGE)}>
        <SpotIcon
          className={clsx(
            classes.icon,
            classes.sicaoRefugeIcon,
            selected === SPOT.REFUGE ? classes.selected : classes.unselected
          )}
        />
        <img
          src={SicaoRefugePic}
          className={clsx(
            classes.icon,
            classes.sicaoRefuge,
            selected === SPOT.REFUGE ? classes.selected : classes.unselected
          )}
        />
      </Grid>
      <Grid item className={classes.sightInfoCard}>
        <SightInfoCard />
      </Grid>
    </Grid>
  );
};

export default MapPage;
