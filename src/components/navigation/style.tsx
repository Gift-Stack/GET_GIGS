import styled from 'styled-components'
import List from '@material-ui/core/List'

export const SideNavWrapper = styled.div`
  background-color: var(--white);
  padding: 40px 0;
  width: ${(props: any) => (props.collapsed ? '100px' : '350px')};
  position: relative;
  justify-content: center;
  display: flex;

  /* .asm-logo {
    padding: 0 40px;
    path {
      fill: var(--white);
    }
  } */
`

export const NavItemWrapper = styled(List)`
  // position: fixed;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  align-items: center;
  text-transform: capitalize;
  color: #000000;

  .side-bar-item {
    cursor: pointer;
    padding: 10px 0;

    button,
    a {
      text-decoration: none;
      color: var(--secondary-black);
      white-space: nowrap;
      // display: grid;
      // align-items: center;
      // grid-template-columns: 1fr 3fr;
      // width: 100%;
      border: none;
      background: none;
      font-size: inherit;
      text-align: inherit;
      padding: 10px;
      width: fit-content;
      // padding-left: 20px;
    }

    p {
      display: ${(props: any) => (props.collapsed ? 'none' : 'block')};
    }

    path {
      fill: var(--secondary-black);
    }

    &:hover {
      a,
      button {
        color: var(--primary-orange);
      }
      path {
        fill: var(--primary-orange);
      }
    }
  }
  .side-bar-item.active {
    display: grid;
    background: ${(props: { collapsed: boolean }) =>
      props.collapsed ? '#ffffff' : '##f8fbff'};
    box-shadow: 0px 4px 9px #ffa50087;
    border-radius: 14px;
    justify-items: center;
    padding: 0;

    a {
      color: var(--primary-orange);
      // border-left: 2px solid;
      background: #ffa500d9;
      padding: 18px;
      border-radius: 12px;
      box-shadow: none;
    }
    path {
      fill: var(--white);
    }

    &:after {
      background: white;
      content: 'content';
      border-top-right-radius: 5px;
      color: white;
      box-shadow: 7px -8px 18px #dcdada36;
      font-size: 0px;
      width: 100%;
    }

    &:before {
      background: white;
      content: 'content';
      border-bottom-right-radius: 5px;
      color: white;
      box-shadow: 7px 6px 12px #dcdada36;
      font-size: 0px;
      width: 100%;
    }
  }
`
export const TopNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 12px 40px;
  color: var(--primary-blue);
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
  border-bottom: 1px solid #ececec;

  @media (max-width: 768px) {
    display: block;
    min-height: 70px;
    padding: 12px 24px;
  }

  @media (max-width: 550px) {
    padding: 12px 16px;
  }

  .MuiBadge-badge {
    height: auto;
    min-width: auto;
    font-size: 10px;
    width: 16px;
    height: 16px;
  }

  .search {
    width: 260px;
    height: 30px;
    display: flex;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 25px;
    padding: 0 10px;

    img {
      margin: 0 10px;
    }

    input,
    input:hover,
    input:focus,
    input:active {
      border: none;
      outline: none;
      width: 100%;
      font-size: 18px;
    }
  }

  .top-left-nav-item {
    .MuiSnackbar-anchorOriginTopRight {
      top: 82px !important;
      right: 2px !important;
    }

    .MuiIconButton-root {
      @media (max-width: 768px) {
        padding: 0;
      }
    }

    margin-left: auto;
    display: flex;
    grid-column-gap: 32px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      margin-top: 8px;
    }

    @media (max-width: 550px) {
      .top-left-nav-item-text {
        display: none;
      }
    }

    span {
      display: flex;
      align-items: center;

      img {
        margin-right: 4px;
      }
    }

    .avatar {
      border-radius: 50%;
    }

    .details {
      display: flex;

      > div {
        &:nth-child(2) {
          margin-left: 8px;
        }
        span {
          font-weight: 500;
        }

        p {
          text-transform: capitalize;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
`
