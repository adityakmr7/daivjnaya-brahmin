import restServices from "../services/restServices";
import {
  GET_ALL_JEWELLERY_SHOP_ERROR,
  GET_ALL_JEWELLERY_SHOP_LOADING,
  GET_ALL_JEWELLERY_SHOP_SUCCESS,
  GET_ALL_JEWELLERY_WORKER_ERROR,
  GET_ALL_JEWELLERY_WORKER_LOADING,
  GET_ALL_JEWELLERY_WORKER_SUCCESS,
} from "./constants/jewelleryConstant";

export const getJewellerShop = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_JEWELLERY_SHOP_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/jeweller/shop")
    .then((res) => {
      console.log("shop", res);
      dispatch({
        type: GET_ALL_JEWELLERY_SHOP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_JEWELLERY_SHOP_ERROR,
        payload: "Something Went Wrong" || err,
      });
    });
};

export const getJewellerWorker = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_JEWELLERY_WORKER_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/jeweller/worker")
    .then((res) => {
      console.log("worker", res);
      dispatch({
        type: GET_ALL_JEWELLERY_WORKER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_JEWELLERY_WORKER_ERROR,
        payload: "Something Went Wrong" || err,
      });
    });
};
