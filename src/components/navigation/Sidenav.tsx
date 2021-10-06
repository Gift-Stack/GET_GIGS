import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
// import LogoutIcon from '@material-ui/icons/PowerSettingsNew'
// import Divider from '@material-ui/core/Divider'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// components
// import CustomToolTip from '../tooltip'
import PageDrawer, { ToggleButton } from '../page-drawer'

// styles
import useStyles, { Logo, Wrapper } from './useStyle'

// Icons
import { ReactComponent as Dashboard } from '../../assets/home-icon.svg'
import { ReactComponent as Briefcase } from '../../assets/briefcase-icon.svg'
import { ReactComponent as Company } from '../../assets/npm-icon.svg'
import { ReactComponent as Account } from '../../assets/person-icon.svg'
// import { ReactComponent as TestLogo } from '../../assets/test_logo.svg'
import TestLogo from '../../assets/test_logo.svg'

const SideNav = (props: {
  classes: any
  open: boolean
  setOpen(arg: boolean): void
}) => {
  const { classes, open, setOpen } = props
  const isSmallerThan768px = useMediaQuery('(max-width:768px)')
  const theme = useTheme()
  const sideNavClasses = useStyles({ theme, isSmallerThan768px })
  const history = useHistory()
  const {
    location: { pathname },
    push
  } = useHistory()
  if (['/auth/awaiting-approval'].includes(history.location.pathname)) {
    return null
  }

  const renderMenuItems = (props: {
    path: string
    icon: any
    title: string
  }) => {
    const { path, icon, title } = props
    return (
      <ListItem
        component="div"
        onClick={() => {
          if (isSmallerThan768px) {
            setOpen(false)
          }
          history.push(`/${path}`)
        }}
        key={title}
        className={`${pathname === `/${path}` ? 'active' : ''}`}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    )
  }

  return (
    <Wrapper className={`${classes.root} ${sideNavClasses.navContainer}`}>
      <PageDrawer
        {...{
          open,
          setOpen,
          classes
        }}
      >
        <Logo>
          <img src={TestLogo} alt="Test Logo" width="100px" />
        </Logo>
        <List
          className={sideNavClasses.menuItems}
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
        >
          {renderMenuItems({
            path: '',
            icon: <Dashboard />,
            title: 'Dashboard'
          })}
          {renderMenuItems({
            path: 'gigs',
            icon: <Briefcase />,
            title: 'Gigs'
          })}
          {renderMenuItems({
            path: 'company',
            icon: <Company />,
            title: 'Company'
          })}
          {renderMenuItems({
            path: 'account',
            icon: <Account />,
            title: 'Account'
          })}
          {/* {navigationModel.map((props) =>
            open ? (
              renderMenuItems(props)
            ) : (
              <CustomToolTip
                title={props.title}
                placement="right"
                key={props.title}
              >
                {renderMenuItems(props)}
              </CustomToolTip>
            )
          )} */}
        </List>
        {/* <Divider /> */}
        {/* <List className={sideNavClasses.menuItems}>
          <ListItem button className="logout">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
        </List> */}
      </PageDrawer>
    </Wrapper>
  )
}

export default SideNav