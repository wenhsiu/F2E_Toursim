import React from 'react';
import { Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import SightBackground from '../../assets/sight_background.png';
import sunsetBackground from '../../assets/sunset_background.png';
import Wave from '../../assets/wave.png';
import NorthSalt from '../../assets/north_salt.png';
import SmallCard from './SmallCard';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundImage: `url(${sunsetBackground}), url(${SightBackground})`,
      backgroundSize: '100% 100%',
      height: 1020,
      maxHeight: 1020,
      // '&:after': {
      //   content: '""',
      //   backgroundImage: `url(${Wave})`,
      //   backgroundSize: '100% 680px',
      //   position: 'absolute',
      //   top: 48,
      //   height: 680,
      //   width: '100%',
      // },
    },
    tabTitle: {
      fontSize: 24,
      fontWeight: theme.typography.fontWeightMedium,
      margin: 72,
      position: 'absolute',
    },
  })
);

const SightPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Container fixed disableGutters>
        <Grid item>
          <Typography className={classes.tabTitle}>水的景點</Typography>
        </Grid>
        <Grid item>
          <SmallCard />
        </Grid>
      </Container>
    </Grid>
  );
};

export default SightPage;
