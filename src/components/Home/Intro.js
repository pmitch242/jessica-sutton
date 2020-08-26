import React from 'react';
import { makeStyles, Typography, Button, Container } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '800px',
        color: '#ffffff',
        paddingTop: '165px',
        paddingBottom: '100px',
        '@media (min-width:600px)': {
            paddingTop: '200px',
            paddingBottom: '150px',
        }
    },
    button: {
        color: '#f9f9f9',
        margin: '90px auto 0',
        width: '100%',
        // paddingTop: '10px',
        // paddingBottom: '10px',
        fontSize: '1.15rem',
        letterSpacing: '2px',
        fontWeight: '400',
        textTransform: 'capitalize',
        '@media (min-width:600px)': {
            margin: '50px 0',
            width: '40%',
            justifyContent: 'left'
        }

    },
    title: {
        textTransform: 'capitalize',
    },
    subtitile: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: '1rem',
        marginTop: '10px',
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
                            Protecting Our Rights, Fighting for Justice
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitile}>
                            A specialized law practice providing criminal defense representation, consultation, and training
                        </Typography>
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
