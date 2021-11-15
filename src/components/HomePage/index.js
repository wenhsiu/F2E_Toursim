import React, { useContext } from 'react';
import { Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import mainBackground from '../../assets/main_background.png';
import Wave from '../../assets/wave.png';
import WaveM from '../../assets/wave_m.png';
import NorthSalt from '../../assets/north_salt.png';
import { TABS } from '../../constants/general';
import { AppContext } from '../../context/AppContext';
import { ReactComponent as ScrollArrowIcon } from '../../assets/scroll_arrow.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundImage: `url(${mainBackground})`,
      backgroundSize: 'cover',
      height: 667,
      maxHeight: 667,
    },
    content: {
      '&:after': {
        content: '""',
        backgroundSize: 'contain',
        position: 'absolute',
        height: 680,
        backgroundRepeat: 'no-repeat',

        [theme.breakpoints.down('lg')]: {
          backgroundImage: `url(${Wave})`,
          width: window.innerWidth > 1280 ? '1280px' : window.innerWidth,
        },

        [theme.breakpoints.down('sm')]: {
          backgroundImage: `url(${WaveM})`,
          backgroundPosition: 'center',
          width: '100%',
          backgroundSize: 'cover',
          marginTop: 72,
          height: 600,
        },
      },
    },
    textCard: {
      margin: 'auto',
      paddingLeft: 100,
      [theme.breakpoints.down('sm')]: {
        marginTop: 200,
        padding: 0,
        textAlign: 'center',
      },
    },
    title: {
      fontSize: 42,
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
      },
    },
    subTitle: {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    card: {
      maxWidth: 678,
      borderRadius: 31,
      margin: '100px auto',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 324,
        margin: 'auto',
        marginTop: 10,
      },
    },
    imageCard: {
      height: 452,
      width: 678,
      [theme.breakpoints.down('sm')]: {
        height: 216,
        width: 323,
      },
    },
    arrow: {
      textAlign: 'center',
      marginTop: 32,
    },
  })
);

const HomePage = () => {
  const classes = useStyles();
  const { isMobileDevice } = useContext(AppContext);

  return (
    <Grid className={classes.container} id={TABS.MAIN}>
      <Container fixed disableGutters>
        <Grid container className={classes.content}>
          <Grid item xs={12} sm={4} className={classes.textCard} direction={isMobileDevice ? 'column' : 'row'}>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography color="textPrimary" className={classes.title}>
                  台 南 好 水
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="textPrimary" className={classes.subTitle}>
                  帶你探索台南海線沿岸風光
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Card className={classes.card}>
              <CardMedia className={classes.imageCard} image={NorthSalt} title="北門鹽場" />
            </Card>
          </Grid>
        </Grid>
        {isMobileDevice && (
          <Grid item className={classes.arrow}>
            <Typography color="textPrimary">scroll</Typography>
            <ScrollArrowIcon />
          </Grid>
        )}
      </Container>
    </Grid>
  );
};

export default HomePage;
