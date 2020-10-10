import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface UserNetWorkCardProps {
  profileImage: number;
  addButton: boolean;
  chat?: boolean;
  day?:string;
}
const UserNetWorkCard = ({
  chat,
  profileImage,
  day,
  addButton,
}: UserNetWorkCardProps) => {
  return (
    <Box
      paddingVertical="s"
      alignItems="center"
      justifyContent="space-around"
      flexDirection="row"
      style={{ borderWidth: StyleSheet.hairlineWidth }}
    >
      <Box>
        <Image
          style={{ height: 50, width: 50, borderRadius: 25 }}
          source={profileImage}
        />
      </Box>
      <Box>
        <Text fontSize={14}>Full Name</Text>
        {chat ? (
          <Text>Lorem ipsum dolor sit amet?</Text>
        ) : (
          <>
            <Text fontSize={12}>Designation @ Company Name</Text>
            <Text fontSize={8} variant="silentText">
              10 Mutual Connections
            </Text>
          </>
        )}
      </Box>
      {chat ? (
        <Text>{day}</Text>
      ) : (
        <Box flexDirection="row">
          {addButton ? (
            <Box borderRadius="l" borderWidth={1} borderColor="grey">
              <Icon name="plus" size={20} color="blue" />
            </Box>
          ) : (
            <>
              <Box borderRadius="l" borderWidth={1} borderColor="grey">
                <Icon name="x" size={20} color="red" />
              </Box>
              <Box width={10} />
              <Box borderRadius="l" borderWidth={1} borderColor="grey">
                <Icon name="check" size={20} color="green" />
              </Box>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default UserNetWorkCard;
