import React from 'react';

import {Box, Typography, makeStyles} from '@material-ui/core';
import CourtIcon from '@material-ui/icons/AccountBalanceOutlined';

const useStyle = makeStyles({
    h3: {
        fontSize: '2.25rem',
        fontFamily: `'Noto Serif', serif`,
        margin: 0,
        lineHeight: 1
    }
})

const Logo = () => {
    const classes = useStyle();

    return (
        <Box className='logo' display='flex' alignItems="flex-end">
            <CourtIcon style={{ fontSize: 40, marginRight: '5px', color: '#d8973c' }}/>
            <Typography className={classes.h3} variant='h3'>Sutton</Typography>
        </Box>
    )
}

export default Logo;
