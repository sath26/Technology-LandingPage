import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ParticlesBg from 'particles-bg'
import {
    Grid,
    Typography,
    Card,
    Button,
    Hidden,
    Box,
    withStyles,
    withWidth,
    isWidthUp,
    withTheme,

} from "@material-ui/core";
// import { purple } from '@mui/material/colors';
import WaveBorder from "./WaveBorder";
import ZoomImage from "./ZoomImage";

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
const defaultVars = {
    // '--optionBackground': 'url(https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg)'
    '--optionBackground': `url(${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg)`
}
function HeaderImage(props) {
    const { classes, theme, width } = props;
    return (

        <Grid item md={6} className="options" >
            {/*  */}
            <Grid item  >
                <Box className="option" style={defaultVars}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i class="fas fa-sun"></i>
                        </div>
                        <div className="info">
                            {/* <div className="main">Inatethi</div> */}
                            {/* <div className="sub">Omuke trughte a otufta</div> */}
                        </div>
                    </div>
                </Box>
            </Grid>
            <Grid item>
                <Box className="option" style={defaultVars}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i class="fas fa-sun"></i>
                        </div>
                        <div className="info">
                            {/* <div className="main">Inatethi</div> */}
                            {/* <div className="sub">Omuke trughte a otufta</div> */}
                        </div>
                    </div>
                </Box>
            </Grid>
            <Grid item>
                <Box className="option" style={defaultVars}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i class="fas fa-sun"></i>
                        </div>
                        <div className="info">
                            {/* <div className="main">Inatethi</div> */}
                            {/* <div className="sub">Omuke trughte a otufta</div> */}
                        </div>
                    </div>
                </Box>
            </Grid>
        </Grid>
    );
}

HeaderImage.propTypes = {
    classes: PropTypes.object,
    width: PropTypes.string,
    theme: PropTypes.object,
};

export default withWidth()(
    withStyles(styles, { withTheme: true })(HeaderImage)
);
