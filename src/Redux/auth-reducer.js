const LOGIN = "LOGIN";

const initialState = {
    email: "",
    password: "",
    isAuth: false,
}

export const getLogin = (email, password) => ({
    type: LOGIN, payload: {email, password}
})


export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }

}

