import {
  GET_ALL_B2B_PRODUCT_ERROR,
  GET_ALL_B2B_PRODUCT_LOADING,
  GET_ALL_B2B_PRODUCT_SUCCESS,
  GET_DETAIL_B2B_PRODUCT_ERROR,
  GET_DETAIL_B2B_PRODUCT_LOADING,
  GET_DETAIL_B2B_PRODUCT_SUCCESS,
} from "../actions/constants/b2bConstant";

const initialState = {
  productLoading: false,
  productData: "",
  productError: "",
  // Detail
  productDetailLoading: false,
  productDetailData: "",
  productDetailError: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_B2B_PRODUCT_LOADING:
      return {
        ...state,
        productLoading: true,
        productData: "",
        productError: "",
      };
    case GET_ALL_B2B_PRODUCT_SUCCESS:
      return {
        ...state,
        productLoading: false,
        productData: action.payload,
        productError: "",
      };
    case GET_ALL_B2B_PRODUCT_ERROR:
      return {
        ...state,
        productLoading: false,
        productData: "",
        productError: action.error,
      };
    //detail
    case GET_DETAIL_B2B_PRODUCT_LOADING:
      return {
        ...state,
        productDetailLoading: true,
        productDetailData: "",
        productDetailError: "",
      };
    case GET_DETAIL_B2B_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetailLoading: false,
        productDetailData: action.payload,
        productDetailError: "",
      };
    case GET_DETAIL_B2B_PRODUCT_ERROR:
      return {
        ...state,
        productDetailLoading: false,
        productDetailData: "",
        productDetailError: "Something Went Wrong",
      };
    default:
      break;
  }
};
