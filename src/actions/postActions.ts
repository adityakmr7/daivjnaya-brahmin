import restServices from "../services/restServices";
import {
  GET_ALL_POST_ERROR,
  GET_ALL_POST_LOADING,
  GET_ALL_POST_SUCCESS,
} from "./constants/postConstant";

export const getAllPost = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_POST_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get("/post")
    .then((res) => {
      console.log("post", res);
      dispatch({
        type: GET_ALL_POST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ALL_POST_ERROR,
        error: err,
      });
    });
};

// {
//   "content": "string",
//   "location": {
//     "latitude": 0,
//     "locationName": "string",
//     "longitude": 0
//   },
//   "myMediaFiles": [
//     {
//       "type": "image",
//       "url": "string"
//     }
//   ]
// }

export const addPost = (data: {}) => (dispatch: any) => {
  const _rest = new restServices();
  const postContent = {
    content: data.content,
    location: {
      latitude: 0,
      locationName: "hello",
      longitude: 0,
    },
    myMediaFiles: [
      {
        url: "",
        type: "image",
      },
    ],
  };
  _rest
    .post("/post", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
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

export const postIdDeleteLike = (postId: string) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .delete(`/post/${postId}/like`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const postIdPostLike = (postId: string) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .post(`/post/${postId}/like`, {})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const getPostIdLike = (postId: string) => (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .get(`/post/${postId}/like`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
