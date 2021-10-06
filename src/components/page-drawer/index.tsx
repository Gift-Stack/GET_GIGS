import React from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'

interface ToggleButtonType {
  setOpen(arg: boolean): void
  open: boolean
  classes: any
  iconStyle: any
  children: ReactNode
}

interface PageDrawerType {
  classes: any
  open: boolean
  children: ReactNode
}

export const ToggleButton = (props: ToggleButtonType) => {
  const { setOpen, open, classes, iconStyle, children } = props
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={() => setOpen(!open)}
      edge="start"
      className={clsx(iconStyle, {
        [classes.hide]: false
      })}
    >
      {children}
    </IconButton>
  )
}

const PageDrawer = ({ classes, open, children }: PageDrawerType) => (
  <Drawer
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })
    }}
  >
    {children}
  </Drawer>
)

export default PageDrawer
