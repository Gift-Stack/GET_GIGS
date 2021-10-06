import { combineReducers } from 'redux'
import gigsReducer from './gigsReducer'

export default combineReducers({
  gigs: gigsReducer
})
