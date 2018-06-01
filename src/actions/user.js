import profile from '../services/users'

export const GET_PROFILE = 'GET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const GET_SKILL = 'GET_SKILL';
export const ADD_SKILL = 'ADD_SKILL';
export const UPDATE_SKILL = 'UPDATE_PROFILE';
export const DELETE_SKILL = 'DELETE_SKILL';

export function getProfile() {
    return (dispatch) => {
        return profile.getProfile().then(response => {
            dispatch(setProfile(response));
        });
    }
}

export function getSkill() {
    return (dispatch) => {
        return profile.getSkill().then(response => {
            dispatch(setSkill(response));
        });
    }
}

export function addSkill(data) {
    return {
        type: ADD_SKILL,
        result: data
    }
}

export function deleteSkill(data) {
    return {
        type: DELETE_SKILL,
        result: data
    }
}



export function setProfile(data) {
    return {
        type: GET_PROFILE,
        result: data
    }
}

export function setSkill(data) {
    return {
        type: GET_SKILL,
        result: data
    }
}








