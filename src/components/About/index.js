import React from 'react';

import Header from '../Header';
import AboutContent from './AboutContent';
import ContactContent from '../Contact/ContactContent';

import './about.css';

const About = () => {
    return (
        <div id='about'>
            {/* Header */}
           <Header name='about'/>

           {/* About Content */}
           <AboutContent />

           {/* Contact Content*/}
           <ContactContent />
        </div>
    )
}

export default About;
