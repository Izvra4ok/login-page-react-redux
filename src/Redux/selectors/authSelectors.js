export const emailSelector = (state) => {
    return state.auth.email
}

export const passwordSelector = (state) => {
    return state.auth.password
}

export const isAuthSelector = (state) => {
    return state.auth.isAuth
}