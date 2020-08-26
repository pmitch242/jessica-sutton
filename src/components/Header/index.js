import React from 'react'
import { Container } from '@material-ui/core'

import './header.css'

const Header = ({ name }) => {

    return (
        <div className='header-container'>
            <div className='header-bg'></div>
            <div className="header">
                <Container >
                    <div className="intro-div">
                        <h1 className='h1'>{name}</h1>
                    </div>
                </Container>
            </div>

            <div className="header-text-bg">
                <Container >
                    <div className="intro-div">
                        <h1 className='h1'>{name}</h1>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header;
