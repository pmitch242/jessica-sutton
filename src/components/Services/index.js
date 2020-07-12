import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        maxWidth: '600px',
        marginTop: '10%',
        marginBottom: '20%',
        color: '#e9e9e9',
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
