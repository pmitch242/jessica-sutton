import React from 'react'
import { Container, Grid } from '@material-ui/core';

import Title from '../Title';
import ContactForm from './ContactForm';

const ContactContent = () => {

    return (
        <div id='contactContent' >
            <Container >
                <div className="contact-greeting-div">
                    <Title name='Leave your information' />
                    <h6 className="h6">and we will get back to you.</h6>
                    <p classNmae='p'>Please provide your name, contact information, and a brief description of your inquiry.</p>
                </div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={8}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className='contact-info-card'>
                            this is an info card
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default ContactContent;
