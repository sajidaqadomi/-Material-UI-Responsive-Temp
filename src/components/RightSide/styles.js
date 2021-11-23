import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(2),
        position: 'sticky',
        top: 0
    },
    avatarGroup: {
        marginBottom: theme.spacing(4)
    },
    title: {
        fontWeight: 500,
        fontSize: 16,
        color: theme.palette.grey[600]
    },
    link: {
        marginRight: theme.spacing(2),
        fontSize: 16,
        color: theme.palette.grey[500],



    }
}))