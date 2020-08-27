import React from 'react'
import { makeStyles, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const useStyle = makeStyles({
        divider: {
            height: '3px',
            backgroundColor: '#d8973c',
        }
    })

    const classes = useStyle();

    return (
        <Link to='/services'>
            <div className={props.name + '-service-card'}>
                <div className='service-card'>
                    <h3 className='h3'>{props.title}</h3>
                    <Divider className={classes.divider} />
                    <span>Learn More</span>
                </div>
            </div>
        </Link>
    )
}

export default ServiceCard;
