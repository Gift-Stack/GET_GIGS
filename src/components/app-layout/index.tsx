import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import useMediaQuery from '@material-ui/core/useMediaQuery'
// import TopNav from '../component/navigation/TopNav'
import TopNav from '../navigation/TopNav'
import SideNav from '../navigation/Sidenav'

// contexts
// import ToastContext from '../../contexts/ToastContext'
// import DrawerContext from '../../contexts/DrawerContext'

// // hooks
// import useToast from '../../hooks/useToast'
import useDrawer from '../../hooks/useDrawer'

// route
// import routes from '../../routes'

// utils
// import socket from '../../utils/socket'

// styles
import { AppLayoutContentWrapper } from './style'
// import { pagesWOSidebar, pagesWOTopnav } from '../../utils/constants'

interface AppLayoutProps {
  history: any
}

const AppLayout = (props: AppLayoutProps) => {
  const { history } = props
  // const { showAlert, Toast } = useToast()
  const { useStyles, open, setOpen } = useDrawer()
  const classes = useStyles
  const smallerThan768px = useMediaQuery('(max-width:768px)')
  const [sidebar, setSideBar] = useState<boolean>(true)
  const [topNav, setTopNav] = useState<boolean>(true)

  // if (!user) {
  //   history.push('/login')
  //   return null
  // }

  // socket.auth = { userId: user?.id }
  // socket.connect()

  // useEffect(
  //   () => () => {
  //     socket.emit('logout', {
  //       uid: socket.auth.userId
  //     })
  //   },
  //   []
  // )

  // useEffect(() => {
  //   const role = user.role[0]
  //   const curRoute = history.location.pathname.split('/')[2]

  //   if (curRoute !== 'messenger') {
  //     // STAFF ALLOWED ROUTE - '/auth/staff/....'
  //     if (role === 'staff' && curRoute !== 'staff') {
  //       history.push('/login')
  //     }

  //     // SCHOOL ALLOWED ROUTE - '/auth/....'
  //     if (role === 'school' && curRoute === 'staff') {
  //       history.push('/login')
  //     }
  //   }

  //   if (pagesWOSidebar.includes(history.location.pathname)) {
  //     setSideBar(false)
  //   } else {
  //     setSideBar(true)
  //   }

  //   if (pagesWOTopnav.includes(history.location.pathname)) {
  //     setTopNav(false)
  //   } else {
  //     setTopNav(true)
  //   }
  // }, [sidebar, history.location.pathname, user])

  return (
    // <DrawerContext.Provider value={{ toggleVisibility }}>
    //   <ToastContext.Provider value={{ showAlert }}>
    <>
      {topNav && (
        <TopNav
          {...{
            history,
            showHome: !sidebar,
            open,
            setOpen
          }}
        />
      )}
      <div className={classes.root}>
        {sidebar && (
          <SideNav
            {...{
              classes,
              open,
              setOpen
            }}
          />
        )}
        <AppLayoutContentWrapper
          open={open}
          smallerThan768px={smallerThan768px}
          onClick={() => smallerThan768px && open && setOpen(false)}
          startPage={history.location.pathname === '/auth/getting-started'}
          className={classes.content}
        >
          {/* <Toast /> */}
          <Switch>
            {/* {routes.map((route) => (
                <Route
                  key={route.name}
                  path={`/auth/${route.path}`}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} user={user} />}
                />
              ))} */}
          </Switch>
        </AppLayoutContentWrapper>
      </div>
    </>
    //   </ToastContext.Provider>
    // </DrawerContext.Provider>
  )
}

export default AppLayout
