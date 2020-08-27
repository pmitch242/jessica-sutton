import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core';

import Header from '../Header';
import Service from './Service';
import ContactContent from '../Contact/ContactContent';

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
        summary:'Providing case consultation services for nearly a decade to individual defense teams, law firms, and federal and state defender agencies around the country.',
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
        summary:`Providing tailor-made training on the development, presentation, and litigation of certain types of cases, such as compassionate release, parole, and juvenile re-sentencings.`,
        list: [
            'Litigating COVID-19 issues',
            'Investigating brain dysfunction and cognitive disorders',
            'Trauma, mental health issues, and working with experts',
            'Using social media to conduct investigations',
            'Conducting effective witness interviews',
            'Developing mitigation themes and theories',
            'Building and managing client relationships',
            'Introduction to case management ',
        ],
    },
];

const Services = () => {
    const classes = useStyle();

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div id='services' className={classes.root}>
            {/* Header */}
            <Header name='services' />

            {/* List of service */}
            <Service servicesList={servicesList}/>

            {/* Contact */}
            <ContactContent />
        </div>
    )
}

export default Services;
