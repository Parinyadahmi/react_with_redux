import profile from '../services/users'

export const GET_PROFILE = 'GET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';


export function getProfile() {
    return (dispatch) => {
       return profile.getProfile().then(response => {
            dispatch(setProfile(response.result));
        });
    }
}

export function setProfile(data) {
    return {
        type: GET_PROFILE,
        result: data
    }
}









