import React from 'react'
import { makeStyles, Typography, Card, CardContent } from '@material-ui/core';

const useStyle = makeStyles({

})

const ServiceCard = () => {
    const classes = useStyle();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
          <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ServiceCard
