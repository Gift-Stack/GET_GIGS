import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

const drawerWidth = 240
interface StylesTypes {
  isSmallerThan768px: boolean
  theme: any
}
const useStyles = makeStyles((props: StylesTypes) => ({
  root: {
    display: 'flex',
    '& .MuiDrawer-paperAnchorDockedLeft': {
      border: 'none'
    },
    '& .MuiDrawer-paper': {
      top: '80px'
    }
  },
  //added
  navContainer: {
    '& .MuiDrawer-paperAnchorDockedLeft': {
      border: 'none',
      background: 'white'
    }
  },
  menuButton: {
    color: '#143055',
    position: 'absolute',
    background: '#ffffff',
    borderRadius: '26px',
    zIndex: 9999,
    top: '28%',
    right: '-20px',
    padding: '6px',
    display: (props: { isSmallerThan768px: boolean; theme: any }) =>
      props.isSmallerThan768px ? 'none' : 'block'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: (props: { theme: any }) =>
      props.theme.transitions.create('width', {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.enteringScreen
      })
    // transition: (props: {
    //   theme: {
    //     transitions: {
    //       create(arg1: string, arg2: { easing: string; duration: string }): void
    //       easing: { sharp: string }
    //       duration: { enteringScreen: string }
    //     }
    //   }
    // }) =>
    //   props.theme.transitions.create('width', {
    //     easing: props.theme.transitions.easing.sharp,
    //     duration: props.theme.transitions.duration.enteringScreen
    //   })
  },
  drawerClose: {
    transition: (props: { theme: any }) =>
      props.theme.transitions.create('width', {
        easing: props.theme.transitions.easing.sharp,
        duration: props.theme.transitions.duration.leavingScreen
      }),
    overflowX: 'hidden',
    width: '84px !important'
    // [props.theme.breakpoints.up('sm')]: {
    //   width: ({ theme }: any) => theme.spacing(9) + 1
    // }
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '15px',
    alignItems: 'center',
    textTransform: 'capitalize',
    '& .MuiListItemIcon-root': {
      display: 'flex',
      justifyContent: 'center',
      fill: '#000000',
      marginTop: '-4px',

      '& path': {
        fill: '#000000'
      },

      '& svg': {
        width: '24px !important',
        height: '24px'
      }
    },
    '& .MuiListItemText-root': {
      color: '#000000',
      margin: 0,
      marginLeft: '14px',
      cursor: 'pointer'
    },
    '& .MuiListItem-root': {
      '&:hover': {
        background: 'none',
        '& .MuiListItemText-root': {
          color: 'orange'
        },
        '& svg': {
          color: 'orange',
          fill: 'orange',
          '& path': {
            fill: 'orange'
          }
        }
      }
    },
    '& .active': {
      padding: '0 auto',
      '& .MuiListItemText-root': {
        color: 'orange'
      },
      '& svg': {
        color: 'orange',
        fill: 'orange',
        '& path': {
          fill: 'orange'
        }
      }
    }
  }
}))

export const Wrapper = styled.div`
  .MuiDrawer-paperAnchorDockedLeft {
    border-right: 1px solid #ececec;
    /* margin-top: 80px; */
  }
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
`

export default useStyles
