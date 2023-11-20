import {createStore} from 'redux'

// Action Type
const LOADER = 'LOADER'

// Action
export const setLoader = (loading) => {
    return {
        type : LOADER,
        payload : loading
    }
}

// Reducer
const initialState = {
    isLoading: false
}

const loadingActionReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADER: return {
            ...state,
            isLoading : action.payload
        }
        default: return state
    }
}

//Store
export const store = createStore(loadingActionReducer)