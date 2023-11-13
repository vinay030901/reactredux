const authReducer = (state = false, action) => {
    switch (action.type) {
        case "LOG_IN":
            return true;
        case "LOGO_UT":
            return false;
        default:
            return state
    }
}

export default authReducer;