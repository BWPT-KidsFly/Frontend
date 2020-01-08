import { 
    GETALLTRIPS_SUCCESS,
    ADD_FLIGHT_SUCCESS, 
    LOGIN_STAFF_SUCCESS, 
    LOGIN_USER_SUCCESS, 
    GETAIRPORTBYCOORDS_SUCCESS,
    START,
    ERROR, 
     } from '../actions'


const initialState = {
    currentUser: "",
    isLoading: false,
    isAdmin: false,
    isStaff:false,
    isTraveler:false,
    isError: false,
    error: "",
    adminList: [],
    credentials: { password: "", email: "" },
    incomingTravelersList: [],
    arrivedTravelersList: [],
    homeAirport: "",
    closestAirport:'',
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
        case GETALLTRIPS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                upcomingFlightsList: [...state.upcomingFlightsList, action.payload],
            }
        }
        case GETAIRPORTBYCOORDS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                closestAirport: [action.payload],
            }
        }
        case LOGIN_USER_SUCCESS: {
            window.localStorage.setItem("token",action.payload)
            return {
                ...state,isLoading:false,currentUser:action.id||action.username
            }
        }
        case LOGIN_STAFF_SUCCESS: {
            window.localStorage.setItem("token",action.payload)
            return {
                ...state,isLoading:false,currentUser:action.id||action.username
            }
        }
        default: return { ...state }
    }
}


export default  kidsFlyreducer  