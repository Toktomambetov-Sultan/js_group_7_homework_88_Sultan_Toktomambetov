import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormPost from "../../components/FormPost/FormPost";
import { postPostData } from "../../store/post/postActions";

const AddPostPage = () => {
  const [currentPost, setCurrentPost] = useState({
    title: "",
    description: "",
    image: null,
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.main);
  const postPostDataHandler = (data) => dispatch(postPostData(data));
  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(currentPost).forEach((key) => {
      formData.append(key, currentPost[key]);
    });
    postPostDataHandler(formData);
  };
  const onFormChange = (event) => {
    const { name } = event.target;
    let value;
    switch (name) {
      case "image":
        value = event.target.files[0];
        break;
      default:
        value = event.target.value;
    }
    setCurrentPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <FormPost
      onChange={onFormChange}
      post={currentPost}
      error={state.error?.errors}
      onSubmit={onFormSubmit}
    />
  );
};

export default AddPostPage;
