import React from 'react'
import { Grid, makeStyles, Container } from '@material-ui/core';

import Intro from './Intro';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';

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
                        <Grid item xs={12}><Services /></Grid>
                    </Grid>
                </Grid>

                
                <Grid container item xs={12} spacing={3}>
                    <Grid container item xs={12}>
                        <Grid item xs={12}><About /></Grid>
                    </Grid>
                </Grid>

                
                <Grid container item xs={12} spacing={3}>
                    <Grid container item xs={12}>
                        <Grid item xs={12}><Contact /></Grid>
                    </Grid>
                </Grid>

                
            </Grid>
        </Container>
    )
}

export default Home;
