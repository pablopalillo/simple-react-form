import { createStore } from 'redux';

const initialState = {
    name: '',
    lastName: '',
    email: '',
    telephone:'',
}

function reducerForm(state = initialState, action) {

    switch (action.type) {
        case 'HANDLE_CHANGE':
            action.event.preventDefault();
            const target = action.event.target;
            const value = target.value;
            const name = target.name;

            return Object.assign({}, state, {
                [name]: value
            });
        case 'HANDLE_SUBMIT':
            action.event.preventDefault();
            console.table(state);
        default:
            return state;
    }
   
}

export default createStore(reducerForm)