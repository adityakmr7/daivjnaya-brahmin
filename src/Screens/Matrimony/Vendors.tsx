import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text, HorizontalCard } from "../../components";
import {
  MatrimonyStackParamList,
  MatrimonyTabParamList,
} from "./MatrimonyRoutes";

const Vendors = ({
  navigation,
}: {
  navigation: BottomTabNavigationProp<MatrimonyTabParamList, "Vendors">;
}) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        {/* <Box>
          {VendorList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() =>
                  navigation.navigate("VendorDetail", {
                    id: data.id,
                  })
                }
                {...{ data }}
              />
            );
          })}
        </Box> */}
      </Box>
    </ScrollView>
  );
};

export default Vendors;
