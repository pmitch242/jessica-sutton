import React from 'react';
import { makeStyles, Typography, Container, Divider, Grid } from '@material-ui/core';

import ServiceCard from '../Services/ServiceCard';
import ContactForm from './ContactForm';

const useStyle = makeStyles({
    root: {
        backgroundColor: '#e9e9e9',
        paddingTop: '100px',
        paddingBottom: '100px',
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
    contactCard:{},
})

const Contact = () => {
    const classes = useStyle();

    return (
        <div id='about' className={classes.root}>
            <Container >
                <Typography variant='h2' color='primary' className={classes.h2}>Get Free Consultation</Typography>

                <Divider className={classes.divider} />

                <Grid container spacing={4} className={classes.container}>
                    <Grid item xs={12} sm={6}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div id='contact-card' className={classes.contactCard}>
                            <ServiceCard />
                        </div>
                        <div id='contact-notice'>
                            <Typography variant='h3'>Notice</Typography>
                            <Typography variant='subtitle1'>
                                *For legal purposes, please do not include any sensitive,
                                private or confidential information in this online form.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact;
