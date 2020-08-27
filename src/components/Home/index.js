import React, {useEffect} from 'react'
import { makeStyles, Container } from '@material-ui/core';

import Intro from './Intro';
import Title from '../Title';
import AboutContent from '../About/AboutContent';
import ServiceList from './ServiceList';
import ContactContent from '../Contact/ContactContent';

import './home.css';

const useStyle = makeStyles({
    home: {}
})

const Home = () => {
    const classes = useStyle();

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div id='home' className={classes.home}>
            <Intro />

            {/* Sevices Section */}
            <Container id='services-section'>
                <Title name='Our Services' barMargin='auto 0 5px'/>

                {/* Services info section */}
                <div id='services-info-section'>
                    <h6 className='h6'>How can we help?</h6>
                    <p className='p'>Providing tailored services that are responsive to each individual client's need.</p>
                </div>

                {/* Services Cards */}
                <ServiceList />
            </Container>

            {/* About Section */}
            <AboutContent />

            {/* Contact Section*/}
            <ContactContent />
        </div>
    )
}

export default Home;
