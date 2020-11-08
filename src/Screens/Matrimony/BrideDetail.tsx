import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useLayoutEffect } from "react";
import {
  MatrimonyStackNavigationProps,
  MatrimonyStackParamList,
} from "./MatrimonyRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "../../components";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Detail from "./components/Detail";
import { connect } from "react-redux";
import { getMatrimonyProfileById } from "../../actions/matrimonyActions";
import { createMatrimonyProps, horizontalCardDataType } from "./interface";
import { ActivityIndicator } from "react-native";

interface BrideDetailProps {
  navigation: StackNavigationProp<MatrimonyStackParamList, "BrideDetail">;
  route: RouteProp<MatrimonyStackParamList, "BrideDetail">;
  getBrideDetail: (pId: number) => void;
  matrimonyDetail: {
    detailLoading: boolean;
    matrimonyDetailProfile: horizontalCardDataType;
  };
}

const BrideDetail = ({
  navigation,
  route,
  getBrideDetail,
  matrimonyDetail,
}: BrideDetailProps) => {
  const id = route.params.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitleStyle: {
        display: "none",
      },
      headerRight: () => (
        <Box paddingHorizontal="s" flexDirection="row" alignItems="center">
          <Text paddingHorizontal="s">1/2</Text>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("FullScreen", {
                title: matrimonyDetailProfile.firstName,
                img: matrimonyDetailProfile.images[0]._links.image.href,
              })
            }
          >
            <Icon name="more-vertical" size={26} />
          </TouchableWithoutFeedback>
        </Box>
      ),
    });
  }, [navigation]);
  useEffect(() => {
    getBrideDetail(id);
  }, [id]);

  const { detailLoading, matrimonyDetailProfile } = matrimonyDetail;
  if (detailLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }
  return (
    <Box flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Detail data={matrimonyDetailProfile} />
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    matrimonyDetail: state.matrimony,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getBrideDetail: (pId: number) => dispatch(getMatrimonyProfileById(pId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrideDetail);
