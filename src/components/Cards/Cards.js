import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate} }) => {
 if(!confirmed && !recovered && !deaths){
   return 'Loading..';
 }

  return (
    <>
    <Typography className={styles.dateUpdated}>Last Updated: {new Date(lastUpdate).toDateString()}</Typography>
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Infected</Typography>
            <CountUp start={0} end={confirmed.value}  duration={2.5} separator="," />
            
          </CardContent>
        </Grid>
       <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Recovered</Typography>
            <CountUp start={0} end={recovered.value}  duration={2.5} separator="," />
          </CardContent>
        </Grid>
       <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Deaths</Typography>
            <CountUp start={0} end={deaths.value}  duration={2.5} separator="," />
          </CardContent>
        </Grid>
      </Grid>
    </div>
    </>

  )
}

export default Cards;

