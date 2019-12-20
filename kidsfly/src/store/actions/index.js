import { axiosWithAuth as axios } from "../../utils"

export const START = "START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const ADD_FLIGHT_SUCCESS = "ADD_FLIGHT_SUCCESS"
export const ERROR = "ERROR"


export const login = (credentials) => dispatch => {
    dispatch({ type: START })
    axios
        .post(`/login`, credentials)
        .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ERROR, payload: err }))
}

export const addFlight = (flightObj) => dispatch => {
    dispatch({ type: START })
    axios
        .post(`/user/addflight`, flightObj)
        .then(res => dispatch({ type: ADD_FLIGHT_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ERROR, payload: err }))
}