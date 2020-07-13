import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        height: '80vh',
    },
})

const Services = () => {
    const classes = useStyle();

    return (
            <div id='about' className={classes.container}>
                <Typography variant='h1' >
                    Fugiat dolor laboris culpa ad labore
                </Typography>
            </div>
    )
}

export default Services;
