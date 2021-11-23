import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const Post = ({ img, title }) => {
    const classes = useStyles()
    return (
        <Card raised elevation={6} className={classes.card}>
            <CardMedia className={classes.media} image={img} title='my post' />
            <CardContent>
                <Typography variant='h5' gutterBottom>{title}</Typography>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                    consectetur earum est.
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='primary'>SHARE</Button>
                <Button color='primary'>LEARN MORE</Button>
            </CardActions>

        </Card>
    )
}

export default Post
