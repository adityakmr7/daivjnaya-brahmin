import React, { ReactNode, useEffect, useState } from "react";

import { Box, CheckBox } from "../../components";

import Register from "./components/Register";
import Talents from "./components/Talents";
import PostJobForm from "./components/PostJobForm";
interface CareerRegisterProps {}

const CareerRegister = () => {
  const [fJob, setFJob] = useState(true);
  const [pJob, setPJob] = useState(false);
  const [talents, setTalents] = useState(false);

  const handleFindJob = () => {
    setPJob(false);
    setTalents(false);
    setFJob(true);
  };
  const handlePostJob = () => {
    setPJob(true);
    setTalents(false);
    setFJob(false);
  };
  const handleTalent = () => {
    setPJob(false);
    setTalents(true);
    setFJob(false);
  };

  const handleSubmitData = (data: any) => {};

  let registerForm: ReactNode;
  if (fJob) {
    registerForm = <Register handleSubmitData={handleSubmitData} />;
  } else if (pJob) {
    registerForm = <PostJobForm />;
  } else if (talents) {
    registerForm = <Talents />;
  }

  return (
    <Box flex={1} marginBottom="l" flexDirection="column">
      <Box marginHorizontal="xl">
        <Box
          marginVertical="l"
          flexDirection="row"
          justifyContent="space-between"
        >
          <CheckBox
            checked={fJob}
            onChange={() => handleFindJob()}
            label="Find Job"
          />
          <CheckBox
            checked={pJob}
            onChange={() => handlePostJob()}
            label="Post Job"
          />
          <CheckBox
            checked={talents}
            onChange={() => handleTalent()}
            label="Talents"
          />
        </Box>
      </Box>
      {registerForm}
    </Box>
  );
};

// function mapStateToProps(state: any) {
//   return {
//     hubState: state.hub,
//   };
// }

// const mapDispatchToProps = (dispatch: any) => ({
//   createNewHub: (data: postNewHubProps, images: []) =>
//     dispatch(postNewHub(data, images)),
// });

export default CareerRegister;
