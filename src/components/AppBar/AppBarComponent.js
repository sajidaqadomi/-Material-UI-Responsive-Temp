import React, { useState } from 'react'
import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core'
import { Cancel, Email, Notifications, Search } from '@material-ui/icons'
import { InputBase } from '@material-ui/core'

import useStyles from './styles'
import { Badge } from '@material-ui/core'


const AppBarComponent = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open })
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h5' className={classes.logo}>Sajida Dev</Typography>
                    <Typography variant='h5' className={classes.logoMob}>SAJIDA</Typography>
                    <div className={classes.search}>
                        <Search className={classes.searchIcon} />
                        <InputBase className={classes.searchInput} placeholder='Search...' />
                        <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                    </div>
                    <div className={classes.icons}>
                        <Search className={classes.searchMob} onClick={() => setOpen(true)} />
                        <Badge badgeContent={2} color='secondary' className={classes.icon}>
                            <Email />
                        </Badge>
                        <Badge badgeContent={3} color='secondary' className={classes.icon}>
                            <Notifications />
                        </Badge>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        />

                    </div>
                </Toolbar>
            </AppBar>

        </>

    )
}

export default AppBarComponent
