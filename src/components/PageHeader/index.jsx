import React from 'react'
import {Container} from '@material-ui/core'

import './page-header.css';

const PageHeader = (props) => {
    return (
        <div id='page-header'>
            <Container>
                <h1>Header in Container?</h1>
            </Container>
        </div>
    )
}

export default PageHeader
