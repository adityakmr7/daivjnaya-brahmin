import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text, LargeButton } from "../../components";
import TextField from "./TextField";
import { Feather as Icon } from "@expo/vector-icons";

interface NewScreenProps {}
const NewScreen = ({}: NewScreenProps) => {
  return (
    <Box flex={1} flexDirection="column">
      <Box marginHorizontal="xl">
        <TextField placeholder="Name" />
        <TextField placeholder="Contact Number" />
        <TextField placeholder="Bank" />
        <TextField placeholder="Card Number" />
        <TextField placeholder="CVV" />
        <TextField placeholder="Amount" />
      </Box>
      <Box
        style={{ shadowOffset: { width: 0, height: 5 } }}
        shadowColor="greyish"
        elevation={1}
        marginHorizontal="xl"
        borderRadius="s"
        marginTop="xxl"
      >
        <RectButton style={{ height: 40, width: "100%" }}>
          <Box flexDirection="row" paddingTop="s" paddingLeft="l">
            <Icon size={20} style={{ paddingRight: 5 }} name="upload" />
            <Text color="primaryText" variant="cardText">
              Upload Files
            </Text>
          </Box>
        </RectButton>
      </Box>
      <LargeButton onPress={() => {}} label="ADD" />
    </Box>
  );
};

export default NewScreen;
