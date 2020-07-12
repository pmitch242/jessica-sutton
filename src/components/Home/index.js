import React from 'react'
import { Grid, Paper, makeStyles, Container } from '@material-ui/core';

import Intro from './Intro';

import './home.css';

const useStyle = makeStyles({
    home: {}
})

const Home = () => {
    const classes = useStyle();

    return (
        <Container id='home'>
            <Grid container spacing={1}>

                <Grid container item xs={12} spacing={3}>
                    <Grid container item xs={12}>
                        <Grid item xs={12}><Intro /></Grid>
                    </Grid>
                </Grid>

                
                <Grid container item xs={12} spacing={3}>
                    <Grid container item xs={12}>
                        <Grid item xs={12}><Paper className={classes.paper}>item</Paper></Grid>
                    </Grid>
                </Grid>

                
                <Grid container item xs={12} spacing={3}>
                    <Grid container item xs={12}>
                        <Grid item xs={12}><Paper className={classes.paper}>item</Paper></Grid>
                    </Grid>
                </Grid>

                
            </Grid>
        </Container>
    )
}

export default Home;
