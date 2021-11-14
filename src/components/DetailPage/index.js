import React, { useEffect, useContext, useState } from 'react';
import { Avatar, Button, Card, CardActions, CardMedia, Container, Grid, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import SightBackground from '../../assets/sight_background.png';
import sunsetBackground from '../../assets/sunset_background.png';
import Carousel from 'react-material-ui-carousel';
import { TABS, PATH } from '../../constants/general';
import { AppContext } from '../../context/AppContext';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { useParams } from 'react-router-dom';
import { ReactComponent as ClockIcon } from '../../assets/clock_icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone_icon.svg';
import { ReactComponent as SpotIcon } from '../../assets/spot_icon.svg';
import { ReactComponent as TicketIcon } from '../../assets/ticket_icon.svg';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundImage: `url(${sunsetBackground}), url(${SightBackground})`,
      backgroundSize: '100% 100%',
      height: 1020,
      maxHeight: 1020,
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
    },
    card: {
      padding: 30,
    },
    leftGrid: {
      zIndex: 1,
    },
    rightGrid: {
      justifyContent: 'flex-end',
    },
    imageGrid: {
      position: 'relative',
    },
    imageCard: {
      height: 364,
      width: 619,
    },
    carouselItemGroup: {
      margin: 'auto',
      justifyContent: 'center',
    },
    infoCard: {
      position: 'relative',
      top: -32,
      width: 500,
    },
    navButton: {
      backgroundColor: theme.colors.darkNavy,
    },
    actionArea: {
      backgroundColor: theme.colors.softBlue,
      padding: '8px 32px',
    },
    avatar: {
      width: 30,
      height: 30,
    },
    infoText: {
      fontSize: 14,
    },
    text: {
      maxWidth: 400,
    },
  })
);

const DetailPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();
  const { places, setCurrentTab } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!places) return [];
    places.forEach((place, i) => {
      if (place.ID === id) setCurrentIndex(i);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid className={classes.container} id={TABS.PLACE}>
      <Container fixed disableGutters>
        <Grid item>
          <Button
            onClick={() => {
              navigate(PATH.PLACE);
              setCurrentTab(TABS.MAIN);
            }}
          >
            <ArrowBackRoundedIcon />
            水的景點
          </Button>
        </Grid>
        <Grid></Grid>
        {places && (
          <Grid item className={classes.carousel}>
            <Carousel
              index={currentIndex}
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              animation="slide"
              navButtonsProps={{ className: classes.navButton }}
              activeIndicatorIconButtonProps={{ className: classes.activeIndicator }}
            >
              {places.map((place, i) => {
                return (
                  <Grid key={i} container className={classes.carouselItemGroup}>
                    <Grid item container xs={5} spacing={4} className={classes.leftGrid}>
                      <Grid item className={classes.text}>
                        <Typography variant="h4" color="textPrimary" className={classes.title}>
                          {place.Name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Card className={classes.card}>
                          <Typography color="textSecondary">{place.Description}</Typography>
                        </Card>
                      </Grid>
                    </Grid>
                    <Grid item container xs={5} className={classes.rightGrid}>
                      <Grid item className={classes.imageGrid}>
                        <Card className={classes.imageCard}>
                          <CardMedia image={place.Picture?.PictureUrl1} title={place.Name} style={{ height: '100%' }} />
                        </Card>
                      </Grid>
                      <Grid item className={classes.infoCard}>
                        <Card className={classes.actionArea}>
                          <CardActions>
                            <Grid container direction="column" spacing={1}>
                              <Grid item container spacing={1} alignItems="center">
                                <Grid item xs={1}>
                                  <Avatar className={classes.avatar}>
                                    <SpotIcon />
                                  </Avatar>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography color="textPrimary" className={classes.infoText}>
                                    <Link
                                      href={`https://www.google.com/maps/search/?api=1&query=${place.Name}`}
                                      target="_blank"
                                      color="inherit"
                                    >
                                      {place.Address}
                                    </Link>
                                  </Typography>
                                </Grid>

                                <Grid item xs={1}>
                                  <Avatar className={classes.avatar}>
                                    <PhoneIcon />
                                  </Avatar>
                                </Grid>
                                <Grid item xs={4}>
                                  <Typography color="textPrimary" className={classes.infoText}>
                                    <Link href={`tel:${place.Phone}`} color="inherit">
                                      {place.Phone}
                                    </Link>
                                  </Typography>
                                </Grid>
                              </Grid>

                              {place.TicketInfo && (
                                <Grid item container spacing={1} alignItems="center">
                                  <Grid item xs={1}>
                                    <Avatar className={classes.avatar}>
                                      <TicketIcon />
                                    </Avatar>
                                  </Grid>
                                  <Grid item xs={11}>
                                    <Typography color="textPrimary" className={classes.infoText}>
                                      {place.TicketInfo}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              )}

                              {place.OpenTime && (
                                <Grid item container spacing={1} alignItems="center">
                                  <Grid item xs={1}>
                                    <Avatar className={classes.avatar}>
                                      <ClockIcon />
                                    </Avatar>
                                  </Grid>
                                  <Grid item xs={11}>
                                    <Typography color="textPrimary" className={classes.infoText}>
                                      {place.OpenTime}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              )}
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Carousel>
          </Grid>
        )}
      </Container>
    </Grid>
  );
};

export default DetailPage;
