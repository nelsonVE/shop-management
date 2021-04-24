import axiosInstance from "../axiosAPI"
import StatusCodes from 'http-status-codes'

export async function loginUser(dispatch, login_payload){
    dispatch({ type: 'REQUEST_LOGIN' })

    return axiosInstance.post(
        '/auth/token/obtain/',
        login_payload
    )
    .then((response) => {
        axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;

        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('id', response.data.id);

        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })

        return response.data
    })
    .catch((error) => {
        if(error.response.status === StatusCodes.UNAUTHORIZED || error.response.status === StatusCodes.BAD_REQUEST){
            dispatch({ type: 'LOGIN_ERROR', error: error.response.data.detail })
        } else {
            console.log('ERROR')
        }
    })
}


export async function logoutUser(dispatch){
    dispatch({ type: "LOGOUT" })

    localStorage.clear()
}
