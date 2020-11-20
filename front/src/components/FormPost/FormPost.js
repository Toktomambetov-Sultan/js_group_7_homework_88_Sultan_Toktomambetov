import React from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import FileUploader from "./../UI/FileUploader/FileUploader";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "30px",
    width: "400px",
  },
  fileUploader: {
    maxWidth: "400px",
    padding: "30px 20px",
  },
}));

const FormPost = ({ onSubmit, onChange, error }) => {
  const classes = useStyles();
  console.log(error);
  return (
    <Container component="main" maxWidth="md">
      <Box textAlign="center">
        <Typography variant="h5">Add new post</Typography>
        <form onSubmit={onSubmit}>
          <TextField
            margin="normal"
            className={classes.title}
            error={!!error?.title}
            label={error?.title?.message || "Title"}
            name="title"
            autoFocus
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            error={!!error?.description}
            label={error?.description?.message || "Description"}
            fullWidth
            multiline
            rows={7}
            onChange={onChange}
            name="description"
          />
          <div className={classes.fileUploader}>
            <FileUploader
              name="image"
              onChange={onChange}
              error={!!error?.image}
              label={error?.image?.message || "image"}
            />
          </div>
          <Box marginTop={2} width="300px" display="inline-block">
            <Button type="submit" fullWidth variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default FormPost;
