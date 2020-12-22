import {
  GET_ALL_JEWELLERY_SHOP_ERROR,
  GET_ALL_JEWELLERY_SHOP_LOADING,
  GET_ALL_JEWELLERY_SHOP_SUCCESS,
  GET_ALL_JEWELLERY_WORKER_ERROR,
  GET_ALL_JEWELLERY_WORKER_LOADING,
  GET_ALL_JEWELLERY_WORKER_SUCCESS,
  POST_ALL_JEWELLERY_ERROR,
  POST_ALL_JEWELLERY_LOADING,
  POST_ALL_JEWELLERY_SUCCESS,
} from "../actions/constants/jewelleryConstant";

const initialState = {
  jewelleryShopLoading: false,
  jewelleryShopData: "",
  jewelleryShopError: "",
  //worker
  jewelleryWorkerLoading: false,
  jewelleryWorkerData: "",
  jewelleryWorkerError: "",
  // post
  postJewelleryLoading: false,
  postJewelleryData: "",
  postJewelleryError: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_JEWELLERY_SHOP_LOADING:
      return {
        ...state,
        jewelleryShopLoading: true,
        jewelleryShopData: "",
        jewelleryShopError: "",
      };
    case GET_ALL_JEWELLERY_SHOP_SUCCESS:
      return {
        ...state,
        jewelleryShopLoading: false,
        jewelleryShopData: action.payload._embedded.jewellerShopResourceList,
        jewelleryShopError: "",
      };
    case GET_ALL_JEWELLERY_SHOP_ERROR:
      return {
        ...state,
        jewelleryShopLoading: false,
        jewelleryShopData: "",
        jewelleryShopError: action.error,
      };
    case GET_ALL_JEWELLERY_WORKER_LOADING:
      return {
        ...state,
        jewelleryWorkerLoading: true,
        jewelleryWorkerData: "",
        jewelleryWorkerError: "",
      };
    case GET_ALL_JEWELLERY_WORKER_SUCCESS:
      return {
        ...state,
        jewelleryWorkerLoading: false,
        jewelleryWorkerData:
          action.payload._embedded.jewellerWorkerResourceList,
        jewelleryWorkerError: "",
      };
    case GET_ALL_JEWELLERY_WORKER_ERROR:
      return {
        ...state,
        jewelleryWorkerLoading: false,
        jewelleryWorkerData: "",
        jewelleryWorkerError: action.error,
      };
    case POST_ALL_JEWELLERY_LOADING:
      return {
        ...state,
        postJewelleryLoading: true,
        postJewelleryData: "",
        postJewelleryError: "",
      };
    case POST_ALL_JEWELLERY_SUCCESS:
      return {
        ...state,
        postJewelleryLoading: false,
        postJewelleryData: "Post Created",
        postJewelleryError: "",
      };
    case POST_ALL_JEWELLERY_ERROR:
      return {
        ...state,
        postJewelleryLoading: false,
        postJewelleryData: "",
        postJewelleryError: "Something Went Wrong",
      };
    default:
      return {
        ...state,
      };
  }
};
