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
  POST_NEW_PRODUCT_ERROR,
  POST_NEW_PRODUCT_LOADING,
  POST_NEW_PRODUCT_SUCCESS,
  POST_NEW_PROPERTY_ERROR,
  POST_NEW_PROPERTY_LOADING,
  POST_NEW_PROPERTY_SUCCESS,
} from "../actions/constants/b2bConstant";

const initialState = {
  productLoading: false,
  productData: "",
  productError: "",
  // Detail
  productDetailLoading: false,
  productDetailData: "",
  productDetailError: "",

  //create product
  createProductLoading: false,
  createProductSuccess: "",
  createProductError: "",

  //property

  propertyLoading: false,
  propertyData: "",
  propertyError: "",
  // property detail
  propertyDetailLoading: false,
  propertyDetailData: "",
  propertyDetailError: "",

  // create property
  createPropertyLoading: false,
  createPropertySuccess: "",
  createPropertyError: "",
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
        productData: action.payload._embedded.productResourceList,
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
    case POST_NEW_PRODUCT_LOADING:
      return {
        ...state,
        createProductLoading: true,
        createProductSuccess: "",
        createProductError: "",
      };
    case POST_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        createProductLoading: false,
        createProductSuccess: "Product Created",
        createProductError: "",
      };
    case POST_NEW_PRODUCT_ERROR:
      return {
        ...state,

        createProductLoading: false,
        createProductSuccess: "",
        createProductError: "Something Went Wrong",
      };

    // Property
    case GET_ALL_B2B_PROPERTY_LOADING:
      return {
        ...state,
        propertyLoading: true,
        propertyData: "",
        propertyError: "",
      };
    case GET_ALL_B2B_PROPERTY_SUCCESS:
      return {
        ...state,
        propertyLoading: false,
        propertyData: action.payload._embedded.propertyResourceList,
        propertyError: "",
      };
    case GET_ALL_B2B_PROPERTY_ERROR:
      return {
        ...state,
        propertyLoading: false,
        propertyData: "",
        propertyError: "Something Went Wrong",
      };
    case GET_DETAIL_B2B_PROPERTY_LOADING:
      return {
        ...state,
        propertyDetailLoading: true,
        propertyDetailData: "",
        propertyDetailError: "",
      };
    case GET_DETAIL_B2B_PROPERTY_SUCCESS:
      return {
        ...state,
        propertyDetailLoading: false,
        propertyDetailData: action.payload,
        propertyDetailError: "",
      };
    case GET_DETAIL_B2B_PROPERTY_ERROR:
      return {
        ...state,
        propertyDetailLoading: false,
        propertyDetailData: "",
        propertyDetailError: "Something Went Wrong",
      };
    // new Property
    case POST_NEW_PROPERTY_LOADING:
      return {
        ...state,
        createPropertyLoading: true,
        createPropertySuccess: "",
        createPropertyError: "",
      };
    case POST_NEW_PROPERTY_SUCCESS:
      return {
        ...state,
        createPropertyLoading: false,
        createPropertySuccess: "Property Created",
        createPropertyError: "",
      };
    case POST_NEW_PROPERTY_ERROR:
      return {
        ...state,
        createPropertyLoading: false,
        createPropertySuccess: "",
        createPropertyError: "Something Went Wrong",
      };
    default:
      return {
        ...state,
      };
  }
};
