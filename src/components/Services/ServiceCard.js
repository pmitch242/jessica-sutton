import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Card, CardContent } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        textAlign: 'center',
        color: '#001639'
    },
    div: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center'
    },
    link: {
        textDecoration: 'none',
        color: '#001639',
        fontSize: '1rem',
        fontFamily: `'Noto Sans TC', sans-serif`,
        fontWeight: '500',
        letterSpacing: '0.75px',
    },
    iconDiv: {
        color: '#001639',
        margin: '15px auto',
        width: '80px'
    },
    icon: {
        width: 'inherit',
        color: '#001639',
    },

})

const ServiceCard = ({ icon, title, link }) => {
    const classes = useStyle();

    return (
        <Card className={`service-card ${classes.root}`}>
            <CardContent>
                <div className={classes.div}>
                    <Typography variant='h3' color='primary'>{title}</Typography>
                    <div className={classes.iconDiv}>
                        <img alt={title} src={icon} className={classes.iconDiv}/>
                    </div>
                        <Link to={`${link}`} className={classes.link}>Learn More</Link>
                </div>
            </CardContent>
        </Card>
    )
}

export default ServiceCard
