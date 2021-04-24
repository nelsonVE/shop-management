let token = localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : ""

let username = localStorage.getItem("username")
    ? localStorage.getItem("username")
    : ""

let id = localStorage.getItem("id")
    ? localStorage.getItem("id")
    : ""


export const initialState = {
    id: "" || id,
    username: "" || username,
    token: "" || token,
    loading: false,
    errorMessage: null
}


export const AuthReducer = (initialState, action) => {
    switch(action.type){
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            }
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                id: action.payload.id,
                username: action.payload.username,
                token: action.payload.access_token,
                loading: false
            }
        case "LOGOUT":
            return {
                ...initialState,
                id: "",
                username: "",
                token: "",
            }
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            }
        default:
            throw new Error(`Cannot handle the ${action.type} action.`)
    }
}