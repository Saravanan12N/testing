import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

it('test remove Expense', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

it('should setup edit expense action object', () => {
    const action = editExpense('123abc', {
        note: 'New note value'
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    })
})

it('Test add expense ', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };

    const actiob = addExpense(expenseData);
    expect(actiob).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})