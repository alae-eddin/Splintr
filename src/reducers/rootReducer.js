import cartReducer from './cartReducer'
import guidReducer from './guidReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    carteState: cartReducer,
    guidState: guidReducer
})

// console.log('rootReducer')
// console.log(rootReducer)

export default rootReducer