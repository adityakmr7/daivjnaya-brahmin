import React from "react";
import { Box, Text } from "../../components";

interface CommunityHubMemberDetailProps {}
const CommunityHubMemberDetail = ({ route }: CommunityHubMemberDetailProps) => {
  const { hId } = route.params;
  return (
    <Box>
      <Text>CommunityMemberDetail</Text>
      <Text>{hId}</Text>
    </Box>
  );
};

export default CommunityHubMemberDetail;
