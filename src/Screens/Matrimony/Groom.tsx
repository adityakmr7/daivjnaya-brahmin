import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllMatrimonyProfile } from "../../actions/matrimonyActions";
import { Box, Text, HorizontalCard, Loading } from "../../components";
import { combineTabWithStackProps } from "./MatrimonyRoutes";

export const GroomList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/image-1.png"),
    btn: "View full details",
    fulImage: require("../../../assets/images/full-image-1.png"),
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/image-2.png"),
    btn: "View full details",
    fulImage: require("../../../assets/images/full-image-1.png"),
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/image-3.png"),
    btn: "View full details",
    fulImage: require("../../../assets/images/full-image-1.png"),
  },
];

export const GroomAssets = GroomList.map((data, i) => [data.image]);

interface GroomProps {
  navigation: combineTabWithStackProps<"Groom">;
  getAllGroom: (gender: string) => void;
  groomList: {
    loading: boolean;
    matrimonyProfileList: [];
    error: string;
  };
}

const Groom = ({ navigation, getAllGroom, groomList }: GroomProps) => {
  useEffect(() => {
    getAllGroom("MALE");
  }, [getAllGroom]);

  const { loading, matrimonyProfileList, error } = groomList;

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {GroomList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() =>
                  navigation.navigate("GroomDetail", {
                    id: data.id,
                  })
                }
                {...{ data }}
              />
            );
          })}
        </Box>
      </Box>
    </ScrollView>
  );
};

function mapStateToProps(state: any) {
  return {
    groomList: state.matrimony,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllGroom: (gender: string) => dispatch(getAllMatrimonyProfile(gender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Groom);
