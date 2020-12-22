import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getJewellerWorker } from "../../actions/jewelleryActions";
import { Box, HorizontalCard, Text } from "../../components";

interface WorkersProps {
  getWorker: () => void;
  jewellery: any;
}

const Workers = ({ getWorker, jewellery }: WorkersProps) => {
  const {
    jewelleryWorkerLoading,
    jewelleryWorkerData,
    jewelleryWorkerError,
  } = jewellery;
  const isFocused = useIsFocused();
  useEffect(() => {
    getWorker();
  }, [isFocused]);
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
