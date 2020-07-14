import React from 'react';

import { makeStyles, TextField, Grid, Button, Paper } from '@material-ui/core'

const useStyle = makeStyles({
    root: {
        padding: '16px',
    },
    gridRoot: {
        marginBottom: '20px'
    },
    div: {
        marginBottom: '35px'
    },
    label: {
        color: '#001639'
    },
    button: {
        width: '50%',
        // border: '#d8973c 2px solid',
        textTransform: 'capitalize',
        marginBottom: '10px',
    },
})

const ContactForm = () => {
    const classes = useStyle();

    return (
        <Paper className={classes.root}>
                <form noValidate autoComplete="off">
                    <Grid container spacing={3} className={classes.gridRoot}>
                        <Grid item xs={12} sm={6}>
                            <label className={classes.label}>Name</label>
                            <TextField
                                id="name"
                                placeholder='Enter your full name'
                                color='secondary'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <label className={classes.label}>Phone</label>
                            <TextField
                                id="filled-basic"
                                color='secondary'
                                placeholder='Day time number'
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <div className={classes.div}>
                        <label className={classes.label}>Email</label>
                        <TextField
                            id="filled-basic"
                            fullWidth
                            placeholder='Ex. email@mail.com'
                            color='secondary'
                        />
                    </div>
                    <div className={classes.div}>
                        <label className={classes.label}>Message</label>
                        <TextField
                            id="filled-basic"
                            multiline
                            rows={3}
                            fullWidth
                            placeholder='Brief Description Of Your Case'
                            color='secondary'
                        />
                    </div>
                    <Button
                        color='secondary'
                        size='large'
                        className={classes.button}
                        variant='outlined'
                    >
                        Submit
                    </Button>
                </form>
        </Paper>
    )
}

export default ContactForm;
