import { applyMiddleware, legacy_createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import formReducer from './reducers/formReducer'

const rootReducer = combineReducers({
	form: formReducer,
})

const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk))

export default store
