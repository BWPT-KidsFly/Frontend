import { axiosWithAuth } from "../../utils"
import axios from "axios"

export const START = "START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const ADD_FLIGHT_SUCCESS = "ADD_FLIGHT_SUCCESS"
export const GETAIRPORTBYCOORDS_SUCCESS = "GETAIRPORTBYCOORDS_SUCCESS"
export const ERROR = "ERROR"


export const login = (credentials) => dispatch => {
    dispatch({ type: START })
    axiosWithAuth
        .post(`/login`, credentials)
        .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ERROR, payload: err }))
}

export const addFlight = (flightObj) => dispatch => {
    dispatch({ type: START })
    axiosWithAuth
        .post(`/user/addflight`, flightObj)
        .then(res => dispatch({ type: ADD_FLIGHT_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ERROR, payload: err }))
}

export const getAiportByCoords = (position) => dispatch => {
    dispatch({ type: START })
    axios
        .get(`https://aerodatabox.p.rapidapi.com/airports/search/location/${position.coords.latitude}/${position.coords.longitude}/mi/50/16`)
        .then(res => dispatch({ type: GETAIRPORTBYCOORDS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ERROR, payload: err }))

}