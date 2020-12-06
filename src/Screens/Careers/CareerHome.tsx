import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import {
  FlatList,
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, NewsSection, SearchBox, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import CompanyCard from "./components/CompanyCard";
import { connect } from "react-redux";
import {
  getAllCareerTips,
  getCareerCv,
  getJob,
} from "../../actions/careerActions";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
interface CareerHomeProps {
  getAllCv: () => void;
  career: any;
  getJob: (q: string) => void;
  getAllCareerTips: () => void;
  navigation: any;
}

const { width: wWidth } = Dimensions.get("window");
const CareerHome = ({
  getAllCv,
  career,
  getJob,
  getAllCareerTips,
  navigation,
}: CareerHomeProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    getAllCv();
    getJob("");
    getAllCareerTips();
  }, [isFocused]);

  const {
    careerCvLoading,
    careerCvAll,
    careerCvError,
    jobsLoading,
    jobsAll,
    jobsError,
    tipsLoading,
    tipsAll,
    tipsError,
  } = career;

  //tipsAll
  // content: "While this wasn’t a real study by any stretch of the imagination, it does support a common frustration in the job search process: the whole thing is just too complicated.
  // ↵Employers and job seekers want the same thing – to find (or be) the right person on the right team. There are many factors that contribute to “right” which makes this process inherently complex, but it doesn’t have to be difficult.
  // ↵Here are a few ways to streamline your efforts and connect to companies, faster.
  // ↵Understand the relationship between your resume and your candidate profile. One is a quick highlights-reel of relevant accomplishments meant to pique the interest of a hiring manager. The other, your candidate profile, should offer a layer deeper and progress as you move through your career. Resumes are tailored to specific roles and titles, serving as a snapshot of a moment of time; your profile adds context and detail.
  // ↵Your resume is not “one and done” - but you can combat that fatigue. You don’t have to completely rewrite it for every role. A cover letter, your email introduction or an “about me” section in an application can include your pitch or specific experiences relevant to that job. Maximize your job search by creating three versions of your resume to accommodate for the majority of the roles to which you’re applying.
  // ↵For example, if you’re in marketing, you might create one that showcases your strategic and analytical skills, another focused on sales or lead generation, and another that showcases your content production abilities. Or if you’re a truck driver or sales rep, maybe your role looks different based on the company size, so create a version tailored toward those distinctions.
  // ↵Save up to three resumes in your profile, and when you hit that “Apply Now” button, select the resume you want to use, and you’re on your way.
  // ↵Let technology help you create a resume. Based on billions of data points and 25 years leading this industry, CareerBuilder AI can help you build a strong resume, apply faster and help you get hired. Our tool uses common job responsibilities and skills to fill in the basics for you – so just edit, add your personal accomplishments and move on. (And you can do all of this from your phone through the CareerBuilder jobs app on iOS and Android.)"
  // creationDate: 1606680599000
  // nId: 1
  // title: "CREATE TAILORED RESUMES AND APPLY TO JOBS IN LESS THAN 30 MINUTES."
  // updatedDate: 1606680614000
  // _links:
  // image:
  // href: "https://s3.ap-south-1.amazonaws.com/daivajnya.brahmin/Daivajna/Career/one.jpg"

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Box paddingHorizontal="s">
        <CompanyCard onPress={() => {}} {...{ item }} />
      </Box>
    );
  };
  const renderTips = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("CareerTipDetail", {
            nId: item.nId,
          })
        }
        style={{ padding: 5 }}
      >
        <Box width={wWidth / 2 - 15}>
          <Image
            style={{ height: wWidth / 3, width: wWidth / 2 - 20 }}
            source={{ uri: item._links.image.href }}
          />
          <Text>{item.title}</Text>
        </Box>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <ScrollView>
      <Box flex={1}>
        <Box
          backgroundColor="mainBackground"
          borderColor="mainBackground"
          borderWidth={1}
        >
          <SearchBox {...{ searchText, handleChangeText }} />
        </Box>
        <Box backgroundColor="mainBackground" padding="s">
          {jobsLoading ? (
            <Box flex={1} justifyContent="center" alignItems="center">
              <ActivityIndicator />
            </Box>
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={renderItem}
              data={jobsAll}
              keyExtractor={(item: any) => item.jpId.toString()}
            />
          )}
        </Box>
        <Box backgroundColor="iconBackground">
          <Box marginVertical="l" marginHorizontal="m">
            <Text variant="silentText" color="primaryText">
              27 New Recommended
            </Text>
            <Text paddingVertical="s" variant="mainIconSubTitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi, facere.
            </Text>
            <Text paddingVertical="s" variant="silentText" color="primaryText">
              15 New jobs from recruiters
            </Text>
            <Text paddingVertical="s" variant="silentText" color="primaryText">
              10 Custom job alerts
            </Text>
          </Box>
        </Box>

        <Box paddingLeft="s">
          <Text paddingVertical="s" color="primaryText" variant="cardSubTitle">
            Career Tips
          </Text>
          {tipsLoading ? (
            <Box>
              <ActivityIndicator />
            </Box>
          ) : (
            <FlatList
              numColumns={2}
              data={tipsAll}
              renderItem={renderTips}
              keyExtractor={(item: any) => item.nId.toString()}
            />
          )}
        </Box>
      </Box>
    </ScrollView>
  );
};
function mapStateToProps(state: any) {
  return {
    career: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllCv: () => dispatch(getCareerCv()),
  getJob: (q: string) => dispatch(getJob(q)),
  getAllCareerTips: () => dispatch(getAllCareerTips()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerHome);
