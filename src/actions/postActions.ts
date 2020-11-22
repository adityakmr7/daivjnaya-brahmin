import { postDataProps } from "./../Screens/MyProfile/interfaces";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import restServices from "../services/restServices";
import {
  GET_ALL_POST_ERROR,
  GET_ALL_POST_LOADING,
  GET_ALL_POST_SUCCESS,
  POST_LIKED_ERROR,
  POST_LIKED_SUCCESS,
  POST_POST_ERROR,
  POST_POST_SUCCESS,
  POST_UN_LIKED_ERROR,
  POST_UN_LIKED_SUCCESS,
} from "./constants/postConstant";
import axios from "axios";
import { postDataType } from "../Screens/MyProfile/interfaces";
import { ActionSheetIOS } from "react-native";
export const getAllPost = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_POST_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get("/post?sort=createdDate,desc")
    .then((res) => {
      console.log("postList", res.data);

      dispatch({
        type: GET_ALL_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_POST_ERROR,
        error: err,
      });
    });
};

const getMediaUrl = async (source: string) => {
  const mime = require("mime");
  var data = new FormData();
  const newImageUri = "file:///" + source.split("file:/").join("");
  data.append("file", {
    uri: newImageUri,
    type: mime.getType(newImageUri),
    name: newImageUri.split("/").pop(),
  });
  const _rest = new restServices();
  const token = await _rest.getAccessToken();
  var config: AxiosRequestConfig = {
    method: "post",
    url: "http://3.128.109.207/post/media",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  return axios(config);
};

export const addPost = (postData: postDataType) => async (dispatch: any) => {
  const _rest = new restServices();
  const imageUrl = await getMediaUrl(postData.url);
  const postContent = JSON.stringify({
    content: postData.content,
    location: {
      latitude: postData.latitude,
      locationName: postData.location,
      longitude: postData.longitude,
    },
    myMediaFiles: [
      {
        url: imageUrl.data.url,
        type: "image",
      },
    ],
  });
  console.log("postContent", postContent);
  _rest
    .post("/post", postContent)
    .then((res) => {
      dispatch({
        type: POST_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_POST_ERROR,
        error: err,
      });
    });
};

export const deletePostComment = (id: number) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .delete(`/post/comment/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const getCommentById = (commentId: number) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .get(`/post/comment/${commentId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const deleteCommentLike = (commentId: number) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .delete(`/post/comment/${commentId}/like`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const addCommentLike = (commentId: number) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .post(`/post/comment/${commentId}/like`, {})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const getCommentLike = (commentId: number) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .get(`/post/comment/${commentId}/like`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const createPostMedia = (data: string) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .post(`/post/media`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const deletePostById = (postId: string) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .delete(`/post/${postId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const getPostById = (postId: string) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .get(`/post/${postId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const postIdComment = (postId: string, data: any) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .post(`/post/${postId}/comment`, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const postIdDeleteLike = (postId: number) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .delete(`/post/${postId}/like`)
    .then((res) => {
      const { data } = res;
      dispatch({
        type: POST_UN_LIKED_SUCCESS,
        payload: { value: data, id: postId },
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_UN_LIKED_ERROR,
        error: err,
      });
    });
};

export const postIdPostLike = (postId: number) => (dispatch: any) => {
  const _rest = new restServices();

  _rest
    .postWithNoData(`/post/${postId}/like`)
    .then((res) => {
      const { data } = res;

      dispatch({
        type: POST_LIKED_SUCCESS,
        payload: { data, postId },
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_LIKED_ERROR,
        error: err,
      });
    });
};

// ! No clue about this what this does

export const getPostIdLike = (postId: string) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .get(`/post/${postId}/like`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
