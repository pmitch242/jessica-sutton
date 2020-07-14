import React from 'react';
import { makeStyles, Typography, Container, Divider, Grid } from '@material-ui/core';

import jess from '../../images/jess.jpg';

import ServiceCard from '../Services/ServiceCard';


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
                <Typography variant='h2' color='secondary' className={classes.h2}>Your Lawyer</Typography>

                <Divider className={classes.divider} />

                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={12} sm={7} >
                        <Typography variant='h2' className={classes.h2}>
                            Jessica Sutton
                        </Typography>
                        <Typography variant='body1' className={classes.body}>
                            Enim Lorem do adipisicing nostrud aliquip excepteur cupidatat officia culpa officia tempor do. Dolor fugiat dolore cillum esse sunt proident Lorem irure aliqua excepteur adipisicing occaecat officia. Ea aliquip cillum dolor laboris laboris irure magna ipsum deserunt exercitation cupidatat. Ad proident quis sint exercitation nisi magna sint nostrud ullamco deserunt. Ea consequat cillum do id eu. Laborum minim ea proident cupidatat sunt exercitation nisi.
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
