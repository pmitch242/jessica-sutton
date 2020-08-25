import React from 'react';
import { makeStyles } from '@material-ui/core';

import ServicesHeader from './ServicesHeader';
import Service from './Service';

import './services.css'

const useStyle = makeStyles({
    root: {
        backgroundColor: '#f9f9f9',
    },
})

const servicesList = [
    {
        name: 'consultation',
        paragraph: 'For nearly a decade, Jessica Sutton has been providing case consultation services to individual defense teams, law firms, and federal and state defender agencies around the country, including agencies and teams in California, Washington D.C., Pennsylvania, Oklahoma, Missouri, Mississippi, and Texas, among others.',
        list: [
            'Trial strategy',
            'Imitigation investigation',
            'Developing life history narratives',
            'Sentencing hearings',
            'Parole proceedings',
            'Juvenile re-sentencings',
            'Compassionate release motions',
            'Identifying and retaining experts',
            'File organization and mitigation tools',
            'CoVid-19 litigation',
            'Funding litigation',
        ],
    },
    {
        name: 'training',
        paragraph: `Jessica Sutton regularly teaches as faculty at regional and national conferences. Ms. Sutton also provides training to law firms and federal and state defender organizations. In addition to the topics above, Ms. Sutton offers broad training on the development, presentation, and litigation of certain types of cases, such as compassionate release, parole, and juvenile re-sentencings. Ms. Sutton's trainings are tailor-made to fit the needs of each client and range from hands-on exercises to informational presentations.`,
        list: [
            'Litigating CoVid-19 Issues',
            'Investigating Brain Dysfunction and Cognitive Disorders',
            'Trauma, Mental Health Issues, and Working with Experts',
            'Using Social Media to Conduct Investigations',
            'Conducting Effective Witness Interviews',
            'Developing Mitigation Themes and Theories',
            'Building and Managing Client Relationships',
            'Introduction to Case Management ',
        ],
    },
];

const Services = () => {
    const classes = useStyle();

    return (
        <div id='services' className={classes.root}>
            {/* Header */}
            <ServicesHeader name='Sevices Page' />

            {/* Service */}
            <Service servicesList={servicesList}/>
        </div>
    )
}

export default Services;
