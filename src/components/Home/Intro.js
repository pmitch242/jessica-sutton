import React from 'react';
import { makeStyles, Typography, Button, Container } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        maxWidth: '600px',
        color: '#ffffff',
        paddingTop: '200px'
    },
    button: {
        color: '#e9e9e9',
        border: '2px solid #d8973c',
        marginTop: '20px',
    },
    title: {
        textTransform: 'capitalize',
    },
    subtitile: {
        color: '#e9e9e9',
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
                            Fugiat dolor laboris culpa ad labore
                    </Typography>
                        <br />
                        <Typography variant='subtitle1'>
                            Fugiat dolor laboris culpa ad labore nostrud reprehenderit aute incididunt nostrud ipsum commodo enim.
                            Commodo ad proident cillum labore qui sunt non
                    </Typography>
                        <br />
                        <Button variant='outlined' className={classes.button}>
                            Request Free Consultation
                </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Intro;
