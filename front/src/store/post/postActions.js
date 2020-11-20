import { SET_POST_DATA } from "../actionsTypes";
import { fetchRequest, fetchSuccess, fetchError } from "./../main/mainActions";
import axiosOrder from "./../../axiosOrder";

const setData = (data) => {
  return {
    type: SET_POST_DATA,
    data,
  };
};

export const getPostData = () => {
  return async (dispatch) => {
    dispatch(fetchRequest);
    try {
      const response = await axiosOrder.get("/posts");
      dispatch(setData(response.data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};

export const postPostData = (data) => {
  return async (dispatch, getState) => {
    dispatch(fetchRequest);
    try {
      const headers = {
        Authorization: getState().user.user?.token,
      };
      const response = await axiosOrder.post("/posts", data, { headers });
      dispatch(setData(response.data));
      dispatch(fetchSuccess());
    } catch (error) {
      dispatch(fetchError(error.response?.data));
    }
  };
};
