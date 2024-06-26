// import React from 'react';
// import { createStore, combineReducers } from 'redux';
// import { v4 as uuidv4 } from 'uuid';

// const demoState = {
//     expenses: [{
//         id: 'akdjakfjaslf',
//         description: 'Jan Rent',
//         note: 'This was the final payment for that address',
//         amount: 54332,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// }

// //ADD_EXPENSE

// const addExpense = (
//     { description = '', note = '', amount = 0, createdAt = 0 } = {}
// ) => {
//     return {
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: uuidv4(),
//             description,
//             note,
//             amount,
//             createdAt
//         }
//     }
// }
// //REMOVE_EXPENSE

// const removeExpense = ({ id } = {}) => {
//     return {
//         type: 'REMOVE_EXPENSE',
//         id
//     }
// }


// //EDIT_EXPENSE

// const editExpense = (id, updates) => {
//     return {
//         type: 'EDIT_EXPENSE',
//         id,
//         updates
//     }
// }

// //SET_TEXT_FILTER

// const setTextFilter = (text = '') => {
//     return {
//         type: 'SET_TEXT_FILTER',
//         text
//     }
// }

// //SORT_BY_DATE

// const sortByDate = () => {
//     return {
//         type: 'SORT_BY_DATE'
//     }
// }


// //SORT_BY_AMOUNT

// const sortByAmount = () => {
//     return {
//         type: 'SORT_BY_AMOUNT'
//     }
// }

// //SET_START_DATE

// const setStartDate = (startDate) => {
//     return {
//         type: 'SET_START_DATE',
//         startDate
//     }
// }
// //SET_END_DATE

// const setEndDate = (endDate) => {
//     return {
//         type: 'SET_END_DATE',
//         endDate
//     }
// }

// //Expenses Reducer

// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return state.concat(action.expense)
//         case 'REMOVE_EXPENSE':
//             return state.filter(({ id }) => {
//                 return id !== action.id
//             }

//             )
//         case 'EDIT_EXPENSE':
//             return state.map((expense) => {
//                 if (expense.id === action.id) {
//                     return {
//                         ...expense,
//                         ...action.updates
//                     }

//                 } else {
//                     return expense;
//                 }
//             })
//         default:
//             return state;
//     }
// }

// //Filter Reducer

// const filterReducerDefaultState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// };

// const filterReducers = (state = filterReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             }

//         case 'SORT_BY_AMOUNT':
//             return {
//                 ...state,
//                 sortBy: 'amount'
//             }

//         case 'SORT_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             }

//         case 'SET_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             }

//         case 'SET_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             }
//         default:
//             return state;
//     }
// }
// //get visible expense

// const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter((expense) => {
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text);

//         return startDateMatch && endDateMatch && textMatch;

//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1
//         }
//         else if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1
//         }
//     })
// }


// const store = createStore(combineReducers({
//     expenses: expensesReducer,
//     filters: filterReducers
// }));

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });


// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// // store.dispatch(editExpense(
// //     expenseTwo.expense.id,
// //     { amount: 20 }

// // ))

// // store.dispatch(setTextFilter('rent'));

// // store.dispatch(sortByAmount());
// // store.dispatch(sortByDate());

// store.dispatch(setStartDate(125)); //125
// // store.dispatch(setStartDate()); //undefined
// // store.dispatch(setEndDate(1250)); //1250

// export default () => {
//     return (
//         <div>
//             Redux Component
//         </div>
//     )
// }