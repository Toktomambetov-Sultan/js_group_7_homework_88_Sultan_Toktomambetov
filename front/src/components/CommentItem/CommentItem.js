import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  top: {
    width: "100%",
  },
  right: {
    flexGrow: "1",
    paddingLeft: "10px",
  },
  Avatar: {
    width: "100px",
    height: "100px",
  },
}));

const CommentItem = ({ comment }) => {
  const classes = useStyles();
  return (
    <Box mt={1} bgcolor="lightgreen" padding="10px" borderRadius="5px">
      <Grid
        styles={classes.top}
        container
        direction="row"
        justify="space-between"
      >
        <Typography variant="h5" color="primary">
          {comment?.user.username}
        </Typography>
      </Grid>
      <Typography variant="h6" component="div">
        {comment?.text}
      </Typography>
    </Box>
  );
};

export default CommentItem;
