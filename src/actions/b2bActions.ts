import restServices from "../services/restServices";
import {
  GET_ALL_B2B_PRODUCT_ERROR,
  GET_ALL_B2B_PRODUCT_LOADING,
  GET_ALL_B2B_PRODUCT_SUCCESS,
  GET_ALL_B2B_PROPERTY_ERROR,
  GET_ALL_B2B_PROPERTY_LOADING,
  GET_ALL_B2B_PROPERTY_SUCCESS,
  GET_DETAIL_B2B_PRODUCT_ERROR,
  GET_DETAIL_B2B_PRODUCT_LOADING,
  GET_DETAIL_B2B_PRODUCT_SUCCESS,
  GET_DETAIL_B2B_PROPERTY_ERROR,
  GET_DETAIL_B2B_PROPERTY_LOADING,
  GET_DETAIL_B2B_PROPERTY_SUCCESS,
  POST_NEW_PRODUCT_LOADING,
  POST_NEW_PRODUCT_SUCCESS,
  POST_NEW_PRODUCT_ERROR,
} from "./constants/b2bConstant";
export const getAllB2bProduct = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_B2B_PRODUCT_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/b2b/product")
    .then((res) => {
      console.log("b2ballProduct", res);
      dispatch({
        type: GET_ALL_B2B_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_B2B_PRODUCT_ERROR,
        payload: err,
      });
    });
};

export const getB2bProductDetail = (pId: number) => (dispatch: any) => {
  dispatch({
    type: GET_DETAIL_B2B_PRODUCT_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/b2b/product/${pId}`)
    .then((res) => {
      console.log("b2ballProduct", res);
      dispatch({
        type: GET_DETAIL_B2B_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_DETAIL_B2B_PRODUCT_ERROR,
        payload: err,
      });
    });
};

export const postNewB2bProduct = (data: any) => (dispatch: any) => {
  dispatch({
    type: POST_NEW_PRODUCT_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post("/b2b/product", data)
    .then((res) => {
      console.log("b2ballProduct", res);
      dispatch({
        type: POST_NEW_PRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_NEW_PRODUCT_ERROR,
        payload: err,
      });
    });
};

/**
 * B2B
 * Property
 */

export const getAllB2bProperty = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_B2B_PROPERTY_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/b2b/property")
    .then((res) => {
      console.log("b2ballproperty", res);
      dispatch({
        type: GET_ALL_B2B_PROPERTY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_B2B_PROPERTY_ERROR,
        payload: err,
      });
    });
};

export const getB2bPropertyDetail = (pId: number) => (dispatch: any) => {
  dispatch({
    type: GET_DETAIL_B2B_PROPERTY_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/b2b/property/${pId}`)
    .then((res) => {
      console.log("b2balldETAULProperty", res);
      dispatch({
        type: GET_DETAIL_B2B_PROPERTY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_DETAIL_B2B_PROPERTY_ERROR,
        payload: err,
      });
    });
};
