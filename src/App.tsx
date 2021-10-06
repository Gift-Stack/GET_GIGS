import './App.css'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import {  } from 'react-router'
// import { Provider } from 'react-redux'
// import store from './store'
import AppLayout from './components/app-layout'
import { fetchGigs } from './actions/gigsAction'
import { GigsState, Error } from './interfaces'

function App({ gigs, fetchGigs }: any) {
  let history = useHistory()

  useEffect(() => {
    fetchGigs()

    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    console.log(gigs)
  }, [gigs.loading])
  return (
    // <Provider store={store}>
    <AppLayout history={history} />
    // </Provider>
  )
}
const mapStateToProps = (state: any) => ({
  gigs: state.gigs
})
export default connect(mapStateToProps, { fetchGigs })(App)
