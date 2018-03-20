import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import loansReducer from './loansReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    loans: loansReducer
});
