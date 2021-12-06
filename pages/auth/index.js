import React from "react";

// PAGES
import LoginPage from "./login-page/Login.page";
// LAYOUTS
import PageHead from "layouts/head/PageHead.layout";

const WrappedAuthPages = () => (
  <PageHead title="Login page">
    <div className="auth-pages">
      <LoginPage />
    </div>
  </PageHead>
);

export default WrappedAuthPages;
