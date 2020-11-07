import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllMatrimonyBrideProfile } from "../../actions/matrimonyActions";
import { Box, Text, HorizontalCard, Loading } from "../../components";
import { combineTabWithStackProps } from "./MatrimonyRoutes";

interface BrideProps {
  navigation: combineTabWithStackProps<"Bride">;
  brideList: {
    loading: boolean;
    matrimonyBrideProfileList: {
      _embedded: {
        profileResourceList: [];
      };
    };
    error: string;
  };
  getAllBride: (gender: string) => void;
}
const Bride = ({ navigation, brideList, getAllBride }: BrideProps) => {
  const isFocused = useIsFocused();
  useLayoutEffect(() => {
    getAllBride("FEMALE");
  }, [getAllBride, isFocused]);

  const { loading, matrimonyBrideProfileList, error } = brideList;
  const { _embedded } = matrimonyBrideProfileList;
  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      {_embedded ? (
        <Box backgroundColor="iconBackground" flex={1}>
          <Box>
            {_embedded.profileResourceList.map((data, i) => {
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
      ) : (
        <Box
          height={"100%"}
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Text>Its Empty</Text>
        </Box>
      )}
    </ScrollView>
  );
};

function mapStateToProps(state: any) {
  return {
    brideList: state.matrimony,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllBride: (gender: string) =>
    dispatch(getAllMatrimonyBrideProfile("FEMALE")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bride);
