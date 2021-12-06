import React from "react";

// PAGES
import RegisterSuccess from "../register-page/screens/register-success/RegisterSuccess.screen";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedRegisterSuccessPage = () => (
  <PageHead title="Register success page">
    <RegisterSuccess />
  </PageHead>
);
export default WrappedRegisterSuccessPage;
