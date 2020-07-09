import React, { Component } from 'react';
import { Container } from '@material-ui/core';


export default class NotFound extends Component {
    render() {
        return (
            <Container fixed>
                <h3>Oh no... i just didnt plan for this... 
                    i do apologize. ummm... try going back maybe?
                </h3>
                <h1>Bye :)</h1>
            </Container>
        )
    }
}