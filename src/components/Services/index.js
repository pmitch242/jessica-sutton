import React from 'react';
import { makeStyles } from '@material-ui/core';

import ServicesHeader from './ServicesHeader';
import Service from './Service';

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
            {/* Header */}
            <ServicesHeader name='Sevices Page'/>

            {/* Service */}
            <Service />
        </div>
    )
}

export default Services;
