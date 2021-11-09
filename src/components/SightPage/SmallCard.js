import React from 'react';
import { Card, CardContent, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import Ocean from '../../assets/ocean.png';
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

const SmallCard = ({
  image = Ocean,
  name = '北門瀉湖',
  detail = '雙春濱海遊憩區是位在台南北門的生態遊憩場所，園區內規劃紅樹林觀察區，網羅台灣珍貴的4種原生北門區之生態環境屬於潟湖生態，蘊含著豐富之魚、蝦、貝類及紅樹林景觀，常見許多鷺鳥、水鳥，彈塗魚和各種螃蟹，具有潟湖觀光生態旅遊之魅力。最讓人注目的是每年10月到翌年4月到此作客的黑腹燕鷗，每到黃昏成群的黑腹燕鷗會在空中群聚飛舞，依照風向變換各種不同隊型，相當壯觀。海茄苳紅樹林曾經大量生長在北門蚵寮西邊的北門潟湖區沼澤地帶，後來開發為海埔新生地或闢為魚塭，經常可見許多蚵架插置潟湖中，形成另一特殊的海岸景觀。在台南政府全力復育紅樹林的政策下，潟湖南邊之頭港大排水，出海口長有面積約6公頃的海茄苳；在急水溪出海口淤沙較多的北門潟湖區海茄苳也再度繁殖，並引進種植水筆仔，在這兩個據點設置紅樹林保護區，以翠綠的生態景觀驚豔遊客。',
  // info = {
  //   address: '臺南市709安南區城安路160號',
  //   phone: '886-6-7861000',
  //   openTime: '全年皆可，無時間限制(00:00~24:00)',
  // },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardMedia className={classes.image} image={image} title="" />
      <CardContent>
        <Grid container direction="column">
          <Grid item className={classes.name}>
            <Typography align="center" className={classes.nameText}>
              {name}
            </Typography>
          </Grid>
          <Grid item className={classes.detail}>
            <Typography align="justify" className={classes.detailText}>
              {detail}
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
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  detail: PropTypes.string,
  info: PropTypes.object,
};

export default SmallCard;
