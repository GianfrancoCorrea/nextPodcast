import { combineReducers } from 'redux';
import { actionTypes } from './actions';


function selectedCategory (state = 'recomended', action) {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return action.category
    default: 
      return state
  }
}
function categoryChannels (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case actionTypes.REQUEST_CATEGORY:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case actionTypes.RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
function channelsByCategory(state = {}, action) {
  switch (action.type) {
    case actionTypes.RECEIVE_CATEGORY:
    case actionTypes.REQUEST_CATEGORY:
      return Object.assign({}, state, {
        [action.category]: categoryChannels(state[action.category], action)
      })
    default:
      return state
  }
}
const rootReducer = combineReducers({
  channelsByCategory,
  selectedCategory
})
export default rootReducer