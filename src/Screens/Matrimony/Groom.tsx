import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllMatrimonyProfile } from "../../actions/matrimonyActions";
import { Box, Text, HorizontalCard, Loading } from "../../components";
import { createMatrimonyProps } from "./interface";
import { combineTabWithStackProps } from "./MatrimonyRoutes";

interface GroomProps {
  navigation: combineTabWithStackProps<"Groom">;
  getAllGroom: (gender: string) => void;
  groomList: {
    loading: boolean;
    matrimonyProfileList: {
      _embedded: {
        profileResourceList: [];
      };
    };
    error: string;
  };
}

const Groom = ({ navigation, getAllGroom, groomList }: GroomProps) => {
  useEffect(() => {
    getAllGroom("MALE");
  }, [getAllGroom]);

  const { loading, matrimonyProfileList, error } = groomList;
  const { _embedded } = matrimonyProfileList;
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      {_embedded ? (
        <Box backgroundColor="iconBackground" flex={1}>
          <Box>
            {_embedded &&
              _embedded.profileResourceList.map((data: any, i) => {
                return (
                  <HorizontalCard
                    key={i}
                    onPress={() =>
                      navigation.navigate("GroomDetail", {
                        id: data.pId,
                      })
                    }
                    {...{ data }}
                  />
                );
              })}
          </Box>
        </Box>
      ) : (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text>List Empty</Text>
        </Box>
      )}
    </ScrollView>
  );
};

function mapStateToProps(state: any) {
  return {
    groomList: state.matrimony,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllGroom: (gender: string) => dispatch(getAllMatrimonyProfile("MALE")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Groom);
