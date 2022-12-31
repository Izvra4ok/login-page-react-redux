const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const initialState = {
    email: "",
    password: "",
    isAuth: false,
}

export const getLogin = (email, password) => ({
    type: LOGIN, payload: {email, password}
})
export const getLogout = (isAuth) => ({
    type: LOGOUT, isAuth: isAuth,
})


export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state;
    }

}

