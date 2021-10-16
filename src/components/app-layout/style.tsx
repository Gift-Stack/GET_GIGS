import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

interface AppLayoutContentWrapperProps {
  startPage: boolean
  smallerThan768px: boolean
  open: boolean
}

export const AppLayoutWrapper = styled(Grid)`
  min-height: 100vh;
  display: flex;
  background-color: var(--white);
`

export const AppLayoutContentWrapper = styled(Grid)`
  display: flex;
  padding: ${(props: AppLayoutContentWrapperProps) =>
    props.smallerThan768px ? '18px' : '18px 32px'};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background: ${(props: AppLayoutContentWrapperProps) =>
    props.startPage && !props.smallerThan768px
      ? 'var(--white)'
      : 'var(--primary-background)'};
  width: 100%;
  flex-direction: column;
  overflow-x: hidden;
  opacity: ${(props: AppLayoutContentWrapperProps) =>
    props.smallerThan768px ? props.open && '0.3' : '1'};
`
