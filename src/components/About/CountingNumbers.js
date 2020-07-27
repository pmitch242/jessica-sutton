import React from 'react'

import { makeStyles, Box } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#001639',
        padding: '15px 0px',
        borderRadius: '20px',
        color: '#fff',
        fontFamily: `'Noto Sans TC', sans-serif`,
        lineHeight: '20px',
    },
    number: {
        fontSize: '2rem',
        marginRight: '2px',
        fontWeight: 'bolder',
    },
    plus: {
        fontSize: '1.75rem',
        position: 'absolute',
        color: '#d8973c',
        fontWeight: '900',
    },
    title: {
        fontSize: '1.5rem',
        textTransform: 'capitalize',
        fontWeight: '400',
        letterSpacing: '1px',

    },
})
const CountingNumbers = ({ number, title }) => {
    const classes = useStyle();

    return (
        <Box id='counting-numbers' className={classes.root}>
            <div style={{ marginBottom: '10px' }}>
                <span className={classes.number}>{number}</span>
                <span className={classes.plus}>+</span>
            </div>
            <span className={classes.title}>{title}</span>
        </Box>
    )
}

export default CountingNumbers
