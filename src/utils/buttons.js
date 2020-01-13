import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export function SaveButton() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >Save</Button>
        </div>
    );
}

export function DeleteButton({onClick}) {
    const classes = useStyles();

    return (
        <div>
            <Button
            onClick={onClick}
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >Delete</Button>

           
        </div>
    );
}