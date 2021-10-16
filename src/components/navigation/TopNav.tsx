import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeRounded from "@material-ui/icons/HomeRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

// Icons
import profile from "../../assets/profile.png";
import { ReactComponent as Settings } from "../../assets/settings-icon.svg";
import { ReactComponent as Email } from "../../assets/email-icon.svg";
import { ReactComponent as Notification } from "../../assets/notification-icon.svg";

// styles
import { TopNavWrapper } from "./style";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    cursor: "pointer",

    "& svg": {
      marginRight: "8px",
    },
    "& span": {
      fontSize: "15px",
      fontWeight: 500,
    },
  },
}));

const TopNav = (props: {
  history: any;
  showHome: boolean;
  open: boolean;
  setOpen(arg: boolean): void;
}) => {
  const { history, showHome, open, setOpen } = props;
  const paths = ["/auth/awaiting-approval"];
  const classes = useStyles();
  const isSmallerThan768px = useMediaQuery("(max-width:768px)");

  const getCurrentAbsoluteUrl = window.location.pathname;

  return (
    <TopNavWrapper>
      <div className="asm-logo">
        <Paper
          component="form"
          style={{
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: !isSmallerThan768px ? 500 : "auto",
            maxWidth: 500,
            marginLeft: !isSmallerThan768px ? 240 : "initial",
            border: "1px solid #ECECEC",
            boxShadow: "none",
          }}
        >
          <IconButton
            type="submit"
            style={{ padding: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            style={{ marginLeft: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>
      </div>
      <div className="top-left-nav-item">
        {getCurrentAbsoluteUrl === "/auth/settings"
          ? ""
          : isSmallerThan768px && (
              <IconButton
                aria-label="toggle menu"
                onClick={() => setOpen(!open)}
              >
                <MenuRoundedIcon style={{ fontSize: 30 }} />
              </IconButton>
            )}

        <Notification />
        <Email />
        <Settings />
        {showHome ? (
          <div role="link" className={classes.root}>
            <HomeRounded />
            <span className="top-left-nav-item-text">Home</span>
          </div>
        ) : (
          !paths.includes(history.location.pathname) && (
            <div role="link" className={classes.root}>
              <img src={profile} alt="Profile pic" />
            </div>
          )
        )}
      </div>
    </TopNavWrapper>
  );
};

export default TopNav;
