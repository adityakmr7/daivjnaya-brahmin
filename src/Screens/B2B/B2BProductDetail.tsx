import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Box, Text } from "../../components";
import { getB2bProductDetail } from "../../actions/b2bActions";

interface B2BDetailProps {
  route: any;
  getDetail: (id: number) => void;
  product: any;
}
const B2BDetail = ({ route, getDetail, product }: B2BDetailProps) => {
  const { id } = route.params;
  const {} = product;
  useEffect(() => {
    getDetail(id);
  }, [id]);
  return (
    <Box>
      <Text>ProductDetail {id}</Text>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    product: state.b2b,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getDetail: (id: number) => dispatch(getB2bProductDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(B2BDetail);
