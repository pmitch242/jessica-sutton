import React from 'react';
import { makeStyles } from '@material-ui/core';

import Header from '../Header';
import ContactContent from './ContactContent';

const useStyle = makeStyles({
    root: {
        backgroundColor: '#e9e9e9',
    },
})

const Contact = () => {
    const classes = useStyle();

    return (
        <div id='about' className={classes.root}>
            {/* Header */}
            <Header name='contact' />

            {/* Contact Content */}
            <ContactContent />
        </div>
    )
}

export default Contact;
