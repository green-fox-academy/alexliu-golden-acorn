import { combineReducers } from 'redux'
import {
  BUY_ACORN,
  EAT_ACORN
} from './actions'
​
function corns(state = [], action) {
  switch (action.type) {
    case BUY_ACORN:
      return [
        ...state,
        {
          text: action.text + 1,
          completed: false
        }
      ]
    case EAT_ACORN:
      return [
        ...state,
        {
          text: action.text - 1,
          completed: false
        }
      ]
    default:
      return state
  }
}
​
const cornApp = combineReducers({
  corns
})
​
export default cornApp