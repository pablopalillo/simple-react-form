/** actions  */
const HANDLE_CHANGE = 'HANDLE_CHANGE';
const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

/** action function  */
export const handleChange  = (event) => {
    return {
        type: HANDLE_CHANGE,
        event
    }
}

export const handleSubmit = (event) => {
    return {
        type: HANDLE_SUBMIT,
        event
    }
}