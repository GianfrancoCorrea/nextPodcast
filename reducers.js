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
 
function toggledPodcast (state = {
  isPlaying: false
}, action) {
  switch (action.type) {
    case actionTypes.PODCAST_OPEN:
      return Object.assign({}, state, {
        podcast: action.podcast,
      })
      case actionTypes.SET_PLAYING:
        return Object.assign({}, state, {
          isPlaying: true
        })
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
        items: action.channels,
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
        Nprogress: true,
        [action.category]: categoryChannels(state[action.category], action),
      })
    default:
      return state
  }
}
const rootReducer = combineReducers({
  channelsByCategory,
  selectedCategory,
  toggledPodcast
})
export default rootReducer