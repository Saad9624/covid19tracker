import React from 'react'
import { Card , CardContent , Typography , Grid} from '@material-ui/core' ;
import styles from './Cards.module.css' ;
import CountUp from 'react-countup' ;
import cx from 'classnames' ;

const Cards = ({ data :{confirmed , recovered , deaths , lastUpdate}}) => {
    console.log(confirmed)
    if(!confirmed){
        return 'Loading..'
    }


    return (
        <div className={styles.container}>
            <Grid container justify="center" spacing={3}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography gutterBottom color="textSecondary">Infected</Typography>
                         <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={3.0}
                            separator=","
                            />
                         </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of covid19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>

                    <CardContent>
                        <Typography gutterBottom color="textSecondary">Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={3.0}
                            separator=","
                            />
                         </Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases of covid19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>

                    <CardContent>
                        <Typography gutterBottom color="textSecondary">Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={3.0}
                            separator=","
                            />
                         </Typography>
                         <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths cases of covid19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}
export default Cards ;
