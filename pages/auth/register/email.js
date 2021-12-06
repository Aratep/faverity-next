import React from "react";

// PAGES
import EmailRegisterPage from "../register-page/screens/email-register/EmailRegister.screen";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedEmailRegisterPage = () => (
  <PageHead title="Register [Email]">
    <EmailRegisterPage />
  </PageHead>
);

export default WrappedEmailRegisterPage;
