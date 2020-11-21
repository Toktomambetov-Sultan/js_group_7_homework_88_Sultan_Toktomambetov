import React from "react";
import { Box, Button, TextField } from "@material-ui/core";

const CommentForm = ({ onChange, onSubmit, comment }) => {
  return (
    <Box textAlign="center">
      <form validate="true" onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          required
          fullWidth
          multiline
          rows={2}
          value={comment.text}
          onChange={onChange}
          name="text"
          label="Text"
        />
        <Box marginTop={2} width="300px" display="inline-block">
          <Button type="submit" fullWidth variant="contained" color="primary">
            add comment
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CommentForm;
