import React from 'react';
import { makeStyles, Typography, Button, Container } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        maxWidth: '600px',
        marginTop: '175px',
        color: '#e9e9e9'
    },
    button: {
        color: '#d8973c',
        borderColor: '#d8973c',
        marginTop: '40px'
    },
    title: {
        color: '#e9e9e9',
        textTransform: 'capitalize',
        fontWeight: 'bolder'
    },
    subtitle: {
        // color: '#d8973c',
        fontWeight: '100'
    }
})

const Intro = () => {
    const classes = useStyle();

    return (
            <Container id='intro'>
                <div className={classes.container}>
                    <Typography variant='h3' className={classes.title}>
                        Fugiat dolor laboris culpa ad labore incididunt                   </Typography>
                    <br />
                    <Typography variant='subtitle2' className={classes.subtitle}>
                        Fugiat dolor laboris culpa ad labore nostrud reprehenderit aute incididunt nostrud ipsum commodo enim.
                        Commodo ad proident cillum labore qui sunt non
                    </Typography>
                    <br />
                    <Button variant='outlined' className={classes.button}>
                        Request Free Consultation
                    </Button>
                </div>
            </Container>
    )
}

export default Intro;
