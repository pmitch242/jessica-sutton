import React from 'react';
import { makeStyles, Button, Container, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    button: {
        color: '#f9f9f9',
        width: '100%',
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize: '1rem',
        marginTop: '10px'
    }
})

const Service = ({ servicesList }) => {

    const classes = useStyle();

    const services = servicesList.map(service =>
        <div id={`service-section`}>
            <Container>
                <h1 className={`h1 ${service.name + '-service-h1'}`}>{service.name}</h1>
                <p>{service.paragraph}</p>
                

                <Paper >
                <div className={`service-image-div ${service.name + '-image'}`} />

                    <Container>
                        <div className="card-details">
                            <ul className='service-card-list'>
                                {service.list.map(item =>
                                    <li><span>{item}</span></li>
                                )}
                            </ul>
                            <Link to='/contact' className='no-a'><Button variant="contained" color='secondary' className={classes.button}>Request Consultation</Button></Link>
                        </div>

                    </Container>
                </Paper>
            </Container>
        </div>
    )

    return (
    <div style={{paddingBottom: '40px'}}>{services}</div>
        
    )
}

export default Service;
