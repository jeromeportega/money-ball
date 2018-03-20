import axios from 'axios';
import { FETCH_USER, FETCH_LOANS } from './types';

// This action fetches the current user.
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

// This action gets the current user's list of loans.
export const fetchLoans = () => async dispatch => {
    const res = await axios.get('api/loans');

    dispatch({ type: FETCH_LOANS, payload: res.data });
};
