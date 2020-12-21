import {
  GET_ALL_JEWELLERY_SHOP_ERROR,
  GET_ALL_JEWELLERY_SHOP_LOADING,
  GET_ALL_JEWELLERY_SHOP_SUCCESS,
  GET_ALL_JEWELLERY_WORKER_ERROR,
  GET_ALL_JEWELLERY_WORKER_LOADING,
  GET_ALL_JEWELLERY_WORKER_SUCCESS,
} from "../actions/constants/jewelleryConstant";

const initialState = {
  jewelleryShopLoading: false,
  jewelleryShopData: "",
  jewelleryShopError: "",
  //worker
  jewelleryWorkerLoading: false,
  jewelleryWorkerData: "",
  jewelleryWorkerError: "",
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
        jewelleryShopData: action.payload,
        jewelleryShopError: "",
      };
    case GET_ALL_JEWELLERY_SHOP_ERROR:
      return {
        jewelleryShopLoading: false,
        jewelleryShopData: "",
        jewelleryShopError: action.error,
      };
    case GET_ALL_JEWELLERY_WORKER_LOADING:
      return {
        jewelleryWorkerLoading: true,
        jewelleryWorkerData: "",
        jewelleryWorkerError: "",
      };
    case GET_ALL_JEWELLERY_WORKER_SUCCESS:
      return {
        jewelleryWorkerLoading: false,
        jewelleryWorkerData: action.payload,
        jewelleryWorkerError: "",
      };
    case GET_ALL_JEWELLERY_WORKER_ERROR:
      return {
        jewelleryWorkerLoading: false,
        jewelleryWorkerData: "",
        jewelleryWorkerError: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
