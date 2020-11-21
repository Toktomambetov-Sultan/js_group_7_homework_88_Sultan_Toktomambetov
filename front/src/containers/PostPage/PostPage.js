import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../../components/PostItem/PostItem";
import {
  getCommentData,
  postCommentData,
} from "../../store/comment/commentActions";
import CommentForm from "../../components/CommentForm/CommentForm";
import { Box } from "@material-ui/core";
import CommentItem from "../../components/CommentItem/CommentItem";

const PostPage = (props) => {
  const [currentComment, setCurrentComment] = useState("");
  const state = useSelector((state) => state.comment);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentData(props.match.params.id));
  }, [props.match.params.id, dispatch]);
  const onChange = (event) => {
    const { value } = event.target;
    setCurrentComment(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(currentComment);
    dispatch(postCommentData(currentComment));
    setCurrentComment("");
  };

  return (
    <div>
      <PostItem post={state.post} hide={true} />

      {userState.user && (
        <Box pt={2}>
          <CommentForm
            comment={currentComment}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Box>
      )}
      <div>
        {state.comments.map((comment) => (
          <CommentItem comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
