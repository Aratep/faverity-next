import React from "react";

// TABS
import UserNameTab from "../../tabs/username/UserName.tab";
import AboutTab from "../../tabs/about/About.tab";
import HashtagsTab from "../../tabs/hashtags/Hashtags.tab";

const FacebookRegisterServices = {
  tabPanels: [
    {
      id: 1,
      item: <UserNameTab />,
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

export default FacebookRegisterServices;
