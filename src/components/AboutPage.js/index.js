import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import Beach from '../../assets/beach.png';
import Beach2 from '../../assets/beach_2.png';
import Ocean from '../../assets/ocean.png';
import AboutBackground from '../../assets/about_background.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      backgroundImage: `url(${AboutBackground})`,
      backgroundSize: 'cover',
      height: 667,
      maxHeight: 667,
    },
    textCard: {
      margin: 'auto',
      paddingLeft: 100,
    },
    tabTitle: {
      fontSize: 24,
      fontWeight: theme.typography.fontWeightMedium,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 18,
    },
    imageContainer: {
      paddingLeft: 50,
    },
    card: {
      borderRadius: 31,
      maxWidth: 321,
    },
    imageCard: {
      height: 214,
      width: 321,
    },
    imageLeft: {
      marginTop: 79,
    },
    imageRight: {
      marginTop: 157,
      marginLeft: 40,
    },
    imageDown: {
      marginTop: 36,
      marginLeft: 119,
    },
  })
);

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={5} className={classes.textCard}>
        <Grid item container direction="column" spacing={4}>
          <Grid item>
            <Typography color="textPrimary" className={classes.tabTitle}>
              關於
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="textPrimary" className={classes.title}>
              台南水邊的獨特風貌
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="justify" color="textPrimary">
              臺南市位於臺灣的西南部，嘉南平原的核心位置，中西部為鹽水溪、曾文溪淤積平原，近300年來增加大量土地，平坦且適合農作。臺南地勢平緩，有大小河川橫亙，東側有丘陵、山地分布；西側臨臺灣海峽，有逾40公里的海岸線。臺南市沿海各區，300年前仍是臺江、倒風等內海，後因泥沙淤積成為小型內海如四草湖、鯤鯓湖等，轉為魚塭、鹽田使用。
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item contianer xs={7} className={classes.imageContainer}>
        <Grid item container>
          <Grid item xs className={classes.imageLeft}>
            <Card className={classes.card}>
              <CardMedia className={classes.imageCard} image={Beach} title="北門鹽場" />
            </Card>
          </Grid>
          <Grid item xs className={classes.imageRight}>
            <Card className={classes.card}>
              <CardMedia className={classes.imageCard} image={Beach2} title="北門鹽場" />
            </Card>
          </Grid>
        </Grid>
        <Grid item className={classes.imageDown}>
          <Card className={classes.card}>
            <CardMedia className={classes.imageCard} image={Ocean} title="北門鹽場" />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
