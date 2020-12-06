import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { getCareerTipsDetail } from "../../actions/careerActions";
import { Box, Text } from "../../components";

interface CareerTipDetailProps {
  route: any;
  getCareerTipsDetail: (nId: number) => void;
  careerDetail: any;
}
const CareerTipDetail = ({
  route,
  getCareerTipsDetail,
  careerDetail,
}: CareerTipDetailProps) => {
  const { nId } = route.params;
  useEffect(() => {
    getCareerTipsDetail(nId);
  }, [nId]);

  const { tipsDetailLoading, tipsDetailAll, tipsDetailError } = careerDetail;
  if (tipsDetailLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }
  return (
    <Box flex={1}>
      {tipsDetailAll !== "" ? (
        <Text>CareerTips Detail</Text>
      ) : (
        <Box>
          <Text>Nothing In Here</Text>
        </Box>
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    careerDetail: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getCareerTipsDetail: (nId: number) => dispatch(getCareerTipsDetail(nId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerTipDetail);
