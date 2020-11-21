import restServices from "../services/restServices";
import {
  GET_ALL_NEWS_LOADING,
  GET_ALL_NEWS_SUCCESS,
  GET_ALL_NEWS_ERROR,
} from "./constants/newsConstant";

export const getAllNews = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_NEWS_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get("/news")
    .then((res) => {
      console.log("getting all news", res);
      dispatch({
        type: GET_ALL_NEWS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_NEWS_ERROR,
        error: err,
      });
    });
};
