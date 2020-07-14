import React from 'react';
import { makeStyles, Typography, Container, Card, CardContent, Grid } from '@material-ui/core';

import ServiceCard from './ServiceCard';

const useStyle = makeStyles({
    root: {
        backgroundColor: '#f9f9f9',
        paddingTop: '100px',
        paddingBottom: '100px',
    },
    conatiner:{
        margin: '50px auto' 
    },
    h2: {
        marginBottom: '20px'
    }
})

const Services = () => {
    const classes = useStyle();

    return (
        <div id='about' className={classes.root}>
            <Container >
                <Typography variant='h2' color='secondary' className={classes.h2}>Our Services</Typography>
                <Grid container spacing={1} className={classes.container}>
                    <Grid item xs={12} sm={4}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ServiceCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ServiceCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Services;
