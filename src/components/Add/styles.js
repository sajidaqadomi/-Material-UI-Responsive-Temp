import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    absolute: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
    container: {
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50% )',
        width: '50%',
        height: 'auto',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100vh'

        }


    },
    item: {
        marginBottom: theme.spacing(3),

    }
}))