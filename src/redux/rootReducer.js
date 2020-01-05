import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreameReducer from './iceCreme/iceCremeReducer'
 
const rootReducer =combineReducers({
    cake:cakeReducer,
    iceCreame:iceCreameReducer
})
export default rootReducer