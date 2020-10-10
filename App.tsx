import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Box, LoadAssets, theme, Text } from "./src/components";
import AppNavigation from "./src/Screens";
import { B2BAssets } from "./src/Screens/B2B";
import { assetsKarwar } from "./src/Screens/communityHub/Karwar";
import { headerAssets, iconAssets } from "./src/Screens/HomeScreen";
import { assetShop } from "./src/Screens/Jewellery/Shop";
import { assetsVendor } from "./src/Screens/Jewellery/Vendors";
import { assetsWorker } from "./src/Screens/Jewellery/Workers";
const assets = [...headerAssets, ...iconAssets, ...assetsKarwar, 
  ...assetsVendor, ...assetShop, ...assetsWorker, 
  ...B2BAssets
];
const fonts = {
  Saman: require("./assets/fonts/Samarkan.ttf"),
  SFProTextBold: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  SFProTextRegular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  SFProTextSemiBold: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
