import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import loansReducer from './loansReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    loans: loansReducer
});
