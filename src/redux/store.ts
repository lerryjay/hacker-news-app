import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'; 

import auth from './reducers'


const store = createStore( auth , applyMiddleware(thunk))
export default store