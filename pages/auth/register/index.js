import React from "react";

// PAGES
import RegisterPage from "../register-page/Register.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedRegisterPage = () => (
  <PageHead title="Register">
    <RegisterPage />
  </PageHead>
);

export default WrappedRegisterPage;
