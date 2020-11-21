import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import moment from "moment";

import React from "react";
import config from "../../config";

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

const PostItem = ({ post, onComment, hide }) => {
  const classes = useStyles();
  return (
    <Box mt={1} bgcolor="lightblue" padding="10px" borderRadius="5px">
      <Grid container>
        <img
          className={classes.Avatar}
          src={config.ImageUrl + (post?.image || "text.png")}
          alt={post?.title || "image"}
        />
        <Grid item className={classes.right}>
          <Grid container justify="space-between">
            <div>
              <Typography variant="h5" color="primary">
                {post?.title}
              </Typography>
              <Typography variant="h5">by {post?.user.username}</Typography>
            </div>
            <Typography variant="h5">
              {moment(post?.datetime).format("DD MMM HH:mm:ss")}
            </Typography>
          </Grid>
          <Typography variant="subtitle1">
            {hide && post?.description}
          </Typography>
          <Box hidden={hide} textAlign="end">
            <Button variant="outlined" onClick={onComment}>
              comment
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostItem;
