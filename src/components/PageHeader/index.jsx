import React from 'react'

import './page-header.css';

const PageHeader = (props) => {
    return (
        <div id='page-header'>
            <h1>This is the {props.name} header</h1>
        </div>
    )
}

export default PageHeader
