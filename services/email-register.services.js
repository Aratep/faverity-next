import React from "react";
// TABS
import SignUpByEmailTab from "pages/auth/register-page/tabs/sign-up-by-email/SignUpByEmail.tab";
import AboutTab from "pages/auth/register-page/tabs/about/About.tab";
import HashtagsTab from "pages/auth/register-page/tabs/hashtags/Hashtags.tab";

const EmailRegisterServices = {
  tabPanels: [
    {
      id: 1,
      item: <SignUpByEmailTab />,
      heading: `Tell us about you \n(Tell us your name and choose a user name for you)`,
    },
    {
      id: 2,
      item: <AboutTab />,
      heading: `Tell us more! \n(In order to have a better poll which suits you more!)`,
    },
    {
      id: 3,
      item: <HashtagsTab />,
      heading: `What are you interested for? \n \n(The more categories you mention, the better poll you will have)`,
    },
  ],
  tabLabels: [
    { id: 1, label: "Step 1" },
    { id: 2, label: "Step 2" },
    { id: 3, label: "Step 3" },
  ],
};

export default EmailRegisterServices;
