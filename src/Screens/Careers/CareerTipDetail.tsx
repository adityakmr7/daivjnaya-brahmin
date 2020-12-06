import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getCareerTipsDetail } from "../../actions/careerActions";
import { Box, Text } from "../../components";
import Moment from "react-moment";

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
  // const { content, title, _links, updatedDate, creationDate } = tipsDetailAll;
  const { width: wWidth, height: wHeight } = Dimensions.get("window");

  return (
    <ScrollView>
      <Box>
        {tipsDetailLoading === true ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            <Image
              style={{ height: wHeight / 2, width: wWidth }}
              source={{
                uri:
                  tipsDetailAll &&
                  tipsDetailAll._links &&
                  tipsDetailAll._links.image &&
                  tipsDetailAll._links.image.href,
              }}
            />
            <Box marginVertical="s" marginHorizontal="s">
              <Text variant="cardTitle" color="primaryText">
                {tipsDetailAll && tipsDetailAll.title && tipsDetailAll.title}
              </Text>

              <Box>
                <Moment
                  element={Text}
                  format="MMMM Do YYYY"
                  date={
                    tipsDetailAll &&
                    tipsDetailAll.creationDate &&
                    tipsDetailAll.creationDate
                  }
                />
              </Box>
              <Box marginVertical="s">
                <Text>
                  {tipsDetailAll &&
                    tipsDetailAll.content &&
                    tipsDetailAll.content}
                </Text>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </ScrollView>
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
