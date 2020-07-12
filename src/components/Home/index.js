import React from 'react'
import {  } from '@material-ui/core';

import Intro from './Intro';

import './home.css';

// const useStyle = makeStyles({
//     home: {}
// })

const Home = () => {
        return (
            <div id='home'>
                <Intro />
                <section id='landing'></section>
                <section id='about-section'></section>
            </div>
        )
}

export default Home;
