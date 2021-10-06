import { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const drawerWidth = 240

const useDrawer = () => {
  const theme = useTheme()
  const isSmallerThan768px = useMediaQuery('(max-width:768px)')

  const useStyles = makeStyles({
    root: {
      display: 'flex',
      position: 'relative',
      minHeight: 'calc(100vh - 84px)'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      position: isSmallerThan768px ? 'absolute' : 'relative'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: isSmallerThan768px ? '0px' : theme.spacing(9) + 1
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })

  const classes = useStyles

  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    if (isSmallerThan768px) setOpen(false)
    else setOpen(true)
  }, [isSmallerThan768px])

  return {
    useStyles: useStyles(),
    open,
    setOpen,
    classes
  }
}

export default useDrawer
