import React from 'react'
import { makeStyles, Divider } from '@material-ui/core'

const ServiceCard = (props) => {
    const useStyle = makeStyles({
        divider: {
            height: '3px',
            backgroundColor: '#d8973c',
        }
    })

    const classes = useStyle();

    return (
        <div className={props.name + '-service-card'}>
            <div className='service-card'>
                <h1 className='h1'>{props.title}</h1>
                <Divider className={classes.divider} />
                <span>Learn More</span>
            </div>
        </div>
    )
}

export default ServiceCard;
