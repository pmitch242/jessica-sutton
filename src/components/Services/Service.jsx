import React from 'react';
import { makeStyles, Button, Container, Paper, Grid, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Title from '../Title';

const useStyle = makeStyles({
    button: {
        color: '#f9f9f9',
        width: '100%',
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontSize: '1rem',
        marginTop: '10px'
    },
    divider: {
        margin: '50px auto'
    },
    paper: {
        borderRadius: '0 4px 4px 0',
    }
})

const Service = ({ servicesList }) => {

    const classes = useStyle();

    const services = servicesList.map(service =>
        <div id={`service-section`} key={service.name}>
            <Container>
                <div className="title-div">
                    <Title name={service.name} />
                    <h6 className="h6">How we can help</h6>
                    <p className="p summary">{service.summary}</p>
                    <p className="p paragraph">{service.paragraph}</p>
                </div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={7}>
                        <div className={`service-image-div ${service.name + '-image'}`} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Paper className={classes.paper} elevation={0}>
                            <Container>
                                <div className="card-details">
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

            <Divider className={classes.divider} />
        </div>
    )

    return (
        <div>{services}</div>

    )
}

export default Service;
