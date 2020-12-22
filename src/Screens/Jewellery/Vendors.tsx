import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";

interface VendorsProps {}

const Vendors = ({}: VendorsProps) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        {/* {vendorList.map((data, i) => {
          return (
            <HorizontalCard
              key={i}
              onPress={() => console.log("ShopDetail")}
              {...{ data }}
            />
          );
        })} */}
      </Box>
    </ScrollView>
  );
};

export default Vendors;
