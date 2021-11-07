import React, { useMemo } from 'react';
import { Avatar, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { ReactComponent as ClockIcon } from '../../assets/clock_icon.svg';
import { ReactComponent as PhoneIcon } from '../../assets/phone_icon.svg';
import { ReactComponent as SpotIcon } from '../../assets/spot_icon.svg';
import Ocean from '../../assets/ocean.png';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: 470,
    },
    image: {
      width: 446,
      height: 256,
      maxWidth: 446,
      margin: 12,
      marginBottom: 0,
      borderRadius: '40px 40px 31px 31px',
    },
    text: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    name: {
      paddingBottom: 12,
    },
    detail: {
      padding: '0 40px',
      height: 200,
      overflowY: 'scroll',
    },
    actionArea: {
      backgroundColor: theme.colors.softBlue,
      height: 94,
      padding: '8px 32px',
    },
    avatar: {
      width: 30,
      height: 30,
    },
    infoText: {
      fontSize: 14,
    },
  })
);

const SightCard = ({
  image = Ocean,
  name = '北門瀉湖',
  detail = '北門區之生態環境屬於潟湖生態，蘊含著豐富之魚、蝦、貝類及紅樹林景觀，常見許多鷺鳥、水鳥，彈塗魚和各種螃蟹，具有潟湖觀光生態旅遊之魅力。最讓人注目的是每年10月到翌年4月到此作客的黑腹燕鷗，每到黃昏成群的黑腹燕鷗會在空中群聚飛舞，依照風向變換各種不同隊型，相當壯觀。海茄苳紅樹林曾經大量生長在北門蚵寮西邊的北門潟湖區沼澤地帶，後來開發為海埔新生地或闢為魚塭，經常可見許多蚵架插置潟湖中，形成另一特殊的海岸景觀。在台南政府全力復育紅樹林的政策下，潟湖南邊之頭港大排水，出海口長有面積約6公頃的海茄苳；在急水溪出海口淤沙較多的北門潟湖區海茄苳也再度繁殖，並引進種植水筆仔，在這兩個據點設置紅樹林保護區，以翠綠的生態景觀驚豔遊客。',
  info = {
    address: '臺南市709安南區城安路160號',
    phone: '886-6-7861000',
    openTime: '全年皆可，無時間限制(00:00~24:00)',
  },
}) => {
  const classes = useStyles();

  const phonCall = useMemo(() => `tel:${info.phone}`);

  return (
    <Card className={classes.container}>
      <CardMedia className={classes.image} image={image} title="" />
      <CardContent>
        <Grid container direction="column">
          <Grid item className={classes.name}>
            <Typography align="center" className={classes.text}>
              {name}
            </Typography>
          </Grid>
          <Grid item className={classes.detail}>
            <Typography align="justify" className={classes.text}>
              {detail}
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
                  {/* TODO: add google map link */}
                  {info.address}
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
                    {info.phone}
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
                {info.openTime}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

SightCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  detail: PropTypes.string,
  info: PropTypes.object,
};

export default SightCard;
