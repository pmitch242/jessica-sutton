import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button, Container } from '@material-ui/core';

// styles
const useStyles = makeStyles((theme) => {

})

const Header = () => {
    return (
        <Box component='div'>
            <Container>
                <Typography variant='h4'>We do our best to be the best</Typography>
                <Typography variant='h6'>Where service is free.</Typography>
                <Button>Contact Me</Button>
            </Container>
        </Box>
    )
}

export default Header
