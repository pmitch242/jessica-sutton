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
        <div id='home'>
            <Grid container >

                <Grid container item xs={12} >
                    <Grid container item xs={12}>
                        <Grid item xs={12}><Intro /></Grid>
                    </Grid>
                </Grid>

                
                <Grid container item xs={12} >
                    <Grid container item xs={12}>
                        <Grid item xs={12}><Services /></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;
