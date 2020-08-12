import React from 'react'
import { Container, makeStyles } from '@material-ui/core'

import './page-header.css';

const useStyles = makeStyles({
    button: {},
})

const Header = (props) => {
    const classes = useStyles();

    return (
        <div id='services-header'>
            <div id='background'>
                <Container>
                    <div id='decription-container'>
                        <h1>Practice Areas</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.
                            Lorem ipsum dolor sit amet, consetetur sadipscing.
                    </p>

                    </div>
                    <div className="services-btn-container">
                        <ul className='no-ul services-list'>
                            <li>Consultation</li>
                            <li>Training</li>
                            <li>Direct Representation</li>
                            <li>Mentorship</li>
                        </ul>
                    </div>
                </Container>
                <div id='circle-backgroun'/>
            </div>
        </div>
    )
}

export default Header;
