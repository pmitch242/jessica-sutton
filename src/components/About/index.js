import React from 'react';
import { makeStyles} from '@material-ui/core';

import Header from '../Header';

// import jess from './jessica.png';
// import jess from './jessica-image.png';

import './about.css';

const useStyle = makeStyles({

})

const About = () => {
    const classes = useStyle();

    return (
        <div id='about' className={classes.root}>
           <Header name='about'/>
        </div>
    )
}

export default About;
