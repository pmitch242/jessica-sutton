import React from 'react'
import { makeStyles, Container } from '@material-ui/core';

import Intro from './Intro';
import ServiceList from './ServiceList';
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

            {/* Sevices Section */}
            <Container id='services-section'>
                <ServiceList />
            </Container>

            {/* <div className='gap'></div> */}
            <Contact />
        </div>
    )
}

export default Home;
