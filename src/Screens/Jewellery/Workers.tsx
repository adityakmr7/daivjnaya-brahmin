import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getJewellerWorker } from "../../actions/jewelleryActions";
import { Box, HorizontalCard, Text } from "../../components";

interface WorkersProps {
  getWorker: () => void;
  jewellery: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const Workers = ({ getWorker, jewellery, navigation }: WorkersProps) => {
  const {
    jewelleryWorkerLoading,
    jewelleryWorkerData,
    jewelleryWorkerError,
  } = jewellery;
  const isFocused = useIsFocused();
  useEffect(() => {
    getWorker();
  }, [isFocused]);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("B2BProductDetail", {
            id: item.jId,
            title: item.shopName,
          })
        }
      >
        <Box
          borderTopWidth={0}
          borderLeftWidth={0}
          borderRightWidth={0}
          borderWidth={1}
          marginHorizontal="s"
          height={wWidth / 4}
          borderColor="greyish"
        >
          <Box flex={1} alignItems="center" flexDirection="row">
            {item.galleries.length > 0 &&
            item.galleries[0]._links !== undefined &&
            item.galleries[0]._links.image ? (
              <Image
                style={{ width: "30%", height: "80%" }}
                source={{ uri: item.galleries[0]._links.image.href }}
              />
            ) : null}
            <Box paddingHorizontal="s">
              <Text>{item.shopName}</Text>
              <Text>{item.state}</Text>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Box backgroundColor="iconBackground" flex={1}>
      <Box>
        {jewelleryWorkerLoading ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            <FlatList
              data={jewelleryWorkerData}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.jId.toString()}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
function mapStateToProps(state: any) {
  return {
    jewellery: state.jewellery,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getWorker: () => dispatch(getJewellerWorker()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workers);
