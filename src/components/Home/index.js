import React from 'react'
import { makeStyles } from '@material-ui/core';

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
        <div id='home' className={classes.home}>
            <Intro />
            <Services />
            <About />
            {/* <div className='gap'></div> */}
            <Contact />
        </div>
    )
}

export default Home;
