import React, { useContext } from 'react';
import { Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import Beach from '../../assets/beach.png';
import Beach2 from '../../assets/beach_2.png';
import Ocean from '../../assets/ocean.png';
import AboutBackground from '../../assets/about_background.png';
import { TABS } from '../../constants/general';
import { AppContext } from '../../context/AppContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      overflow: 'hidden',
      backgroundImage: `url(${AboutBackground})`,
      backgroundSize: 'cover',
      height: 667,
      maxHeight: 667,
      [theme.breakpoints.down('sm')]: {
        height: 700,
        maxHeight: 700,
      },
    },
    textCard: {
      margin: 'auto',
      paddingLeft: 100,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        margin: '0 36px',
      },
    },
    tabTitle: {
      fontSize: 24,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: 22,
      },
    },
    imageContainer: {
      paddingLeft: 50,
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    card: {
      borderRadius: 31,
      maxWidth: 321,
      [theme.breakpoints.down('sm')]: {
        maxWidth: 252,
      },
    },
    imageCard: {
      height: 214,
      width: 321,
      [theme.breakpoints.down('sm')]: {
        height: 168,
        width: 252,
      },
    },
    imageLeft: {
      marginTop: 79,
      [theme.breakpoints.down('sm')]: {
        marginTop: 36,
        left: -36,
        position: 'absolute',
      },
    },
    imageRight: {
      marginTop: 157,
      marginLeft: 40,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 178,
      },
    },
    imageDown: {
      marginTop: 36,
      marginLeft: 119,
    },
  })
);

const AboutPage = () => {
  const classes = useStyles();
  const { isMobileDevice } = useContext(AppContext);

  return (
    <div className={classes.container} id={TABS.ABOUT}>
      <Container fixed disableGutters>
        <Grid container direction={isMobileDevice ? 'column-reverse' : 'row'}>
          <Grid item xs={12} sm={5} className={classes.textCard}>
            <Grid item container direction="column" spacing={isMobileDevice ? 2 : 4}>
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
          <Grid item container xs={12} sm={7} className={classes.imageContainer}>
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
            {!isMobileDevice && (
              <Grid item className={classes.imageDown}>
                <Card className={classes.card}>
                  <CardMedia className={classes.imageCard} image={Ocean} title="北門鹽場" />
                </Card>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutPage;
