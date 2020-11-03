import React, { useEffect, useLayoutEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllMatrimonyProfile } from "../../actions/matrimonyActions";
import { Box, Text, HorizontalCard, Loading } from "../../components";
import { combineTabWithStackProps } from "./MatrimonyRoutes";

export const BrideList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/bride-1.png"),
    btn: "View full details",
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/bride-2.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/bride-3.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/bride-4.png"),
    btn: "View full details",
  },
];

interface BrideProps {
  navigation: combineTabWithStackProps<"Bride">;
  brideList: {
    loading: boolean;
    matrimonyProfileList: [];
    error: string;
  };
  getAllBride: (gender: string) => void;
}
const Bride = ({ navigation, brideList, getAllBride }: BrideProps) => {
  useLayoutEffect(() => {
    getAllBride("FEMALE");
  }, [getAllBride]);

  const { loading, matrimonyProfileList, error } = brideList;

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {BrideList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() =>
                  navigation.navigate("BrideDetail", {
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
    brideList: state.matrimony,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllBride: (gender: string) => dispatch(getAllMatrimonyProfile(gender)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bride);
