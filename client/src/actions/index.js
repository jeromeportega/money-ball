import axios from 'axios';
import { FETCH_USER, FETCH_LOANS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchLoans = () => async dispatch => {
    const res = await axios.get('api/loans');

    dispatch({ type: FETCH_LOANS, payload: res.data });
};
