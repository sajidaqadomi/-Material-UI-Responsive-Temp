import { Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import React from 'react'

import useStyles from './styles'

const RightSide = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.offset} />
            <div>
                <Typography gutterBottom className={classes.title}>Online Friends</Typography>
                <AvatarGroup max={5} className={classes.avatarGroup}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://v4.mui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                        alt="Travis Howard"
                        src="https://v4.mui.com//static/images/avatar/2.jpg"
                    />
                    <Avatar
                        alt="Cindy Baker"
                        src="https://v4.mui.com//static/images/avatar/3.jpg"
                    />
                    <Avatar alt="Agnes Walker" src="https://v4.mui.com//static/images/avatar/3.jpg" />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://v4.mui.com//static/images/avatar/6.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://v4.mui.com//static/images/avatar/7.jpg"
                    />
                    <Avatar
                        alt="Trevor Henderson"
                        src="https://v4.mui.com//static/images/avatar/8.jpg"
                    />
                </AvatarGroup>
            </div>
            <div>
                <Typography gutterBottom className={classes.title}>Gallery</Typography>

                <ImageList rowHeight={160} className={classes.imageList} cols={3} style={{ marginBottom: 20 }}>
                    <ImageListItem>
                        <img
                            src="https://v4.mui.com//static/images/image-list/breakfast.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://v4.mui.com//static/images/image-list/burgers.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://v4.mui.com//static/images/image-list/camera.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://v4.mui.com//static/images/image-list/morning.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://v4.mui.com//static/images/image-list/hats.jpg"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://v4.mui.com//static/images/image-list/vegetables.jpg"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>
            </div>
            <Typography className={classes.title} gutterBottom>
                Categories
            </Typography>
            <Link href="#" className={classes.link} variant="body2">
                Sport
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Food
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Music
            </Link>
            <Divider flexItem style={{ marginBottom: 5 }} />
            <Link href="#" className={classes.link} variant="body2">
                Movies
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Science
            </Link>
            <Link href="#" className={classes.link} variant="body2">
                Life
            </Link>

        </Container>
    )
}

export default RightSide
