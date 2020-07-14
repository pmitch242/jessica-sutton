import React from 'react';
import { makeStyles, Typography, Container, Divider, Grid } from '@material-ui/core';

import jess from '../../images/jess.jpg';

import ServiceCard from '../Services/ServiceCard';


const useStyle = makeStyles({
    root: {
        backgroundColor: '#e9e9e9',
        paddingTop: '125px',
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
    container: {
        backgroundColor: '#f9f9f9',
    },
    info: {
        backgroundColor: '#f9f9f9',
    },
    body: {
        marginBottom: '20px',
    },
    imgDiv: {
        width: 'inherit',
        height: 'fit-content',
    },
    img: {
        maxWidth: '-webkit-fill-available',
        height: '115%',
        position: 'relative',
        top: '-75px'
    }
})

const About = () => {
    const classes = useStyle();

    return (
        <div id='about' className={classes.root}>
            <Container >
                <Typography variant='h2' color='primary' className={classes.h2}>Jessica Sutton</Typography>

                <Divider className={classes.divider} />

                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={12} sm={7} >
                        <Typography variant='body1' className={classes.body} color='primary'>
                            Jessica Sutton has over a decade of experience in representing death-eligible and death-sentenced clients as both an attorney and a mitigation specialist. In her role as an attorney, Ms. Sutton has represented clients in state and federal proceedings, including state post-conviction and federal habeas corpus proceedings, lethal injection litigation, Section 1983 civil rights lawsuits, and clemency.
                        </Typography>
                        <Typography variant='body1' className={classes.body} color='primary'>
                            As a capital mitigation specialist, Ms. Sutton has conducted dozens of mitigation investigations around the country and at nearly every stage of proceedings--from pre-trial to clemency. Ms. Sutton is experienced in developing multi-generational life history narratives and conducting investigations related to competency and Atkins. Ms. Sutton is also trained in identifying signs and symptoms of mental illness, trauma interviewing, and working with a variety of experts.
                        </Typography>

                        <Typography variant='body1' className={classes.body} color='primary'>
                            In addition to capital work, Ms. Sutton regularly conducts mitigation investigations in felony sentencings, parole cases, and cases petitioning for sentence modifications for individuals sentenced to life as juveniles. She also travels around the country to present at conferences concerning mitigation investigation and frequently trains and consults with teams nationwide.
                        </Typography>

                        <Grid container spacing={1} >
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
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <img alt='Jessica Sutton' src={jess} className={`jessImg ${classes.img}`} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About;
