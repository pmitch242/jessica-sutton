import React from 'react';
import { makeStyles, Typography, Container, Divider, Grid } from '@material-ui/core';

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
        marginBottom: '10px',
    
    },
    divider: {
        marginBottom: '30px',
        maxWidth: '250px',
        height: '3px',
        backgroundColor: '#d8973c'
    },
})

const Services = () => {
    const classes = useStyle();

    return (
        <div id='services' className={classes.root}>
            <Container >
                <Typography variant='h2' color='primary' className={classes.h2}>Our Services</Typography>

                <Divider className={classes.divider}/>

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
