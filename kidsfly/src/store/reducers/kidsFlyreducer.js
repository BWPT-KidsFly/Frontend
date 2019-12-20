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
        default: return { ...state }
    }
} 

export { kidsFlyreducer  } 