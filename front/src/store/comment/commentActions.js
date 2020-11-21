import axiosOrder from "../../axiosOrder";
import { fetchError, fetchRequest, fetchSuccess } from "../main/mainActions";

const { SET_COMMENT_DATA, SET_CURRENT_POST } = require("../actionsTypes");

const setData = (data) => {
  return {
    type: SET_COMMENT_DATA,
    data,
  };
};
const setPost = (data) => {
  return {
    type: SET_CURRENT_POST,
    data,
  };
};

export const getCommentData = (id) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const commentsResponse = await axiosOrder.get("/comments?post=" + id);
      const postResponse = await axiosOrder.get("/posts?_id=" + id);
      dispatch(setData(commentsResponse.data));
      dispatch(setPost(postResponse.data[0]));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};

export const postCommentData = (data) => {
  return async (dispatch, getState) => {
    dispatch(fetchRequest());
    try {
      const headers = {
        Authorization: getState().user.user?.token,
      };
      const post = getState().comment.post._id;
      await axiosOrder.post("/comments", { text: data, post }, { headers });
      dispatch(getCommentData(post));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};
