import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, isWidthUp, withWidth, withStyles } from "@material-ui/core";
import BlogCard from "./BlogCard";
// import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = (theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});
const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];
function getVerticalBlogPosts(width, blogPosts) {
  const gridRows = [[], [], []];
  let rows;
  let xs;
  if (isWidthUp("md", width)) {
    rows = 3;
    xs = 4;
  } else if (isWidthUp("sm", width)) {
    rows = 2;
    xs = 6;
  } else {
    rows = 1;
    xs = 12;
  }
  blogPosts.forEach((blogPost, index) => {
    gridRows[index % rows].push(
      <Grid key={blogPost.id} item xs={12}>
        <Box mb={3}>
          <BlogCard
            src={blogPost.src}
            title={blogPost.title}
            snippet={blogPost.snippet}
            date={blogPost.date}
            url={blogPost.url}
          />
        </Box>
      </Grid>
    );
  });
  return gridRows.map((element, index) => (
    <Grid key={index} item xs={xs}>
      {element}
    </Grid>
  ));
}

function Blog(props) {
  const { classes, width, blogPosts, selectBlog } = props;

  useEffect(() => {
    selectBlog();
  }, [selectBlog]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >

      <div className={classes.blogContentWrapper}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
        <Grid container spacing={3}>
          {getVerticalBlogPosts(width, blogPosts)}
        </Grid>
      </div>
    </Box>
  );
}

Blog.propTypes = {
  selectBlog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withWidth()(withStyles(styles, { withTheme: true })(Blog));
