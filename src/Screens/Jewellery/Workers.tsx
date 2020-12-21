import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getJewellerWorker } from "../../actions/jewelleryActions";
import { Box, HorizontalCard, Text } from "../../components";

interface WorkersProps {
  getWorker: () => void;
  jewellery: any;
}
const workerList = [
  {
    id: 1,
    image: require("../../../assets/images/jwellary-asset-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 2,
    image: require("../../../assets/images/jwellary-asset-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 3,
    image: require("../../../assets/images/jwellary-asset-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 4,
    image: require("../../../assets/images/jwellary-asset-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
];
export const assetsWorker = workerList.map((item, i) => item.image);

const Workers = ({ getWorker, jewellery }: WorkersProps) => {
  const {
    jewelleryWorkerLoading,
    jewelleryWorkerData,
    jewelleryWorkerError,
  } = jewellery;
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        {/* {workerList.map((data, i) => {
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
function mapStateToProps(state: any) {
  return {
    jewellery: state.jewellery,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getWorker: () => dispatch(getJewellerWorker()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workers);
