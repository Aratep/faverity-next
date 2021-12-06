import React from "react";

// PAGES
import FacebookRegisterPage from "../register-page/screens/facebook-register/FacebookRegister.screen";
import PageHead from "layouts/head/PageHead.layout";

const WrappedFacebookRegisterPage = () => (
  <PageHead title="Register [Facebook]">
    <FacebookRegisterPage />
  </PageHead>
);

export default WrappedFacebookRegisterPage;
