import React, { useEffect, useLayoutEffect } from "react";
import { Box, Text } from "../../components";
import {
  MatrimonyStackNavigationProps,
  MatrimonyStackRouteProps,
} from "./MatrimonyRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { GroomList } from "./Groom";
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

interface GroomDetailProps {
  navigation: MatrimonyStackNavigationProps<"GroomDetail">;
  route: MatrimonyStackRouteProps<"GroomDetail">;
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
  //const data = GroomList.filter((item) => item.id === id)[0];
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
                title: data.title,
                img: data.image,
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
  getGroomDetail: (pId: number) => dispatch(getMatrimonyProfileById(pId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroomDetail);
