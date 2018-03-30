import axios from 'axios';
import { FETCH_USER, FETCH_LOANS } from './types';

// This action fetches the current user.
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

// This action gets the current user's list of loans.
export const fetchLoans = () => async dispatch => {
    const res = await axios.get('/api/loans');

    dispatch({ type: FETCH_LOANS, payload: res.data });
};

// This submits a loan for saving.
export const submitLoan = (values) => async dispatch => {
    const res = await axios.post('/api/loans', values);

    dispatch({ type: FETCH_LOANS, payload: res.data });
};

// This deletes a loan.
export const deleteLoan = (id) => async dispatch => {
    console.log(id);
    const res = await axios.post('/api/deleteLoan', id);

    dispatch({ type: FETCH_LOANS, payload: res.data });
};
