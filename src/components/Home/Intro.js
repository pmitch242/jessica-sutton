import React from 'react';
import { makeStyles, Typography, Button, Container } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        maxWidth: '800px',
        color: '#ffffff',
        paddingTop: '125px'
    },
    button: {
        color: '#f9f9f9',
        marginTop: '90px',
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        fontSize: '1.15rem',
        letterSpacing: '2px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        '@media (min-width:600px)': {
            marginTop: '50px',
            width: '40%'
        }

    },
    title: {
        textTransform: 'uppercase',
    },
    subtitile: {
        color: '#f9f9f9',
        textAlign: 'center',
        fontSize: '1rem',
        '@media (min-width:600px)': {
            marginTop: '0px',
            textAlign: 'left',
            letterSpacing: '0px',
        }
    },
})

const Intro = () => {
    const classes = useStyle();

    return (
        <div id='intro'>
            <div className='intro-background'>
                <Container>
                    <div className={classes.container} id='intro-info-div'>
                        <Typography variant='h1' className={`${classes.title} intro-title`}>
                            Protecting Our Rights.
                    </Typography>
                        <Typography variant='h1' className={` ${classes.title} intro-title`}>
                            Fighting for Justice.
                    </Typography>
                        <br />
                        <Typography variant='subtitle1' className={classes.subtitile}>
                            A specialized law practice providing criminal defense representation, consultation, and training.
                    </Typography>
                        <br />
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Request Consultation
                </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Intro;
