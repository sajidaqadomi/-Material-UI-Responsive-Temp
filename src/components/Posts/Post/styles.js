import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(4),
    },
    media: {
        height: '250px',
        [theme.breakpoints.down('sm')]: {
            height: '150px'
        }

    }

}))