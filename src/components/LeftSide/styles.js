import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({

    offset: theme.mixins.toolbar,

    container: {
        borderRight: `1px solid ${theme.palette.grey[200]}`,
        backgroundColor: theme.palette.common.white,
        color: theme.palette.grey[600],
        position: 'sticky',
        height: '100vh',
        top: 0,
        paddingTop: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white

        }
        // bottom: 0,
        // left: 0,
        // width: '100%'



    },
    item: {
        display: 'flex',
        marginBottom: theme.spacing(3),
        alignItems: 'center',
        '&:hover': {
            textDecoration: 'none',
        },

        color: theme.palette.grey[600]


    },
    icon: {
        marginRight: theme.spacing(1),
        fontSize: '18px'

        // 

    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }

    }

}))