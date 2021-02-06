import actions from './actions'
import {initialState} from './initialState'

const INITIAL_STATE = initialState


export default function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    case actions.getInitialState:
      return {...state }
    default:
      return state
  }
}
