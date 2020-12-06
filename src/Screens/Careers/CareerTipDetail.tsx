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
        {tipsDetailLoading ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            {tipsDetailAll && tipsDetailAll._links !== undefined ? (
              <Image
                style={{ height: wHeight / 2, width: wWidth }}
                source={{ uri: tipsDetailAll._links.image.href }}
              />
            ) : null}
            <Box marginVertical="s" marginHorizontal="s">
              {tipsDetailAll && tipsDetailAll.title !== undefined ? (
                <Text variant="cardTitle" color="primaryText">
                  {tipsDetailAll.title}
                </Text>
              ) : null}
              <Box>
                {tipsDetailAll && tipsDetailAll.creationDate !== undefined ? (
                  <Moment
                    element={Text}
                    format="MMMM Do YYYY"
                    date={tipsDetailAll.creationDate}
                  />
                ) : null}
              </Box>
              <Box marginVertical="s">
                {tipsDetailAll && tipsDetailAll.content !== undefined ? (
                  <Text>{tipsDetailAll.content}</Text>
                ) : null}
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
