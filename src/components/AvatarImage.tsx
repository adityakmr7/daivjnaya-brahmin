import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Dimensions, Image, ImageSourcePropType } from "react-native";
import { Box, Text } from "./Theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface MessageProps {}

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const AVATAR_WIDTH = wWidth / 5;

interface AvatarImageProps {
  image?: number;
  label?: string;
  islabel: boolean;
  avatarImage: boolean;
}
const AvatarImage = ({
  image,
  label,
  avatarImage,
  islabel,
}: AvatarImageProps) => {
  return (
    <Box padding="s">
      <Box
        style={{ borderRadius: wWidth / 3 }}
        justifyContent="center"
        alignItems="center"
        width={AVATAR_WIDTH}
        height={AVATAR_WIDTH}
        backgroundColor="grey"
      >
        {avatarImage ? (
          <TouchableWithoutFeedback>
            <Image
              style={{
                width: AVATAR_WIDTH,
                height: AVATAR_WIDTH,
                borderRadius: AVATAR_WIDTH,
              }}
              source={image}
            />
            <Box
              backgroundColor="text"
              position="absolute"
              bottom={8}
              right={8}
            >
              <Icon name="plus-circle" color="white" size={10} />
            </Box>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback>
            <Box
              justifyContent="center"
              alignItems="center"
              width={AVATAR_WIDTH}
              height={AVATAR_WIDTH}
            >
              <Icon color="white" name="camera" size={26} />
              <Box
                backgroundColor="text"
                position="absolute"
                bottom={8}
                right={8}
              >
                <Icon name="plus-circle" color="white" size={10} />
              </Box>
            </Box>
          </TouchableWithoutFeedback>
        )}
      </Box>
      {islabel ? (
        <Text variant="silentText" fontSize={10} color="primaryText">
          {label}
        </Text>
      ) : null}
    </Box>
  );
};

export default AvatarImage;
