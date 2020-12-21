import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllB2bProperty } from "../../actions/b2bActions";
import { Box, Text, HorizontalCard } from "../../components";
import { Image } from "react-native";
interface PropertyProps {
  navigation: any;
  getAllProperty: () => void;
  propertyAll: any;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");

const Property = ({
  navigation,
  getAllProperty,
  propertyAll,
}: PropertyProps) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    getAllProperty();
  }, [isFocused]);
  const { propertyLoading, propertyData, propertyError } = propertyAll;

  // address: "fnfjjccnnc"
  // creationDate: 1608459064000
  // email: "adityakmr088@gmail.com"
  // galleries: (3) [{…}, {…}, {…}]
  // owner:
  // creationDate: 1608459064000
  // designation: "hdjdkccn"
  // email: "adiaty@gmail.com"
  // fullName: "aditya kumar"
  // phoneNumber: "9985225252"
  // place: "fjfmfncncn"
  // poId: 1
  // profilePic: null
  // updatedDate: 1608459064000
  // __proto__: Object
  // pId: 1
  // phoneNumber: "9952885623"
  // propertyName: "kdkfnfnf"
  // updatedDate: 1608459064000

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("B2BPropertyDetail", {
            id: item.pId,
            title: item.propertyName,
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
            {item.owner._links && item.vendor._links.profilePic ? (
              <Image
                style={{ width: "30%", height: "80%" }}
                source={{ uri: item.vendor._links.profilePic.href }}
              />
            ) : null}
            <Box paddingHorizontal="s">
              <Text>{item.owner.fullName ? item.owner.fullName : null}</Text>
              <Text>
                {item.owner.designation ? item.owner.designation : null}
              </Text>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Box backgroundColor="iconBackground" flex={1}>
      {propertyLoading ? (
        <Box>
          <ActivityIndicator />
        </Box>
      ) : (
        <Box flex={1}>
          <FlatList
            data={propertyData}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.pId.toString()}
          />
        </Box>
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    propertyAll: state.b2b,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getAllProperty: () => dispatch(getAllB2bProperty()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Property);
