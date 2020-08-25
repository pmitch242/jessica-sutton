import React from 'react'
import { Button, Container, makeStyles } from '@material-ui/core'

import jessicaImage from './jessica-image.png';

const useStyle = makeStyles({
    button: {
        width: '100%',
        margin: '30px auto',
        color: '#001639',
        letterSpacing: '0.75px',
        fontWeight: 600,
    }
})

const Header = () => {
    const classes = useStyle();

    return (
        <div className='about-header-container'>
            <div className="about-header">
                <Container style={{ marginTop: '125px' }}>
                    <div className="about-intro-div">
                        <h1 className='h1'>Hey I'm <span>Jessica!</span></h1>
                        <p>
                            Approaching every matter with strategic thinking,
                            creative elements and proven results.
                    </p>
                        <Button
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                        >
                            Let's Talk!
                        </Button>
                    </div>

                    <div className="contact-info-div">
                        <div className="contact-items">
                            <div className="icon"></div>
                            <div className="contact-items-content">
                                <p className="p">Call Now</p>
                                <h3 className="h3">208-503-9381</h3>
                            </div>
                        </div>
                        <div className="contact-items">
                            <div className="icon"></div>
                            <div className="contact-items-content">
                                <p className="p">Email Me</p>
                                <h3 className="h3">jess.el.sutton@gmail.com</h3>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-div">
                        <img src={jessicaImage} alt="Jessica" className="jessica-photo" />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header;
