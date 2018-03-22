import axios from 'axios';
import { FETCH_USER, FETCH_LOANS } from './types';

// This action fetches the current user.
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

// This submits a survey for saving.
export const submitLoan = (values) => async dispatch => {
    const res = await axios.post('/api/createLoan', values);

    dispatch({ type: FETCH_LOANS, payload: res.data });
};

// This action gets the current user's list of loans.
export const fetchLoans = () => async dispatch => {
    const res = await axios.get('/api/loans');

    dispatch({ type: FETCH_LOANS, payload: res.data });
};
