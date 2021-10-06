import { FETCH_GIGS, SET_LOADING, FETCH_ERROR } from '../actions/types'
import { Error, GigsState, Action } from '../interfaces'

const initialState: GigsState<Error> = {
  gigs: null,
  loading: false,
  error: null
}

// eslint-disable-next-line
export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true }
    case FETCH_ERROR:
      return { ...state, error: action.payload }
    case FETCH_GIGS:
      return { ...state, gigs: action.payload, loading: false }
    default:
      return state
  }
}
