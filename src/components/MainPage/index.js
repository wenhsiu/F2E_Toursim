import React from 'react';
import { Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import mainBackground from '../../assets/main_background.png';
import Wave from '../../assets/wave.png';
import NorthSalt from '../../assets/north_salt.png';

const useStyles = makeStyles(() =>
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
        backgroundImage: `url(${Wave})`,
        backgroundSize: 'contain',
        position: 'absolute',
        height: 680,
        width: window.innerWidth > 1280 ? '1280px' : window.innerWidth,
        backgroundRepeat: 'no-repeat',
      },
    },
    textCard: {
      margin: 'auto',
      paddingLeft: 100,
    },
    title: {
      fontSize: 42,
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 18,
    },
    card: {
      maxWidth: 678,
      borderRadius: 31,
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
      <Container fixed disableGutters>
        <Grid container className={classes.content}>
          <Grid item xs={4} className={classes.textCard}>
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
          <Grid item xs={8}>
            <Card className={classes.card}>
              <CardMedia className={classes.imageCard} image={NorthSalt} title="北門鹽場" />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MainPage;
