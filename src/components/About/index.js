import React from 'react';
import { makeStyles, Typography, Container, Divider, Grid } from '@material-ui/core';

import ServiceCard from '../Services/ServiceCard';


const useStyle = makeStyles({
    container: {
        maxWidth: '600px',
        marginTop: '10%',
        marginBottom: '20%',
        color: '#e9e9e9',
    },
})

const About = () => {
    const classes = useStyle();

    return (
        <div id='about' className={classes.root}>
            <Container >
                <Typography variant='h2' color='secondary' className={classes.h2}>Our Services</Typography>

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

export default About;
