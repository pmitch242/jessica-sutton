import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageHeader from '../PageHeader';

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
            <PageHeader name='Sevices Page'/>
        </div>
    )
}

export default Services;
