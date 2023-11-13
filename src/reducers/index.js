import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import authReducer from './loginlogout';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

export default rootReducer;