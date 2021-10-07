import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import useMediaQuery from '@material-ui/core/useMediaQuery'
import TopNav from '../navigation/TopNav'
import SideNav from '../navigation/Sidenav'

// hooks
import useDrawer from '../../hooks/useDrawer'

// route
// import routes from '../../routes'

// styles
import { AppLayoutContentWrapper } from './style'

interface AppLayoutProps {
  history: any
  children: any
}

const AppLayout = (props: AppLayoutProps) => {
  const { history, children } = props
  const { useStyles, open, setOpen } = useDrawer()
  const classes = useStyles
  const smallerThan768px = useMediaQuery('(max-width:768px)')
  const [sidebar, setSideBar] = useState<boolean>(true)
  const [topNav, setTopNav] = useState<boolean>(true)

  return (
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
          <Switch>{children}</Switch>
        </AppLayoutContentWrapper>
      </div>
    </>
  )
}

export default AppLayout
