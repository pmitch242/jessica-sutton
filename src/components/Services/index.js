import React from 'react';
import { makeStyles, Typography, Container, Divider, Grid } from '@material-ui/core';

import thiefSVG from '../../icons/svg/003-thief.svg';
import accidentIcon from '../../icons/svg/004-accident.svg';
import sendIcon from '../../icons/svg/002-send.svg';
import docIcon from '../../icons/svg/006-stethoscope.svg';

import ServiceCard from './ServiceCard';

const useStyle = makeStyles({
    root: {
        backgroundColor: '#f9f9f9',
        paddingTop: '100px',
        paddingBottom: '100px',
    },
    conatiner: {
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
    icon: {
        fontSize: '5rem',
        margin: '20px'
    }
})

const Services = () => {
    const classes = useStyle();

    return (
        <div id='services' className={classes.root}>
            <Container >
                <Typography variant='h2' color='primary' className={classes.h2}>Our Services</Typography>

                <Divider className={classes.divider} />

                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={12} sm={4}>
                        <ServiceCard
                            title='Criminal Law'
                            icon={thiefSVG}
                            link='/'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ServiceCard
                            title='Accidents and Injuries'
                            icon={accidentIcon}
                            link='/'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ServiceCard
                            title='Public Health'
                            icon={docIcon}
                            link='/'
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ServiceCard
                            title='Immigration'
                            icon={sendIcon}
                            link='/'
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Services;
