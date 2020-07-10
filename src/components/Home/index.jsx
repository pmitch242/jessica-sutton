import React, { Component } from 'react';
import { Container } from '@material-ui/core';

import Header from './Header';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container fixed>
                </Container>
            </div>
        )
    }
}