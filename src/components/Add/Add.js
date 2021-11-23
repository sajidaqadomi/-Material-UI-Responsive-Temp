import { Button, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from "./styles";

const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [visiblity, setVisiblity] = useState('Public')
    const [openAlert, setOpenAlert] = useState(false)

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.absolute}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Snackbar
                open={openAlert}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
            >
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Container className={classes.container}>
                    <form className={classes.form}>
                        <TextField label="Title" fullWidth className={classes.item} />
                        <TextField
                            label="Descrption"
                            multiline
                            rows={4}
                            defaultValue="Tell your story.."
                            variant="outlined"
                            fullWidth
                            className={classes.item}
                        />
                        <TextField select label="Visibility" value={visiblity} className={classes.item} onChange={(e) => setVisiblity(e.target.value)}>
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                        <div className={classes.item}>
                            <FormLabel component="legend">Who can comment?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel
                                    value="Everybody"
                                    control={<Radio size="small" />}
                                    label="Everybody"
                                />
                                <FormControlLabel
                                    value="My Friends"
                                    control={<Radio size="small" />}
                                    label="My Friends"
                                />
                                <FormControlLabel
                                    value="Nobody"
                                    control={<Radio size="small" />}
                                    label="Nobody"
                                />
                                <FormControlLabel
                                    value="Custom"
                                    disabled
                                    control={<Radio size="small" />}
                                    label="Custom (Premium)"
                                />
                            </RadioGroup>
                        </div>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ marginRight: 20 }}
                            onClick={() => setOpenAlert(true)}
                        >CREATE</Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => setOpen(false)}

                        >cancel</Button>
                    </form>
                </Container>
            </Modal>
        </>
    );
};

export default Add;
