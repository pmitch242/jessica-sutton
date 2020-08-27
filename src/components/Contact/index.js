import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core';

import Header from '../Header';
import ContactContent from './ContactContent';

import './contact.css'

const useStyle = makeStyles({
    root: {
        backgroundColor: '#e9e9e9',
    },
})

const Contact = () => {
    const classes = useStyle();
    
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div id='contact' className={classes.root}>
            {/* Header */}
            <Header name='contact' />

            {/* Contact Content */}
            <ContactContent />
        </div>
    )
}

export default Contact;
