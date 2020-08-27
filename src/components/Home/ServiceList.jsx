import React from 'react'
import { Grid } from '@material-ui/core';

import ServiceCard from './ServiceCard';

const ServiceList = () => {


    return (
        <div id='services-list'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                        <ServiceCard
                            name='consult'
                            title='Consultation'
                            link='consultation'
                        />
                </Grid>


                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard
                        name='direct-rep'
                        title='Direct Representation'
                        link='direct-representation'
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard
                        name='training'
                        title='Training'
                        link='training'
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard
                        name='mentor'
                        title='Mentorship'
                        link='mentorship'
                    />
                </Grid>

                <Grid item sm={12} md={8}>
                    <div id='services-info-card'>
                        <h3 className='h3'>How can we help?</h3>
                        <p>
                            JE Sutton LLC provides tailored services that are responsive to each individual client's need,
                            whether the client is an individual facing criminal charges,
                            a law firm seeking training, or a defender agency in need of case consultation
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ServiceList
