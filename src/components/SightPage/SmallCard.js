import React from 'react';
import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: 253,
    },
    image: {
      width: 237,
      height: 158,
      maxWidth: 237,
      margin: 8,
      marginBottom: 0,
      borderRadius: '40px 40px 31px 31px',
    },
    nameText: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    name: {
      paddingBottom: 12,
    },
    detailText: {
      fontSize: 14,
      // '&:before': {
      //   content: '"..."',
      //   position: 'absolute',
      //   right: 0,
      //   bottom: 4,
      //   backgroundColor: theme.colors.white,
      //   width: 124,
      // },
      // '&:after': {
      //   content: '""',
      //   position: 'absolute',
      //   right: 0,
      //   width: '1em',
      //   height: '1em',
      //   marginTop: '0.2em',
      //   background: 'white',
      // },
    },
    detail: {
      padding: '0 10px',
      // height: 88,
      overflow: 'hidden',
      position: 'relative',
      '-webkit-line-clamp': 4,
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
    },
    more: {
      fontSize: 14,
      padding: '0 10px',
      fontWeight: theme.typography.fontWeightMedium,
      position: 'relative',
    },
  })
);

const SmallCard = ({ Picture, Name, Description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardMedia className={classes.image} image={Picture?.PictureUrl1} title="" />
      <CardContent>
        <Grid container direction="column">
          <Grid item className={classes.name}>
            <Typography align="center" className={classes.nameText}>
              {Name}
            </Typography>
          </Grid>
          <Grid item className={classes.detail}>
            <Typography align="justify" className={classes.detailText}>
              {Description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="right" className={classes.more}>
              <Link href="">看更多</Link>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SmallCard.propTypes = {
  Picture: PropTypes.object,
  Name: PropTypes.string,
  Description: PropTypes.string,
};

export default SmallCard;
