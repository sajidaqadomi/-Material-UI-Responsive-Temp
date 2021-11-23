import React from 'react'
import {
    Bookmark,
    List,
    ExitToApp,
    Home,
    Person,
    PhotoCamera,
    PlayCircleOutline,
    Settings,
    Storefront,
    TabletMac,
    Camera,
} from "@material-ui/icons";
import { Container, Link, Typography } from '@material-ui/core';

import useStyles from './styles'
import { mergeClasses } from '@material-ui/styles';

const LeftSide = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.offset} />
            <Link href={`#`} className={classes.item} >
                <Home className={classes.icon} />
                <Typography className={classes.text}>Homepage</Typography>
            </Link>
            <Link href="#" className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>Friends</Typography>
            </Link>
            <Link href="#" className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.text}>Lists</Typography>
            </Link>
            <Link href="#" className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.text}>Camera</Typography>
            </Link>
            <Link href="#" className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text}>Videos</Typography>
            </Link>
            <Link href="#" className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.text}>Apps</Typography>
            </Link>
            <Link href="#" className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text}>Collections</Typography>
            </Link>
            <Link href="#" className={classes.item}>

                <Storefront className={classes.icon} />
                <Typography className={classes.text}>Market Place</Typography>
            </Link>
            <Link href="#" className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>Settings</Typography>
            </Link>
            <Link href="#" className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text}>Logout</Typography>
            </Link>

        </Container>
    )
}

export default LeftSide
