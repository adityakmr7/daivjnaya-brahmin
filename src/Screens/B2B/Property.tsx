import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllB2bProperty } from "../../actions/b2bActions";
import { Box, Text, HorizontalCard } from "../../components";

interface PropertyProps {
  navigation: any;
  getAllProperty: () => void;
  propertyAll: any;
}

export const PropertyList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/property-1.png"),
    btn: "View full details",
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/property-1.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/property-1.png"),
    btn: "View full details",
  },
];
export const B2BPropertyAssets = PropertyList.map((item, i) => item.image);

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
      <Box flex={1}>
        <Text>{item.owner.fullName}</Text>
      </Box>
    );
  };

  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {propertyLoading ? (
            <Box>
              <ActivityIndicator />
            </Box>
          ) : (
            <Box>
              <FlatList
                data={propertyData}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.pId.toString()}
              />
            </Box>
          )}
        </Box>
      </Box>
    </ScrollView>
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
