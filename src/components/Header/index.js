import React from 'react'
import { Container } from '@material-ui/core'

import './header.css'

const Header = ({ name }) => {

    return (
        <div className='header-container'>
            <div className="header">
                <Container >
                    <h1 className='h1'>{name}</h1>
                </Container>
            </div>
        </div>
    )
}

export default Header;
