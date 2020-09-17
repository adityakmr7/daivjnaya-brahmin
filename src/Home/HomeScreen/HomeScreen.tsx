import React from "react";
import { Box, Text } from "../../components";
interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Text>Hello world</Text>
    </Box>
  );
};

export default Home;
