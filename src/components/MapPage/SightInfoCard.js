import React, { useMemo } from 'react';
import { Avatar, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { ReactComponent as ClockIcon } from '../../assets/clock_icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone_icon.svg';
import { ReactComponent as SpotIcon } from '../../assets/spot_icon.svg';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: 470,
      [theme.breakpoints.down('lg')]: {
        width: 'inherit',
      },
    },
    image: {
      width: 446,
      height: 256,
      maxWidth: 446,
      margin: 12,
      marginBottom: 0,
      borderRadius: '40px 40px 31px 31px',
      [theme.breakpoints.down('lg')]: {
        width: 305,
        height: 197,
        margin: '24px auto 0 auto',
        maxWidth: 'inherit',
      },
    },
    title: {
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('lg')]: {
        fontSize: 20,
      },
    },
    text: {
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('lg')]: {
        fontSize: 16,
      },
    },
    name: {
      paddingBottom: 12,
    },
    detail: {
      padding: '0 40px',
      height: 200,
      overflowY: 'scroll',
      [theme.breakpoints.down('lg')]: {
        padding: '0 16px',
      },
    },
    actionArea: {
      backgroundColor: theme.colors.softBlue,
      height: 94,
      padding: '8px 32px',
      [theme.breakpoints.down('lg')]: {
        padding: '8px 16px',
      },
    },
    avatar: {
      width: 30,
      height: 30,
      [theme.breakpoints.down('lg')]: {
        width: 22,
        height: 22,
      },
    },
    infoText: {
      fontSize: 14,
      [theme.breakpoints.down('lg')]: {
        fontSize: 12,
      },
    },
  })
);

const SightInfoCard = ({ Picture, Name, Description, Address, Phone, OpenTime }) => {
  const classes = useStyles();

  const phonCall = useMemo(() => `tel:${Phone}`);

  return (
    <Card className={classes.container}>
      <CardMedia className={classes.image} image={Picture?.PictureUrl1} />
      <CardContent>
        <Grid container direction="column">
          <Grid item className={classes.name}>
            <Typography align="center" className={classes.title}>
              {Name}
            </Typography>
          </Grid>
          <Grid item className={classes.detail}>
            <Typography align="justify" className={classes.text}>
              {Description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.actionArea}>
        <Grid container direction="column" spacing={1}>
          <Grid item container justifyContent="space-around">
            <Grid item container spacing={1} alignItems="center" xs>
              <Grid item>
                <Avatar className={classes.avatar}>
                  <SpotIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography color="textPrimary" className={classes.infoText}>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${Name}`}
                    target="_blank"
                    color="inherit"
                  >
                    {Address}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={1} alignItems="center" xs={5}>
              <Grid item>
                <Avatar className={classes.avatar}>
                  <PhoneIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography color="textPrimary" className={classes.infoText}>
                  <Link href={phonCall} color="inherit">
                    {Phone}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container spacing={1} alignItems="center">
            <Grid item>
              <Avatar className={classes.avatar}>
                <ClockIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography color="textPrimary" className={classes.infoText}>
                {OpenTime}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

SightInfoCard.propTypes = {
  Picture: PropTypes.object,
  Name: PropTypes.string,
  Description: PropTypes.string,
  Address: PropTypes.string,
  Phone: PropTypes.string,
  OpenTime: PropTypes.string,
  Position: PropTypes.object,
};

export default SightInfoCard;
