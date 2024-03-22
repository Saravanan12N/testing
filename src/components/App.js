import React from 'react';
import { createStore } from 'redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';

// const reducer = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + 1
//             }
//         case 'DECREMENT':
//             return {
//                 count: state.count - 1
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             }
//         default:
//             return state

//     }
// }

// const store = createStore(reducer);

// //Increment
// // store.subscribe(() => console.log(store.getState()));
// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'INCREMENT'
// });
// store.dispatch({
//     type: 'INCREMENT'
// });
// //Decrement 

// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'RESET'
// })

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

export default () => {
    return (

        <div>
            <Provider store={store}>
                <ExpenseListFilters />
                <ExpenseList />


            </Provider>

        </div>
    )
}