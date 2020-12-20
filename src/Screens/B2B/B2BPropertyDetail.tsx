import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getB2bPropertyDetail } from "../../actions/b2bActions";
import { Box, Text } from "../../components";

interface B2BPropertyDetailProps {
  route: any;
  getPropertyDetail: (id: number) => void;
  property: any;
}
const B2BPropertyDetail = ({
  route,
  getPropertyDetail,
  property,
}: B2BPropertyDetailProps) => {
  const { id } = route.params;
  useEffect(() => {
    getPropertyDetail(id);
  }, [id]);
  const {} = property;
  return (
    <Box>
      <Text>B2b Property Detail {id}</Text>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    property: state.b2b,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getPropertyDetail: (id: number) => dispatch(getB2bPropertyDetail(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(B2BPropertyDetail);
