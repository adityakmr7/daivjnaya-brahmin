import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { Box, LoadAssets, theme, Text } from "./src/components";
import AppNavigation from "./src/Home";

const fonts = {
  Saman: require("./assets/fonts/Samarkan.ttf"),
  SFProTextBold: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  SFProTextRegular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  SFProTextSemiBold: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AppNavigation />
      </LoadAssets>
    </ThemeProvider>
  );
}
