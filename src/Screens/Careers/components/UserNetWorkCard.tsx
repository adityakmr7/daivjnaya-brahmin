import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import Moment from "react-moment";
interface UserNetWorkCardProps {
  profileImage: number;
  addButton: boolean;
  chat?: boolean;
  day?: string;
  item: any;
}
const UserNetWorkCard = ({
  chat,
  profileImage,
  day,
  addButton,
  item,
}: UserNetWorkCardProps) => {
  return (
    <Box
      paddingVertical="s"
      alignItems="center"
      justifyContent="space-around"
      flexDirection="row"
      style={{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#0000001A",
      }}
    >
      <Box>
        {/* {item._links ? 
        <Image
          style={{ height: 50, width: 50, borderRadius: 25 }}
          source={{uri: item._links}}
        />
: null} */}
      </Box>
      <Box>
        {item && item.fullName ? (
          <Text fontSize={14}>{item.fullName}</Text>
        ) : null}
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
