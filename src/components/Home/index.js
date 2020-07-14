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
            <Intro />
            <Services />
            <About />
        </div>
    )
}

export default Home;
