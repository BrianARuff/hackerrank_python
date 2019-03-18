export const GET_NAME = 'GET_NAME';
export const GET_AGE = 'GET_AGE';

export const setName = (name) => {
    return {
        type: GET_NAME,
        payload: name
    }
}

export const setAge = (age) => {
    return {
        type: GET_AGE,
        payload: age
    }
}