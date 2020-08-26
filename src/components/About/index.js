import React from 'react';
// import { makeStyles} from '@material-ui/core';

import Header from '../Header';
import ContactContent from '../Contact/ContactContent';


// import jess from './jessica.png';
// import jess from './jessica-image.png';

import './about.css';

// const useStyle = makeStyles({

// })

const About = () => {
    // const classes = useStyle();

    return (
        <div id='about'>
            {/* Header */}
           <Header name='about'/>

           {/* Contact */}
           <ContactContent />
        </div>
    )
}

export default About;
