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