import {
  GET_ALL_JEWELLERY_SHOP_DETAIL_ERROR,
  GET_ALL_JEWELLERY_SHOP_DETAIL_LOADING,
  GET_ALL_JEWELLERY_SHOP_DETAIL_SUCCESS,
  GET_ALL_JEWELLERY_SHOP_ERROR,
  GET_ALL_JEWELLERY_SHOP_LOADING,
  GET_ALL_JEWELLERY_SHOP_SUCCESS,
  GET_ALL_JEWELLERY_VENDOR_DETAIL_ERROR,
  GET_ALL_JEWELLERY_VENDOR_DETAIL_LOADING,
  GET_ALL_JEWELLERY_VENDOR_DETAIL_SUCCESS,
  GET_ALL_JEWELLERY_VENDOR_ERROR,
  GET_ALL_JEWELLERY_VENDOR_LOADING,
  GET_ALL_JEWELLERY_VENDOR_SUCCESS,
  GET_ALL_JEWELLERY_WORKER_DETAIL_ERROR,
  GET_ALL_JEWELLERY_WORKER_DETAIL_LOADING,
  GET_ALL_JEWELLERY_WORKER_DETAIL_SUCCESS,
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

  //vendor
  jewelleryVendorLoading: false,
  jewelleryVendorData: "",
  jewelleryVendorError: "",
  // post
  postJewelleryLoading: false,
  postJewelleryData: "",
  postJewelleryError: "",
  // SHop Detail
  shopDetailLoading: false,
  shopDetailData: "",
  shopDetailError: "",
  // vendor detail
  vendorDetailLoading: false,
  vendorDetailData: "",
  vendorDetailError: "",
  //worker detail
  workerDetailLoading: false,
  workerDetailData: "",
  workerDetailError: "",
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
    case GET_ALL_JEWELLERY_VENDOR_LOADING:
      return {
        ...state,
        jewelleryVendorLoading: true,
        jewelleryVendorData: "",
        jewelleryVendorError: "",
      };
    case GET_ALL_JEWELLERY_VENDOR_SUCCESS:
      return {
        ...state,
        jewelleryVendorLoading: false,
        jewelleryVendorData:
          action.payload._embedded.jewellerVendorResourceList,
        jewelleryVendorError: "",
      };
    case GET_ALL_JEWELLERY_VENDOR_ERROR:
      return {
        ...state,
        jewelleryVendorLoading: false,
        jewelleryVendorData: "",
        jewelleryVendorError: "Something Went Wrong",
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
    // Detail
    case GET_ALL_JEWELLERY_SHOP_DETAIL_LOADING:
      return {
        ...state,
        shopDetailLoading: true,
        shopDetailData: "",
        shopDetailError: "",
      };
    case GET_ALL_JEWELLERY_SHOP_DETAIL_SUCCESS:
      return {
        ...state,
        shopDetailLoading: false,
        shopDetailData: action.payload,
        shopDetailError: "",
      };
    case GET_ALL_JEWELLERY_SHOP_DETAIL_ERROR:
      return {
        ...state,
        shopDetailLoading: false,
        shopDetailData: "",
        shopDetailError: "Something Went Wrong",
      };

    // worker

    case GET_ALL_JEWELLERY_VENDOR_DETAIL_LOADING:
      return {
        ...state,
        vendorDetailLoading: true,
        vendorDetailData: "",
        vendorDetailError: "",
      };
    case GET_ALL_JEWELLERY_VENDOR_DETAIL_SUCCESS:
      return {
        ...state,
        vendorDetailLoading: false,
        vendorDetailData: action.payload,
        vendorDetailError: "",
      };
    case GET_ALL_JEWELLERY_VENDOR_DETAIL_ERROR:
      return {
        ...state,
        vendorDetailLoading: false,
        vendorDetailData: "",
        vendorDetailError: "Something Went Wrong",
      };
    // worker

    case GET_ALL_JEWELLERY_WORKER_DETAIL_LOADING:
      return {
        ...state,
        workerDetailLoading: true,
        workerDetailData: "",
        workerDetailError: "",
      };
    case GET_ALL_JEWELLERY_WORKER_DETAIL_SUCCESS:
      return {
        ...state,
        workerDetailLoading: false,
        workerDetailData: action.payload,
        workerDetailError: "",
      };
    case GET_ALL_JEWELLERY_WORKER_DETAIL_ERROR:
      return {
        ...state,
        workerDetailLoading: false,
        workerDetailData: "",
        workerDetailError: "Something Went Wrong",
      };
    default:
      return {
        ...state,
      };
  }
};
