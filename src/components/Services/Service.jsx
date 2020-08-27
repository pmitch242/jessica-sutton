import React from 'react';
import { makeStyles, Button, Container, Paper, Grid } from '@material-ui/core';
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
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={7}>
                        <div className={`service-image-div ${service.name + '-image'}`} />
                    </Grid>
                    <Grid itemxs={12} sm={5}>
                        <Paper>
                            <Container>
                                <div className="card-details">
                                    <p>{service.paragraph}</p>

                                    <ul className='service-card-list'>
                                        {service.list.map(item =>
                                            <li key={item}><span>{item}</span></li>
                                        )}
                                    </ul>
                                    <Link to='/contact' className='no-a'><Button variant="contained" color='secondary' className={classes.button}>Request Consultation</Button></Link>
                                </div>
                            </Container>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

    return (
        <div>{services}</div>

    )
}

export default Service;
