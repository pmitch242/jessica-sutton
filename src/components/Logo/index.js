import React from 'react';

import {Box, Typography, makeStyles} from '@material-ui/core';
import CourtIcon from '@material-ui/icons/AccountBalanceOutlined';

const useStyle = makeStyles({
    h3: {
        fontSize: '1.75rem',
        fontFamily: `'Dancing Script', cursive`,
        margin: 0,
        lineHeight: 1,
        '@media (min-width:600px)': {
            fontSize: '2rem',
        }
    }
})

const Logo = () => {
    const classes = useStyle();

    return (
        <Box className='logo' display='flex' alignItems="flex-end">
            <CourtIcon style={{ fontSize: 35, marginRight: '5px', color: '#d8973c' }}/>
            <Typography className={classes.h3} variant='h3'>JE Sutton llc.</Typography>
        </Box>
    )
}

export default Logo;
