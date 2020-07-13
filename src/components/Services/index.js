import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        height: '80vh',
        backgroundColor: '#f9f9f9',
    },
})

const Services = () => {
    const classes = useStyle();

    return (
            <div id='about' className={classes.container}>
                test
            </div>
    )
}

export default Services;
