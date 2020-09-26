import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { TextStyle, ViewStyle } from "react-native";
import { Image } from "react-native-svg";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | Image };

export const theme = {
  colors: {
    mainBackground: "#EBEFF2",
    mainIconColor: "#D4AF37",
    iconBackground: "#FFFFFF",
    grey: "#707070",
    greyish: "#0000001A",
    primaryText: "#000000",
    notificationColor: "#E20000",
    selectColor: "#6EAAF7",
    successColor: "#0CC155",
    danger: "#FF0058",
    text: "rgba(12,13,52,0.4)",
  },
  spacing: {
    xs: 5,
    s: 10,
    m: 14,
    mx: 17,
    l: 20,
    xl: 24,
    xxl: 40,
  },
  borderRadii: {
    s: 5,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    cardTitle: {
      fontFamily: "SFProTextBold",
      fontSize: 21,
      color: "iconBackground",
    },
    cardSubTitle: {
      fontFamily: "SFProTextSemiBold",
      fontSize: 14,
      color: "iconBackground",
    },
    cardText: {
      fontFamily: "SFProTextRegular",
      fontSize: 12,
      color: "iconBackground",
    },
    profileAction: {
      fontFamily: "SFProTextRegular",
      fontSize: 10,
      color: "primaryText",
    },

    sectionTitle: {
      fontFamily: "SFProTextBold",
      fontSize: 18,
      color: "primaryText",
    },
    mainIconSubTitle: {
      fontFamily: "SFProTextSemiBold",
      fontSize: 13,
      color: "primaryText",
    },
    silentText: {
      fontFamily: "SFProTextBold",
      fontSize: 16,
      color: "grey",
    },
    seeAll: {
      fontFamily: "SFProTextSemiBold",
      fontSize: 13,
      color: "mainIconColor",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export const useTheme = () => useReTheme<Theme>();

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
