import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { Box, LoadAssets, theme, Text } from "./src/components";
import AppNavigation from "./src/Screens";
import { headerAssets, iconAssets } from "./src/Screens/HomeScreen";
const assets = [...headerAssets, ...iconAssets];
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
        <AppNavigation />
      </LoadAssets>
    </ThemeProvider>
  );
}
