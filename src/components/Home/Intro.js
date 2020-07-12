import React from 'react';
import { makeStyles, Typography, Button, Container } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        maxWidth: '600px',
        marginTop: '175px',
    }
})

const Intro = () => {
    const classes = useStyle();

    return (
            <Container id='intro'>
                <div className={classes.container}>
                    <Typography variant='h4'>
                        Fugiat dolor laboris culpa ad labore incididunt nostrud ipsum.
                </Typography>
                    <br />
                    <Typography variant='subtitle1'>
                        Fugiat dolor laboris culpa ad labore nostrud reprehenderit aute incididunt nostrud ipsum commodo enim.
                        Commodo ad proident cillum labore qui sunt non.
                </Typography>
                    <br />
                    <Button variant='outlined'>
                        Request Free Consultation
                </Button>
                </div>
            </Container>
    )
}

export default Intro;
