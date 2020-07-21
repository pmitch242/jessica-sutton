import React from 'react';
import { makeStyles, Typography, Container, Divider, Grid } from '@material-ui/core';

import ContactForm from './ContactForm';

import Logo from '../Logo'

const useStyle = makeStyles({
    root: {
        backgroundColor: '#e9e9e9',
        padding: '90px 0'
    },
    h2: {
        marginBottom: '10px',

    },
    h3: {
        marginBottom: '5px',

    },
    divider: {
        marginBottom: '30px',
        maxWidth: '250px',
        height: '3px',
        backgroundColor: '#d8973c',
    },
    logo: {
        marginBottom: '5px'
    },
    contact: {
        padding: '24px',
        backgroundColor: '#001639',
        // height: '150px',
        color: '#e9e9e9',
        borderRadius: '5px',
        marginBottom: '20px',
    },
    notice: {},
    div: {
        display: 'flex',
        alignItems: 'baseline',
        // marginTop: '5px'
    },
    span: {
        marginLeft: '5px'
    },
})

const Contact = () => {
    const classes = useStyle();

    return (
        <div id='about' className={classes.root}>
            <Container >
                <Typography variant='h2' color='primary' className={classes.h2}>Get Free Consultation</Typography>

                <Divider className={classes.divider} />

                <Grid container spacing={1} className={classes.container}>
                    <Grid item xs={12} sm={7}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} sm={1}/>
                    <Grid item xs={12} sm={4}>
                        <div id='contact-card'>
                            <div className={classes.contact}>
                                <div className={classes.logo}><Logo /></div>
                                <div className={classes.div}>
                                    <Typography>Phone :</Typography>
                                    <Typography className={classes.span}>
                                        (208) 503-9381
                                    </Typography>
                                </div>
                                <div className={classes.div}>
                                    <Typography>Email :</Typography>
                                    <Typography className={classes.span}>
                                        jess.el.sutton@gmail.com
                                    </Typography>
                                </div>
                            </div>
                            <div id='contact-notice' className={classes.notice}>
                                <Typography variant='h3' className={classes.h3} color="primary">Notice</Typography>
                                <Typography variant='subtitle1'>
                                    *For legal purposes, please do not include any sensitive,
                                    private or confidential information in this online form.
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact;
