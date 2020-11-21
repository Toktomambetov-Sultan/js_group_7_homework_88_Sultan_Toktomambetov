import { SET_POST_DATA } from "../actionsTypes";
import { fetchRequest, fetchSuccess, fetchError } from "./../main/mainActions";
import axiosOrder from "./../../axiosOrder";
import { push } from "connected-react-router";

const setData = (data) => {
  return {
    type: SET_POST_DATA,
    data,
  };
};

export const getPostData = (query = "") => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.get("/posts" + query);
      dispatch(setData(response.data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};

export const postPostData = (data) => {
  return async (dispatch, getState) => {
    dispatch(fetchRequest());
    try {
      const headers = {
        Authorization: getState().user.user?.token,
      };
      await axiosOrder.post("/posts", data, { headers });
      dispatch(push("/"));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};
