import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ParticlesBg from 'particles-bg';
// import HeaderImage from 'HeaderImage';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,


  withTheme,

} from "@material-ui/core";
// import { withStyles, } from "@mui/material/styles"
import { isWidthUp, withWidth, } from "@material-ui/core"
// import { purple } from '@mui/material/colors';
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import HeaderImage from "../../../shared/components/HeaderImage";
import "../../../shared/components/HeaderImage.css";
const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    // border:,
    borderRadius: 50,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginRight: theme.spacing(2),

    },
    [theme.breakpoints.down("414")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      // marginLeft: theme.spacing(2)
    },
    [theme.breakpoints.down("348")]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),

      // marginLeft: theme.spacing(2)
    },
    [theme.breakpoints.between('860', '885')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      marginRight: theme.spacing(2),
      // marginLeft: theme.spacing(2)
    },
  },
  menuButtonText: {
    borderRadius: 50,
    color: "#fff",
    // fontSize: theme.typography.body1.fontSize,
    // fontWeight: theme.typography.h6.fontWeight,
    fontSize: theme.typography.body1.fontSize,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(4),
    },

    backgroundColor: "#EF7F5A",
    '&:hover': {
      backgroundColor: "#EF7F5A",

    }
  },

  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          {/* <ParticlesBg
            type={theme.particle}
            bg={{ width: "100%", height: "100%", position: "absolute", zIndex: "0", top: 0, left: 0 }}
          /> */}

          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
              square={true}
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          NEW HORIZON
                        </Typography>
                      </Box>
                      <Box mb={2}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h6" : "body1"}
                          color="textSecondary"
                        >
                          WHERE WE HELP YOU SHAPE YOUR IDEAS INTO REALITY
                        </Typography>
                      </Box>
                      <div class="">

                        <Button
                          variant="outlined"
                          // color="secondary"
                          // fullWidth
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                        // href="https://github.com/wonderfullandingpage/Technology-LandingPage"
                        >
                          Contact Us
                        </Button>
                        <Button

                          variant=" contained "
                          // color="secondary"
                          classes={{ label: classes.extraLargeButton }}
                          className={classes.menuButtonText}>See More</Button>

                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    {/* <Grid item md={6} "> */}
                    {/* <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                        className={classes.image}
                        alt="header example"
                      />
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                        className={classes.image}
                        alt="header example"
                      />
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                        className={classes.image}
                        alt="header example"
                      /> */}
                    <StyledEngineProvider injectFirst>
                      <HeaderImage />
                    </StyledEngineProvider>
                    {/* </Grid> */}
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>

    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
