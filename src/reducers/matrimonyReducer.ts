import {
  GET_ALL_MATRIMONY_BRIDE_SUCCESS,
  GET_ALL_MATRIMONY_ERROR,
  GET_ALL_MATRIMONY_LOADING,
  GET_ALL_MATRIMONY_SUCCESS,
  GET_ALL_MATRIMONY_VENDOR_DETAIL_ERROR,
  GET_ALL_MATRIMONY_VENDOR_DETAIL_LOADING,
  GET_ALL_MATRIMONY_VENDOR_DETAIL_SUCCESS,
  GET_ALL_MATRIMONY_VENDOR_ERROR,
  GET_ALL_MATRIMONY_VENDOR_LOADING,
  GET_ALL_MATRIMONY_VENDOR_SUCCESS,
  GET_MATRIMONY_PROFILE_BY_ID_ERROR,
  GET_MATRIMONY_PROFILE_BY_ID_LOADING,
  GET_MATRIMONY_PROFILE_BY_ID_SUCCESS,
  MATRIMONY_CREATED_ERROR,
  MATRIMONY_CREATED_SUCCESS,
  MATRIMONY_CREATING,
  POST_MATRIMONY_VENDOR_LOADING,
  POST_MATRIMONY_VENDOR_LOADING_ERROR,
  POST_MATRIMONY_VENDOR_LOADING_SUCCESS,
} from "./../actions/constants/matrimonyConstants";

const initialState = {
  loading: false,
  matrimonyProfileList: [],
  matrimonyBrideProfileList: [],
  matrimonyDetailProfile: [],
  detailLoading: false,
  // Create
  error: "",
  createLoading: false,
  createError: "",
  // VENDOR
  matrimonyVendorLoading: false,
  matrimonyVendorData: "",
  matrimonyVendorError: "",
  // VENDOR DETAIL
  matrimonyVendorDetailLoading: false,
  matrimonyVendorDetailData: "",
  matrimonyVendorDetailError: "",
  // post vendor register
  postVendorLoading: false,
  postVendorSuccess: "",
  postVendorError: "",
};

const matrimonyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_MATRIMONY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_MATRIMONY_SUCCESS:
      return {
        ...state,
        loading: false,
        matrimonyProfileList: action.payload,
      };
    case GET_ALL_MATRIMONY_BRIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        matrimonyBrideProfileList: action.payload,
      };
    case GET_ALL_MATRIMONY_ERROR:
      return {
        ...state,
        loading: true,
        error: "Network Error",
      };

    case GET_MATRIMONY_PROFILE_BY_ID_LOADING:
      return {
        ...state,
        detailLoading: true,
      };
    case GET_MATRIMONY_PROFILE_BY_ID_SUCCESS:
      return {
        ...state,
        matrimonyDetailProfile: action.payload,
        detailLoading: false,
      };
    case GET_MATRIMONY_PROFILE_BY_ID_ERROR:
      return {
        ...state,
        detailLoading: true,
      };
    case MATRIMONY_CREATING:
      return {
        ...state,
        createLoading: true,
        successMessage: "",
        createError: "",
      };
    case MATRIMONY_CREATED_SUCCESS:
      return {
        ...state,
        createLoading: false,
        successMessage: action.payload.status,
      };
    case MATRIMONY_CREATED_ERROR:
      return {
        ...state,
        createLoading: false,
        successMessage: "",
        createError: action.error,
      };
    case GET_ALL_MATRIMONY_VENDOR_LOADING:
      return {
        ...state,
        matrimonyVendorLoading: true,
        matrimonyVendorData: "",
        matrimonyVendorError: "",
      };
    case GET_ALL_MATRIMONY_VENDOR_SUCCESS:
      return {
        ...state,
        matrimonyVendorLoading: false,
        matrimonyVendorData:
          action.payload._embedded.matrimonyVendorResourceList,
        matrimonyVendorError: "",
      };
    case GET_ALL_MATRIMONY_VENDOR_ERROR:
      return {
        ...state,
        matrimonyVendorLoading: false,
        matrimonyVendorData: "",
        matrimonyVendorError: "Something went wrong",
      };
    // vendor detail
    case GET_ALL_MATRIMONY_VENDOR_DETAIL_LOADING:
      return {
        ...state,
        matrimonyVendorDetailLoading: true,
        matrimonyVendorDetailData: "",
        matrimonyVendorDetailError: "",
      };
    case GET_ALL_MATRIMONY_VENDOR_DETAIL_SUCCESS:
      return {
        ...state,
        matrimonyVendorDetailLoading: false,
        matrimonyVendorDetailData: action.payload,
        matrimonyVendorDetailError: "",
      };
    case GET_ALL_MATRIMONY_VENDOR_DETAIL_ERROR:
      return {
        ...state,
        matrimonyVendorDetailLoading: false,
        matrimonyVendorDetailData: "",
        matrimonyVendorDetailError: "Something Went Wrong",
      };
    case POST_MATRIMONY_VENDOR_LOADING:
      return {
        ...state,
        postVendorLoading: true,
        postVendorSuccess: "",
        postVendorError: "",
      };
    case POST_MATRIMONY_VENDOR_LOADING_SUCCESS:
      return {
        ...state,
        postVendorLoading: false,
        postVendorSuccess: action.payload,
        postVendorError: "",
      };
    case POST_MATRIMONY_VENDOR_LOADING_ERROR:
      return {
        ...state,
        postVendorLoading: false,
        postVendorSuccess: "",
        postVendorError: "Something went wrong" || action.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default matrimonyReducer;
