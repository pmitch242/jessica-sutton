import React from 'react';
import { makeStyles, Typography, Container, Divider, Grid, Card, CardContent } from '@material-ui/core';

import thiefSVG from '../../icons/svg/003-thief.svg';
import accidentIcon from '../../icons/svg/004-accident.svg';
import sendIcon from '../../icons/svg/002-send.svg';
import docIcon from '../../icons/svg/006-stethoscope.svg';

import ServiceCard from './ServiceCard';

const useStyle = makeStyles({
    root: {
        backgroundColor: '#f9f9f9',
        paddingTop: '50px',
        paddingBottom: '150px',
    },
    conatiner: {
        margin: '50px auto'
    },
    h2: {
        marginBottom: '20px',
    },
    cardH2: {
        marginBottom: '20px',
        color: '#e9e9e9'

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
    },
    extraCard: {
        backgroundColor: '#001639',
        color: '#c5c5c5',
        lineHeight: '20px',
        textAlign: 'center',
        height: '100%',
    },
    extraCardContent: {
        width: '60%',
        margin: 'auto',
    },
    cardDivider: {
        marginBottom: '20px',
        backgroundColor: '#d8973c'
    },
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
                    <Grid item xs={12} sm={8}>
                        <Card className={classes.extraCard}>
                            <CardContent className={classes.extraCardContent}>
                                <Typography variant='h2' className={classes.cardH2}>Services</Typography>
                                <Divider color='secondary' className={classes.cardDivider}/>
                                <Typography variant='body1'>
                                    We are highly experienced, thoughtful in our role as advocates, and committed to being responsive to what our clients need and demand.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Services;
