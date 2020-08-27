import React, {useEffect} from 'react';

import Header from '../Header';
import AboutContent from './AboutContent';
import ContactContent from '../Contact/ContactContent';

import './about.css';

const About = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    
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
