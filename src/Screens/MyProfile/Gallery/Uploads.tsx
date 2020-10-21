import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";

interface UploadsProps {}

const { width: wWidth, height: wHeight } = Dimensions.get("window");

const data = [
  {
    id: 1,
    img: require("../../../../assets/images/upload-1.png"),
  },
  {
    id: 2,
    img: require("../../../../assets/images/upload-2.png"),
  },
  {
    id: 3,
    img: require("../../../../assets/images/upload-3.png"),
  },
  {
    id: 4,
    img: require("../../../../assets/images/upload-4.png"),
  },
  {
    id: 5,
    img: require("../../../../assets/images/upload-5.png"),
  },
  {
    id: 6,
    img: require("../../../../assets/images/upload-6.png"),
  },
  {
    id: 7,
    img: require("../../../../assets/images/upload-7.png"),
  },
];

const Uploads = ({}: UploadsProps) => {
  return (
    <Box flex={1}>
      <ScrollView>
        <Box flexDirection="row">
          {data.map((item, i) => {
            if (item.id <= 3) {
              return (
                <Image
                  style={{
                    marginHorizontal: 1,
                    width: wWidth / 3 - 2,
                    height: wWidth / 3,
                  }}
                  key={i}
                  source={item.img}
                />
              );
            }
          })}
        </Box>
        <Box
          style={{ marginVertical: StyleSheet.hairlineWidth }}
          flexDirection="row"
        >
          {data.map((item, i) => {
            if (item.id === 4) {
              return (
                <Image
                  style={{ width: wWidth, height: wWidth / 2 + 60 }}
                  key={i}
                  source={item.img}
                />
              );
            }
          })}
        </Box>

        <Box flexWrap="wrap" width={wWidth} flexDirection="row">
          {data.map((item, i) => {
            return (
              <Image
                style={{
                  marginTop: StyleSheet.hairlineWidth,
                  marginHorizontal: 1,
                  width: wWidth / 4 + 28,
                  height: wWidth / 3,
                }}
                key={i}
                source={item.img}
              />
            );
          })}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Uploads;
