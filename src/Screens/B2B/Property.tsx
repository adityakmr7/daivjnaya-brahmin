import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
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
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {/* {PropertyList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() => console.log("Navigate to propertyDetail screen")}
                {...{ data }}
              />
            );
          })} */}
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
