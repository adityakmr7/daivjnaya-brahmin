import React from "react";
import { Box, Text } from "../../components";

interface JewelleryProps {}
const Jewellery = ({}: JewelleryProps) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Jewellery</Text>
    </Box>
  );
};

export default Jewellery;
