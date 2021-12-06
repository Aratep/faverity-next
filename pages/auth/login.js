import React from "react";
import LoginPage from "./login-page/Login.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedLoginPage = () => (
  <PageHead title="Login page">
    <LoginPage />
  </PageHead>
);

export default WrappedLoginPage;
