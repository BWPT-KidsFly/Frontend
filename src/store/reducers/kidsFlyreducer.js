import { 
    GETALLTRIPS_SUCCESS,
    ADD_FLIGHT_SUCCESS, 
    EDIT_FLIGHT_SUCCESS, 
    DELETE_FLIGHT_SUCCESS, 
    LOGIN_USER_SUCCESS, 
    LOGIN_STAFF_SUCCESS, 
    APPLY_STAFF_SUCCESS,
    REGISTER_STAFF_SUCCESS, 
    REGISTER_USER_SUCCESS, 
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
    kidsConnectionApplications: [],
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
        case APPLY_STAFF_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                kidsConnectionApplications: [...state.kidsConnectionApplications, ...action.payload.credentials],

            }
        }
        case ADD_FLIGHT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                upcomingFlightsList: [...state.upcomingFlightsList, action.payload],

            }
        }
        case EDIT_FLIGHT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                upcomingFlightsList: [...state.upcomingFlightsList, action.payload],

            }
        }
        case DELETE_FLIGHT_SUCCESS: {
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
            window.localStorage.setItem("token",action.payload.token)
            console.log("action.payload",action.payload)
            return {
                ...state,isLoading:false,currentUser:action.id,token:action.payload.token
                
            }
        }
        case LOGIN_STAFF_SUCCESS: {
            window.localStorage.setItem("token",action.payload.token)
            return {
                ...state,isLoading:false,currentUser:action.id||action.username
            }
        }
        case REGISTER_USER_SUCCESS: {
            window.localStorage.setItem("token",action.payload)
            return {
                ...state,isLoading:false,currentUser:action.id||action.username,

            }
        }
        case REGISTER_STAFF_SUCCESS: {
            window.localStorage.setItem("token",action.payload)
            return {
                ...state,isLoading:false,currentUser:action.id||action.username
            }
        }
        default: return { ...state }
    }
}


export default  kidsFlyreducer  