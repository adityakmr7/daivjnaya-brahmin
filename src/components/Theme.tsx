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
    grey: "#DBDEE0",
    primaryText: "#000000",
    notificationColor: "#E20000",
    selectColor: "#6EAAF7",
    successColor: "#0CC155",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,

      color: "white",
      textAlign: "center",
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
