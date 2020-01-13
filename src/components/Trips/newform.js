import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {editFlight} from "../../store/actions"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                <span role='img'>
                    kidsFly ✈🎈🌤☁
                    </span>
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage:
            'url(https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?cs=srgb&dl=silhouette-photo-of-man-throw-paper-plane-1262304.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

function UpdateTripForm(props,{dispatch,history}) {

    const classes = useStyles();
    const initialTripState = {
        airport_name: '',
        airline: '',
        flight_number: '',
        departure_time: '',
        carryon_items: '',
        checked_items: 1,
        children: 1,
        special_needs: 1,
    };
    const [trip, setTrip] = useState(initialTripState);

    const handleChange = event => {
        setTrip({ ...trip, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        const itemToEdit = props.flights.find(e => `${e.id}` === props.match.params.id)
        itemToEdit && setTrip(itemToEdit)
    }, [props.flights, props.match.params.id])

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(editFlight(trip, history))
        reset();
        history.push('/dashboard');
    };

    const reset = () => {
        setTrip(initialTripState);
    };
    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        update trip
          </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            onSubmit={handleSubmit}
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            label='airport_name'
                            type='airport_name'
                            id='airport_name'
                            name='airport_name'
                            autoComplete='airport_name'
                            autoFocus
                            onChange={handleChange}
                            value={trip.airport_name}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='airline'
                            label='airline'
                            type='airline'
                            id='airline'
                            autoComplete='current-airline'
                            onChange={handleChange}
                            value={trip.airline}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='flight_number'
                            label='flight_number'
                            type='flight_number'
                            id='flight_number'
                            autoComplete='current-flight_number'
                            onChange={handleChange}
                            value={trip.flight_number}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='departure_time'
                            label='departure_time'
                            type='departure_time'
                            id='departure_time'
                            autoComplete='current-departure_time'
                            onChange={handleChange}
                            value={trip.departure_time}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            label='carryon_items'
                            type='carryon_items'
                            id='carryon_items'
                            name='carryon_items'
                            autoComplete='carryon_items'
                            autoFocus
                            onChange={handleChange}
                            value={trip.carryon_items}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            label='checked_items'
                            type='checked_items'
                            id='checked_items'
                            name='checked_items'
                            autoComplete='checked_items'
                            autoFocus
                            onChange={handleChange}
                            value={trip.checked_items}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='children'
                            type='children'
                            id='children'
                            autoComplete='current-children'
                            onChange={handleChange}
                            value={trip.children}

                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='special_needs'
                            type='special_needs'
                            id='special_needs'
                            autoComplete='current-special_needs'
                            onChange={handleChange}
                            value={trip.special_needs}
                        />


                        <Button
                            type='reset'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                            inactive='true'
                            onClick={handleSubmit}
                        >
                            Update Trip
            </Button>
                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item>
                                <NavLink to='/dashboard/mytrips'>"back to my trips"</NavLink>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

const UpdateTrip = withRouter(UpdateTripForm);

const mapStateToProps = state => {
    return { flights: state.upcomingFlightsList };
};


export default connect(mapStateToProps, { editFlight })(UpdateTrip)