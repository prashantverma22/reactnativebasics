import { types } from '../actions/actionType';

const initialState = {
    userData: null,
    data: null,
    apiData: null,
    apiList: null,
    api: null,
    deleteAPI: null,
    updateAPI: null
}

//reducer() is responsible for making changes in the state according to the action type.

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case types.CHECK_RED:
            // console.log(action.payload);
            return {
                ...state,
                data: action.payload
            }
        case types.STORE_API_DATA:
            return {
                ...state,
                apiData: action.payload
            }
        case types.SHOW_API_DATA:
            return {
                ...state,
                api: action.payload
            }
        case types.DISPLAY_API_DATA:
            return {
                ...state,
                apiList: action.payload
            }
        case types.DELETE_API_DATA:
            return {
                ...state,
                deleteAPI: action.payload
            }
        case types.UPDATE_API_DATA:
            return {
                ...state,
                updateAPI: action.payload
            }
        default:
            return state;
    }
}