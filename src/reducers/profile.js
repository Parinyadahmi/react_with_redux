import {
    GET_PROFILE,
    UPDATE_PROFILE,
    DELETE_PROFILE
} from '../actions/profile'

const initialState = {
    profile: {},
};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return state;
        case UPDATE_PROFILE:
            return state;
        case DELETE_PROFILE:
            return state;
        default:
            return state;
    }
}