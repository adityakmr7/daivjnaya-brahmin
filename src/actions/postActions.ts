import restServices from "../services/restServices";
import {
  GET_ALL_POST_ERROR,
  GET_ALL_POST_LOADING,
  GET_ALL_POST_SUCCESS,
} from "./constants/postConstant";

export const getAllPost = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_POST_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get("/post")
    .then((res) => {
      console.log("post", res);
      dispatch({
        type: GET_ALL_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ALL_POST_ERROR,
        error: err,
      });
    });
};
