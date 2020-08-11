import React from 'react';
import { makeStyles } from '@material-ui/core';

import './services.css'

const useStyle = makeStyles({
    root: {
        backgroundColor: '#f9f9f9',
    },

})

const Services = () => {
    const classes = useStyle();

    return (
        <div id='services' className={classes.root}>
            <h1>In Services</h1>
        </div>
    )
}

export default Services;
