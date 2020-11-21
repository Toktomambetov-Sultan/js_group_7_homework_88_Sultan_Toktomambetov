import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../store/post/postActions";
import PostItem from "./../../components/PostItem/PostItem";

const ForumPage = (props) => {
  const state = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostData());
  }, [dispatch]);
  const onComment = (id) => {
    props.history.push("posts/" + id);
  };
  return (
    <div>
      {state.posts.map((post) => (
        <PostItem
          post={post}
          key={post._id}
          onComment={() => onComment(post._id)}
        />
      ))}
    </div>
  );
};

export default ForumPage;
