import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, Typography, Button, Container } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '680px',
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
        fontSize: '1.15rem',
        letterSpacing: '2px',
        fontWeight: '400',
        textTransform: 'capitalize',
        '@media (min-width:600px)': {
            margin: '50px 0 0',
            width: '40%',
        }

    },
    title: {
        textTransform: 'uppercase',
        marginBottom: '15px',
        fontFamily: `'EB Garamond', serif`,
        fontSize: '33px',
        '@media (min-width:600px)': {
            fontSize: '48px'
        }
    },
    subtitile: {
        color: '#ffffff',
        textAlign: 'center',
        marginTop: '10px',
        fontFamily: `"Open Sans", sans-serif`,
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
                            A specialized law practice providing criminal defense representation, consultation, and training.
                        </Typography>
                        <Link to='/contact' className='no-a'>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                Request Consultation
                        </Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Intro;
