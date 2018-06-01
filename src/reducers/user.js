import {
    GET_PROFILE,
    UPDATE_PROFILE,
    GET_SKILL,
    ADD_SKILL,
    DELETE_SKILL
} from '../actions/user'

const initialState = {
    about: {},
    skills : []
};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return Object.assign({}, state, {
                about: action.result
            });
        case UPDATE_PROFILE:
            return state;
        case GET_SKILL:
            return Object.assign({}, state, {
                skills: action.result
            });
        case ADD_SKILL:
            return {
                ...state,
                skills: [...state.skills, action.result]
            };
        case DELETE_SKILL:
            return {
                ...state,
                skills : state.skills.filter( (item, index) => item.name !== action.result.name)
            };
        default:
            return state;
    }
}