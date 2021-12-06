import React from "react";

// PAGES
import PasswordResetPage from "./password-reset-page/PasswordReset.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedPasswordResetPage = () => (
  <PageHead title="Reset password page">
    <PasswordResetPage />
  </PageHead>
);

export default WrappedPasswordResetPage;
