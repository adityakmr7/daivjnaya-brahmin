import React, { useState } from "react";
import { AvatarImage, Box, SearchBox, Text } from "../../components";

import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MessageList } from "./components";
interface MessageProps {}

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const AVATAR_WIDTH = wWidth / 5;
const Message = ({}: MessageProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    console.log(text);
  };
  return (
    <Box flex={1}>
      <SearchBox {...{ searchText, handleChangeText }} />

      <Box marginVertical="s" marginHorizontal="s">
        <Box flexDirection="row">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <AvatarImage
              islabel={true}
              avatarImage={false}
              label={"Add to Story"}
            />
            {[1, 2, 3, 4, 5].map((_, i) => {
              return (
                <AvatarImage
                  islabel={true}
                  key={i}
                  image={require("./assets/ak.png")}
                  label={"Akshay Kumar"}
                  avatarImage={true}
                />
              );
            })}
          </ScrollView>
        </Box>

        <ScrollView
          style={{ marginBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => {
            return (
              <MessageList
                key={i}
                userName="Full Name"
                lastMessage="Hi Bro how are you ?"
                image={require("./assets/ak.png")}
              />
            );
          })}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Message;
