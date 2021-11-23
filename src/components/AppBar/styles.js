import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    cancel: {
        display: 'none',
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        }

    },
    toolbar: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }

    },
    logoMob: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }

    },
    search: {
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, .15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, .25)

        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
            width: '65%',
            display: ({ open }) => open ? 'flex' : 'none'

        }

    },
    searchInput: {
        color: theme.palette.common.white,
        flex: 1,

    },
    searchIcon: {
        margin: theme.spacing(0, 2)

    },
    searchMob: {
        margin: theme.spacing(0, 2),
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'

        }
    },

    icons: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: ({ open }) => open ? 'none' : 'flex'
        }

    },
    icon: {
        marginRight: theme.spacing(2)
    }

}))