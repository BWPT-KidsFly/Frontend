import { axiosWithAuth } from "../../utils"
import axios from "axios"

export const START = "START"
export const LOGIN_STAFF_SUCCESS = "LOGIN_STAFF_SUCCESS"
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const ADD_FLIGHT_SUCCESS = "ADD_FLIGHT_SUCCESS"
export const GETAIRPORTBYCOORDS_SUCCESS = "GETAIRPORTBYCOORDS_SUCCESS"
export const GETALLTRIPS_SUCCESS = "GETALLTRIPS_SUCCESS"
export const ERROR = "ERROR"


export const loginUser = (credentials) => dispatch => {
    dispatch({ type: START })
    axiosWithAuth
        .post(`/login`, credentials)
        .then(res => dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ERROR, payload: err }))
}
export const loginSTAFF = (credentials) => dispatch => {
    dispatch({ type: START })
    axiosWithAuth
        .post(`/adminauth/login/admin`, credentials)
        .then(res => dispatch({ type: LOGIN_STAFF_SUCCESS, payload: res.data }))
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
export const gettrips = (user) => dispatch => {
    dispatch({ type: START })
    axiosWithAuth()
        .get(`trip`)
        .then(res => dispatch({ type: GETALLTRIPS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ERROR, payload: err }))

}