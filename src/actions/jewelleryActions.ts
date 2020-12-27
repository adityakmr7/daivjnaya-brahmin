import restServices from "../services/restServices";
import {
  GET_ALL_JEWELLERY_SHOP_ERROR,
  GET_ALL_JEWELLERY_SHOP_LOADING,
  GET_ALL_JEWELLERY_SHOP_SUCCESS,
  GET_ALL_JEWELLERY_WORKER_ERROR,
  GET_ALL_JEWELLERY_WORKER_LOADING,
  GET_ALL_JEWELLERY_WORKER_SUCCESS,
  POST_ALL_JEWELLERY_LOADING,
  POST_ALL_JEWELLERY_SUCCESS,
  POST_ALL_JEWELLERY_ERROR,
  GET_ALL_JEWELLERY_VENDOR_ERROR,
  GET_ALL_JEWELLERY_VENDOR_SUCCESS,
  GET_ALL_JEWELLERY_VENDOR_LOADING,
  GET_ALL_JEWELLERY_WORKER_DETAIL_ERROR,
  GET_ALL_JEWELLERY_WORKER_DETAIL_SUCCESS,
  GET_ALL_JEWELLERY_WORKER_DETAIL_LOADING,
  GET_ALL_JEWELLERY_VENDOR_DETAIL_ERROR,
  GET_ALL_JEWELLERY_VENDOR_DETAIL_SUCCESS,
  GET_ALL_JEWELLERY_VENDOR_DETAIL_LOADING,
  GET_ALL_JEWELLERY_SHOP_DETAIL_ERROR,
  GET_ALL_JEWELLERY_SHOP_DETAIL_SUCCESS,
  GET_ALL_JEWELLERY_SHOP_DETAIL_LOADING,
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

export const getJewellerVendor = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_JEWELLERY_VENDOR_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/jeweller/vendor")
    .then((res) => {
      console.log("vendor", res);
      dispatch({
        type: GET_ALL_JEWELLERY_VENDOR_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_JEWELLERY_VENDOR_ERROR,
        payload: "Something Went Wrong" || err,
      });
    });
};

export const postJeweller = (data: any, navigation: any) => (dispatch: any) => {
  dispatch({
    type: POST_ALL_JEWELLERY_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post("/jeweller", data)
    .then((res) => {
      dispatch({
        type: POST_ALL_JEWELLERY_SUCCESS,
        payload: res.data,
      });
      if (data.type === "SHOP") {
        navigation.navigate("Shop");
      } else if (data.type === "VENDOR") {
        navigation.navigate("Vendors");
      } else if (data.type === "WORKER") {
        navigation.navigate("Workers");
      }
    })
    .catch((err) => {
      dispatch({
        type: POST_ALL_JEWELLERY_ERROR,
        payload: "Something Went Wrong" || err,
      });
    });
};

// export const postJewellerShop = () => (dispatch: any) => {
//   dispatch({
//     type: POST_ALL_JEWELLERY_SHOP_LOADING,
//   });
//   const _rest = new restServices();
//   _rest
//     .get("/jeweller/worker")
//     .then((res) => {
//       console.log("worker", res);
//       dispatch({
//         type: POST_ALL_JEWELLERY_SHOP_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: POST_ALL_JEWELLERY_SHOP_ERROR,
//         payload: "Something Went Wrong" || err,
//       });
//     });
// };

/**
 *  Shop Detail
 */

export const getJewelleryShopDetail = (id: number) => (dispatch: any) => {
  dispatch({
    type: GET_ALL_JEWELLERY_SHOP_DETAIL_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/jeweller/shop/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_JEWELLERY_SHOP_DETAIL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_JEWELLERY_SHOP_DETAIL_ERROR,
        payload: "Something Went Wrong" || err,
      });
    });
};

export const getJewelleryVendorDetail = (id: number) => (dispatch: any) => {
  dispatch({
    type: GET_ALL_JEWELLERY_VENDOR_DETAIL_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/jeweller/vendor/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_JEWELLERY_VENDOR_DETAIL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_JEWELLERY_VENDOR_DETAIL_ERROR,
        payload: "Something Went Wrong" || err,
      });
    });
};
export const getJewelleryWorkerDetail = (id: number) => (dispatch: any) => {
  dispatch({
    type: GET_ALL_JEWELLERY_WORKER_DETAIL_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/jeweller/worker/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_JEWELLERY_WORKER_DETAIL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_JEWELLERY_WORKER_DETAIL_ERROR,
        payload: "Something Went Wrong" || err,
      });
    });
};
