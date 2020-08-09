import React from 'react'

import ServiceCard from './ServiceCard';

const ServiceList = () => {
    return (
        <div>
            <ServiceCard
                name='consult'
                title='Consultation'
            />

            <ServiceCard
                name='direct-rep'
                title='Direct Representation'
            />

            <ServiceCard
                name='training'
                title='Training'
            />
            
            <ServiceCard
                name='mentor'
                title='Mentorship'
            />

        </div>
    )
}

export default ServiceList
