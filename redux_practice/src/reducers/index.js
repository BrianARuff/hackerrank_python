// import constants here
import {GET_NAME, GET_AGE} from '../actions';

// init state here
const initState = {
    name: 'Brian Ruff',
    age: 30
}

export default (state=initState, action) => {
    switch (action.type) {
        case GET_NAME:
            return Object.assign({}, state, {name: action.payload})
        case GET_AGE:
        return Object.assign({}, state, {name: action.payload})
        default:
            return state
    }
}