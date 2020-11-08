import React, { useEffect, useLayoutEffect } from "react";
import { Box, Text } from "../../components";
import {
  MatrimonyStackNavigationProps,
  MatrimonyStackParamList,
  MatrimonyStackRouteProps,
} from "./MatrimonyRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Detail from "./components/Detail";
import { connect } from "react-redux";
import { getMatrimonyProfileById } from "../../actions/matrimonyActions";
import { createMatrimonyProps } from "./interface";
import { ActivityIndicator } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";

interface GroomDetailProps {
  navigation: NavigationProp<MatrimonyStackParamList, "GroomDetail">;
  route: RouteProp<MatrimonyStackParamList, "GroomDetail">;
  getGroomDetail: (pId: number) => void;

  matrimonyDetail: {
    detailLoading: boolean;
    matrimonyDetailProfile: createMatrimonyProps;
  };
}

const GroomDetail = ({
  navigation,
  route,
  getGroomDetail,
  matrimonyDetail,
}: GroomDetailProps) => {
  const id = route.params.id;
  const { detailLoading, matrimonyDetailProfile } = matrimonyDetail;

  const { firstName, lastName, images } = matrimonyDetailProfile;

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
                title: `${firstName} ${lastName}`,
                img: images[0]._links.image.href,
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
    getGroomDetail(id);
  }, [id]);

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
  getGroomDetail: (pId: number) => dispatch(getMatrimonyProfileById(pId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroomDetail);
