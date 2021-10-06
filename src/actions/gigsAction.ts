import { FETCH_GIGS, SET_LOADING, FETCH_ERROR } from './types'

export const setLoading = () => {
  return { type: SET_LOADING }
}

export const fetchGigs = () => async (dispatch: any) => {
  try {
    setLoading()
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res_data = await res.json()
    dispatch({ type: FETCH_GIGS, payload: res_data })
  } catch (error: any) {
    dispatch({ type: FETCH_ERROR, payload: error.message })
  }
}
