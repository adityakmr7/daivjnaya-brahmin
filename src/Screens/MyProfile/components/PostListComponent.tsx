import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { postIdDeleteLike, postIdPostLike } from "../../../actions/postActions";
import { Box, Text } from "../../../components";
import { postDataProps } from "../interfaces";
import PostCard from "./PostCard";

interface PostListComponentProps {
  postList: any;
  onPress: () => void;
  userProfileData: any;
  makePostLike: (pId: number) => void;
  makePostUnLike: (pId: number) => void;
  postLikedMessage: string;
  postUnLikedMessage: string;
}
const PostListComponent = ({
  postList,
  userProfileData,
  makePostLike,
  makePostUnLike,
  postLikedMessage,
  postUnLikedMessage,
  onPress,
}: PostListComponentProps) => {
  const { _embedded } = postList;
  const navigation = useNavigation();

  const handlePostLikeDisLike = (isLiked: boolean, pId: number) => {
    if (isLiked === true || postLikedMessage !== "") {
      makePostUnLike(pId);
    } else {
      makePostLike(pId);
    }
  };
  const handleComment = (postId: number) => {
    navigation.navigate("Comment", {
      postId,
    });
  };
  const handlePostShare = (postId: number) => {};

  const renderItem = ({ item }: { item: postDataProps }) => (
    <PostCard
      handlePostShare={handlePostShare}
      handleComment={handleComment}
      postLikedMessage={postLikedMessage}
      postUnLikedMessage={postUnLikedMessage}
      handlePostLikeDisLike={handlePostLikeDisLike}
      userProfileData={userProfileData}
      onPress={onPress}
      post={item}
    />
  );

  return (
    <Box>
      {!_embedded ? (
        <Box>
          <Text>No Post Yet</Text>
        </Box>
      ) : (
        <FlatList
          data={_embedded.normalPostResourceList}
          keyExtractor={(item: postDataProps) => item.postId.toString()}
          renderItem={renderItem}
        />
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    postLikedMessage: state.post.postLikedMessage,
    postUnLikedMessage: state.post.postUnLikedMessage,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  makePostLike: (pId: number) => dispatch(postIdPostLike(pId)),
  makePostUnLike: (pId: number) => dispatch(postIdDeleteLike(pId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostListComponent);
