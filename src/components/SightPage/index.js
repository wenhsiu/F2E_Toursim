import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import SightBackground from '../../assets/sight_background.png';
import sunsetBackground from '../../assets/sunset_background.png';
import SmallCard from './SmallCard';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundImage: `url(${sunsetBackground}), url(${SightBackground})`,
      backgroundSize: '100% 100%',
      height: 1020,
      maxHeight: 1020,
    },
    tabTitle: {
      fontSize: 24,
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 72,
      marginLeft: 72,
      top: 72,
      position: 'relative',
    },
    carousel: {
      // margin: 'auto',
    },
    carouselItemGroup: {
      margin: 'auto',
      justifyContent: 'center',
    },
    carouselItem: {
      margin: 10,
    },
    activeIndicator: {
      color: theme.colors.darkNavy,
    },
    navButton: {
      backgroundColor: theme.colors.darkNavy,
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
        <Grid item className={classes.carousel}>
          <Carousel
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            animation="slide"
            duration={1000}
            // cycleNavigation={false}
            // NextIcon={<NextIcon />}
            // PrevIcon={<PrevIcon />}
            navButtonsProps={{ className: classes.navButton }}
            activeIndicatorIconButtonProps={{ className: classes.activeIndicator }}
            // next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            // prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
          >
            <Grid container className={classes.carouselItemGroup}>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
            </Grid>
            <Grid container className={classes.carouselItemGroup}>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
              <Grid item className={classes.carouselItem}>
                <SmallCard />
              </Grid>
            </Grid>
          </Carousel>
        </Grid>
      </Container>
    </Grid>
  );
};

export default SightPage;
