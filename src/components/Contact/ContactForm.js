import React from 'react';

import { makeStyles, TextField, Button } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        padding: '25px',
    },
    gridRoot: {
        marginBottom: '20px'
    },
    div: {
        marginBottom: '35px'
    },
    label: {
        color: '#001639',
        fontFamily: `'Noto Sans TC', sans-serif`
    },
    button: {
        width: '100%',
        // border: '#d8973c 2px solid',
        textTransform: 'Uppercase',
        margin: 'auto auto 10px',
        color: '#f9f9f9',
        fontWeight: 'bold',
        letterSpacing: '1px'
    },
})

const ContactForm = () => {
    const classes = useStyle();

    return (
        <form noValidate autoComplete="off">
            <div className={classes.div}>
                <TextField
                    id="name"
                    label='Full Name*'
                    color='secondary'
                    fullWidth
                    variant="outlined"
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="email"
                    fullWidth
                    label='Email*'
                    color='secondary'
                    variant="outlined"
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="subjuct"
                    fullWidth
                    label='Subject*'
                    color='secondary'
                    variant="outlined"
                />
            </div>
            <div className={classes.div}>
                <TextField
                    id="message"
                    multiline
                    rows={3}
                    fullWidth
                    label='Message*'
                    color='secondary'
                    variant="outlined"
                />
            </div>
            <div className='contact-submit-btn-div'>
                <Button
                    color='secondary'
                    size='large'
                    variant="contained"
                    className={classes.button}
                >
                    Submit
            </Button>

            </div>
        </form>
    )
}

export default ContactForm;
