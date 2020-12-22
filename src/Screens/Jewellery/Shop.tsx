import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getJewellerShop } from "../../actions/jewelleryActions";
import { Box, HorizontalCard, SearchBox, Text } from "../../components";

const shopList = [
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

export const assetShop = shopList.map((item, i) => item.image);
interface ShopProps {
  getShop: () => void;
  jewellery: any;
}

function Shop({ getShop, jewellery }: ShopProps) {
  const {
    jewelleryShopLoading,
    jewelleryShopData,
    jewelleryShopError,
  } = jewellery;
  const isFocused = useIsFocused();
  useEffect(() => {
    getShop();
  }, [isFocused]);
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        {/* {shopList.map((data, i) => {
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
}

function mapStateToProps(state: any) {
  return {
    jewellery: state.jewellery,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getShop: () => dispatch(getJewellerShop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
