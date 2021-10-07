import './App.css'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import AppLayout from './components/app-layout'
import { fetchGigs } from './actions/gigsAction'
import { GigsState, Error, Routes } from './interfaces'

import routes from './routes'

function App({ gigs, fetchGigs }: any) {
  let history = useHistory()

  useEffect(() => {
    fetchGigs()

    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    console.log(gigs)
  }, [gigs])
  return (
    // <Provider store={store}>
    <AppLayout history={history}>
      {routes.map(({ name, path, component: Component }: Routes) => (
        <Route
          key={name}
          path={`/${path}`}
          // exact={route.exact}
          // name={route.name}
          render={(props) => <Component {...props} gigs={gigs} />}
        />
      ))}
    </AppLayout>
    // </Provider>
  )
}
const mapStateToProps = (state: any) => ({
  gigs: state.gigs
})
export default connect(mapStateToProps, { fetchGigs })(App)
