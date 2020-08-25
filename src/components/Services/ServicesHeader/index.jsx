import React from 'react'
import { Container, Divider, makeStyles } from '@material-ui/core'

// import './page-header.css';

const useStyles = makeStyles({
    divider: {
        height: '1px',
        width: '50%',
        backgroundColor: '#001639',
        margin: 'auto',
        borderRadius: '20px',
    },
})

const Header = (props) => {
    const classes = useStyles();

    return (
        <div id='services-header'>
            <div id='services-header-background'>
                <Container>
                    <div id='decription-container'>
                        <h1>Services</h1>
                        <Divider className={classes.divider}/>
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
                <div className='circle-background' />
            </div>
        </div>
    )
}

export default Header;
