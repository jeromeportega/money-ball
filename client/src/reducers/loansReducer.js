import { FETCH_LOANS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_LOANS:
            return action.payload;
        default:
            return state;
    }
}
