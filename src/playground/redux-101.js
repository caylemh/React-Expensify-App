import { createStore} from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

console.log(store.getState());

// Actions - an object that gets sent to the store.

// Incrementing the 'count'
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

// Resetting count
store.dispatch({
    type: 'RESET'
});

// Decrementing count
store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());