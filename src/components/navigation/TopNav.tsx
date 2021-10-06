import React from 'react'
import TelegramIcon from '@material-ui/icons/Telegram'
import { makeStyles } from '@material-ui/core/styles'
import HomeRounded from '@material-ui/icons/HomeRounded'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'

// components
// import Notification from './notification'

// styles
import { TopNavWrapper } from './style'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    cursor: 'pointer',

    '& svg': {
      marginRight: '8px'
    },
    '& span': {
      fontSize: '15px',
      fontWeight: 500
    }
  }
}))

const TopNav = (props: {
  history: any
  showHome: boolean
  open: boolean
  setOpen(arg: boolean): void
}) => {
  const { history, showHome, open, setOpen } = props
  const paths = ['/auth/awaiting-approval']
  const classes = useStyles()
  const isSmallerThan768px = useMediaQuery('(max-width:768px)')

  const getCurrentAbsoluteUrl = window.location.pathname

  return (
    <TopNavWrapper>
      <div className="asm-logo">{/* <ASMLogo /> */}</div>
      <div className="top-left-nav-item">
        {getCurrentAbsoluteUrl === '/auth/settings'
          ? ''
          : isSmallerThan768px && (
              <IconButton
                aria-label="toggle menu"
                onClick={() => setOpen(!open)}
              >
                <MenuRoundedIcon style={{ fontSize: 30 }} />
              </IconButton>
            )}
        {showHome ? (
          <div role="link" className={classes.root}>
            <HomeRounded />
            <span className="top-left-nav-item-text">Home</span>
          </div>
        ) : (
          !paths.includes(history.location.pathname) && (
            <div
              role="link"
              className={classes.root}
              onClick={() => history.push('/auth/messenger')}
            >
              <TelegramIcon />
              <span className="top-left-nav-item-text">Messenger</span>
            </div>
          )
        )}
      </div>
    </TopNavWrapper>
  )
}

export default TopNav
