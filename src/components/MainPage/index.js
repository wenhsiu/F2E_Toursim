import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import mainPageBackground from '../../assets/mainPageBackground.png';
import Wave from '../../assets/wave.png';
import NorthSalt from '../../assets/northSalt.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundImage: `url(${mainPageBackground})`,
      backgroundSize: 'cover',
      height: 667,
      maxHeight: 667,
      '&:after': {
        content: '""',
        backgroundImage: `url(${Wave})`,
        backgroundSize: '100% 680px',
        position: 'absolute',
        top: 48,
        height: 680,
        width: '100%',
      },
    },
    content: { position: 'absolute', top: 48 },
    text: {
      marginLeft: 100,
    },
    textCard: {
      margin: 'auto',
    },
    title: {
      color: theme.colors.white,
      fontSize: 42,
      fontWeight: 'bold',
    },
    subTitle: {
      color: theme.colors.white,
      fontSize: 18,
    },
    card: {
      maxWidth: 678,
      margin: '100px auto',
    },
    imageCard: {
      height: 452,
      width: 678,
    },
  })
);

const MainPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid container className={classes.content}>
        <Grid item xs={4} className={classes.textCard}>
          <Grid className={classes.text}>
            <Typography className={classes.title}>台 南 好 水</Typography>
            <Typography className={classes.subTitle}>帶你探索台南海線沿岸風光</Typography>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Card className={classes.card}>
            <CardMedia className={classes.imageCard} image={NorthSalt} title="北門鹽場" />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPage;
