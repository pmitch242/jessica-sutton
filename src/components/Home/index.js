import React from 'react'
import { makeStyles, Container } from '@material-ui/core';

import Intro from './Intro';
import Title from '../Title';
import ServiceList from './ServiceList';
import ContactContent from '../Contact/ContactContent';

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
                <Title name='Our Services' margin='auto 0 5px'/>

                {/* Services info section */}
                <div id='services-info-section'>
                    <h6 className='h6'>How can we help?</h6>
                    <p className='p'>Providing tailored services that are responsive to each individual client's need.</p>
                </div>

                {/* Services Cards */}
                <ServiceList />
            </Container>

            {/* <div className='gap'></div> */}
            <ContactContent />
        </div>
    )
}

export default Home;
