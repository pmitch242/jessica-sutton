import React from 'react'
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';

import jessImage from './jessica.png'

const useStyle = makeStyles({
    grid: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '20px'
    }
})

const AboutContent = () => {
    const classes = useStyle();

    return (
        <div id='about-content'>
            <Container>
                <Paper>
                <Grid container spacing={0} className={classes.grid}>
                    <Grid item xs={12} sm={4}>
                        <div className="jess-image-div">
                            <h1 className='h1'>Jessica Sutton</h1>
                            <img src={jessImage} alt="Jessica Sutton" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div className='about-p-div'>
                            <h1 className='h1'>Jessica Sutton</h1>
                            <p>Jessica Sutton has over a decade of experience in representing death-eligible and death-sentenced clients as both an attorney and a mitigation specialist. In her role as an attorney, Ms. Sutton has represented clients in state and federal proceedings, including state post-conviction and federal habeas corpus proceedings, lethal injection litigation, Section 1983 civil rights lawsuits, and clemency.</p>
                            <p>As a capital mitigation specialist, Ms. Sutton has conducted dozens of mitigation investigations around the country and at nearly every stage of proceedings--from pre-trial to clemency. Ms. Sutton is experienced in developing multi-generational life history narratives and conducting investigations related to competency and Atkins. Ms. Sutton is also trained in identifying signs and symptoms of mental illness, trauma interviewing, and working with a variety of experts. </p>
                            <p>In addition to capital work, Ms. Sutton regularly conducts mitigation investigations in felony sentencings, parole cases, and cases petitioning for sentence modifications for individuals sentenced to life as juveniles. She also travels around the country to present at conferences concerning mitigation investigation and frequently trains and consults with teams nationwide.</p>
                        </div>
                    </Grid>
                </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default AboutContent;
