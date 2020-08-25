import React from 'react';
import { makeStyles, Button, Container, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Service = ({ servicesList }) => {

    const services = servicesList.map(service =>
        <div id={`${service.name + '-section'}`}>
            <div id='service-section'>
                <Container>
                    <h1 className='h1'>{service.name}</h1>
                    <p>{service.paragraph}</p>
                    <Paper >
                        <Container>
                            <div className="card-details">
                                <h2 className='h2'>{service.name} Areas</h2>
                                <ul className='service-card-list'>
                                    {service.list.map(item =>
                                        <li>{item}</li>
                                    )}
                                </ul>
                                <Link to='/contact' className='no-a'><Button variant="contained" color='secondary'>Request Consultation</Button></Link>
                            </div>

                        </Container>
                    </Paper>
                </Container>
            </div>
        </div>
    )

    return (
            services
    )
}

export default Service;
