import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useLayoutEffect } from "react";
import {
  MatrimonyStackNavigationProps,
  MatrimonyStackParamList,
} from "./MatrimonyRoutes";
import { BrideList } from "./Bride";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "../../components";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Detail from "./components/Detail";
import { connect } from "react-redux";
import { getMatrimonyProfileById } from "../../actions/matrimonyActions";
import { createMatrimonyProps } from "./interface";
import { ActivityIndicator } from "react-native";

interface BrideDetailProps {
  navigation: MatrimonyStackNavigationProps<"BrideDetail">;
  route: MatrimonyStackNavigationProps<"BrideDetail">;
  getBrideDetail: (pId: number) => void;
  matrimonyDetail: {
    detailLoading: boolean;
    matrimonyDetailProfile: createMatrimonyProps;
  };
}

const BrideDetail = ({
  navigation,
  route,
  getBrideDetail,
  matrimonyDetail,
}: BrideDetailProps) => {
  const id = route.params.id;
  // const data = BrideList.filter((item) => item.id === id)[0];
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
                title: "Hello world",
                img: "",
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
