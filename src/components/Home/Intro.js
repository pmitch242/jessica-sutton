import React from 'react';
import { makeStyles, Typography, Button, Container } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        maxWidth: '600px',
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

    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: '2.4rem',
        letterSpacing: '3px',
        lineHeight: '45px',
        marginBottom: '12px'
    },
    subtitile: {
        color: '#f9f9f9',
        textAlign: 'center',
        fontSize: '1rem',
    },
})

const Intro = () => {
    const classes = useStyle();

    return (
        <div id='intro'>
            <div className='intro-background'>
                <Container>
                    <div className={classes.container} id='intro-info-div'>
                        <Typography variant='h1' className={classes.title}>
                            Protecting Our Rights
                    </Typography>
                        <Typography variant='h1' className={classes.title}>
                            Fighting for Justice.
                    </Typography>
                        <br />
                        <Typography variant='subtitle1' className={classes.subtitile}>
                            A specialized law practice providing criminal defense representation, consultation, and training
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
