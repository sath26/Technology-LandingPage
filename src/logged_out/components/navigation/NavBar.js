import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import { BackgroundSyncPlugin } from "workbox-background-sync";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    // boxShadow: theme.shadows[4],
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    color: "#EF7F5A",

  },
  menuButtonLoginText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    color: "#EF7F5A",
    // border: "2px solid #EF7F5A",
    // BackgroundColor: "#111"
    '&[aria-label="Login"]': {
      // color: "black",
      outline: "1px dotted #EF7F5A !important"
    },
  },
  // button: {
  //   color: "black",
  //   textDecoration: "none !important",
  //   '&[aria-label="Login"]': {
  //     color: "black",
  //     outline: "1px dotted #EF7F5A !important"
  //   },

  // },
  brandText: {
    fontFamily: "'Teko', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  colorPrimary: {
    color: "#EF7F5A",
  }
});

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <BookIcon className="text-white" />
    },
    {
      name: "Register",
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />
    },
    {
      name: "Login",
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />,
      iconNav: <AccountCircleOutlinedIcon />
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            {/* <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
              LandingPage Template
            </Typography> */}
            <img
              src={`${process.env.PUBLIC_URL}/images/main_logo.svg`}
              className={classes.image}
              alt="logo image"
            />
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}

                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon className={classes.colorPrimary} />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }

                else {

                  return (
                    <Button
                      // variant="outlined"
                      color="secondary"
                      size="large"
                      onClick={element.onClick}
                      classes={{ text: classes.menuButtonLoginText }}
                      key={element.name}
                      aria-label={element.name}
                      startIcon={element.iconNav}
                    >
                      {element.name}
                    </Button>
                  );
                }
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        // className={classes.colorPrimary}
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
