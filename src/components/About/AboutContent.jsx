import React from 'react'
import { Container, Grid } from '@material-ui/core';

import Title from '../Title';

import jessImage from './jessica.png'

const AboutContent = ({barMargin}) => {
    return (
        <div id='about-content'>
            <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={4}>
                            <div className="jess-image-div">
                                {/* <div id='about-greeting'>
                                    <h3 className='h3'>Meet</h3>
                                    <h2 className='h2'>Jessica Sutton</h2>
                                </div> */}
                                <Title name='Jessica Sutton' barMargin='auto 0 5px'/>
                                <img src={jessImage} alt="Jessica Sutton" />
                            </div> 
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <div className='about-p-div'>
                                <p className='p'>Jessica Sutton has over a decade of experience in representing death-eligible and death-sentenced clients as both an attorney and a mitigation specialist. In her role as an attorney, Ms. Sutton has represented clients in state and federal proceedings, including state post-conviction and federal habeas corpus proceedings, lethal injection litigation, Section 1983 civil rights lawsuits, and clemency.</p>
                                <p className='p'>As a capital mitigation specialist, Ms. Sutton has conducted dozens of mitigation investigations around the country and at nearly every stage of proceedings--from pre-trial to clemency. Ms. Sutton is experienced in developing multi-generational life history narratives and conducting investigations related to competency and Atkins. Ms. Sutton is also trained in identifying signs and symptoms of mental illness, trauma interviewing, and working with a variety of experts. </p>
                                <p className='p'>In addition to capital work, Ms. Sutton regularly conducts mitigation investigations in felony sentencings, parole cases, and cases petitioning for sentence modifications for individuals sentenced to life as juveniles. She also travels around the country to present at conferences concerning mitigation investigation and frequently trains and consults with teams nationwide.</p>
                            </div>
                        </Grid>
                    </Grid>
            </Container>
        </div>
    )
}

export default AboutContent;
