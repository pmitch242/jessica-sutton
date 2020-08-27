import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';

import './title.css';

const useStyle = makeStyles({
    divider: {
        backgroundColor: '#d8973c',
        height: '6px',
        width: '50px',
        margin: 'auto auto 10px',
        '@media (min-width:600px)': {
            height: '5px',
            margin: 'auto 0 5px',
        }
    }
})

const Title = ({ name }) => {
    const classes = useStyle();

    return (
        <div id='title'>
            <Divider className={classes.divider} />
            <h2 className="h2">{name}</h2>
        </div>
    )
}

export default Title;