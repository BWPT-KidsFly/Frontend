import { ADD_FLIGHT_SUCCESS, ERROR, LOGIN_SUCCESS, START } from '../actions'


const initialState = {
    currentUser: "",
    isLoading: false,
    isAdmin: false,
    isError: false,
    error: "",
    adminList: [],
    credentials: { password: "", email: "" },
    incomingTravelersList: [],
    arrivedTravelersList: [],
    homeAirport: "",
    upcomingFlightsList: [],
    kidsConnectionStaffList: [],


}


const kidsFlyreducer = (state = initialState, action) => {
    switch (action.type) {

        case START: {
        console.log("case:START in reducer fired")
        
            return { ...state, isLoading: true }
        }
        case ERROR: {
            return { ...state, isLoading: false, isError: true, error: action.payload }
        }
        case ADD_FLIGHT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                upcomingFlightsList: [...state.upcomingFlightsList, action.payload],
            }
        }
        case LOGIN_SUCCESS: {
            window.localStorage.setItem("token",action.payload)
            return {
                ...state,isLoading:false,
            }
        }
        default: return { ...state }
    }
}


export default  kidsFlyreducer  