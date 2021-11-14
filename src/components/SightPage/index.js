import React, { useEffect, useState, useMemo } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import SightBackground from '../../assets/sight_background.png';
import sunsetBackground from '../../assets/sunset_background.png';
import SmallCard from './SmallCard';
import Carousel from 'react-material-ui-carousel';
import { TABS } from '../../constants/general';
import { getSightInfo } from '../../service/toursium';
import { placeListLocation } from '../../data/sightsLocation';

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

  const formateCarouselItem = useMemo(() => {
    if (!places) return [];
    const pages = [];
    let temp = [];

    places.forEach((sight, i) => {
      if (i !== 0 && i % 8 === 0) {
        pages.push(
          <Grid key={i} container className={classes.carouselItemGroup}>
            {[...temp]}
          </Grid>
        );
        temp = [];
      }
      temp.push(
        <Grid key={sight.ID} item className={classes.carouselItem}>
          <SmallCard {...sight} />
        </Grid>
      );
    });

    pages.push(
      <Grid key={places.length} container className={classes.carouselItemGroup}>
        {[...temp]}
      </Grid>
    );

    return pages;
  }, [places]);

  return (
    <Grid className={classes.container} id={TABS.PLACE}>
      <Container fixed disableGutters>
        <Grid item>
          <Typography className={classes.tabTitle}>水的景點</Typography>
        </Grid>
        {places && (
          <Grid item className={classes.carousel}>
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              animation="slide"
              navButtonsProps={{ className: classes.navButton }}
              activeIndicatorIconButtonProps={{ className: classes.activeIndicator }}
            >
              {formateCarouselItem}
            </Carousel>
          </Grid>
        )}
      </Container>
    </Grid>
  );
};

export default SightPage;
