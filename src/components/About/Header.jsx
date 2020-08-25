import React from 'react'
import { Button } from '@material-ui/core'

const Header = () => {
    return (
        <div className='about-header-container'>
            <div className="about-header">
                <div className="about-intro-div">
                    <h1>Hey There, I'm Jessica!</h1>

                    <p>Approaching every matter with strategic thinking, creative elements and proven results.</p>

                    <Button variant='contained' color='secondary'>Let's Talk!</Button>
                </div>
                <div className="contact-info-div">
                    <div className="contact-items">
                        <div className="icon"></div>
                        <div className="contact-items-content">
                            <p className="p">Give Me a Call</p>
                            <h3 className="h3">208 503 9381</h3>
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
            </div>
        </div>
    )
}

export default Header;
