import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, Text } from "./Theme";
interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <BorderlessButton onPress={() => onChange()}>
      <Box alignItems="center" flexDirection="row">
        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          borderWidth={1}
          borderColor="grey"
          justifyContent="center"
          backgroundColor={checked ? "primaryText" : "iconBackground"}
        >
          <Icon name="check" color="white" size={17} />
        </Box>
        <Text variant="cardText" color="primaryText">
          {label}
        </Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;
