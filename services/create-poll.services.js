import React from "react";

// TABS
import StepOneTab from "pages/feed/create-poll/tabs/step1/StepOne.tab.jsx";
import StepTwoTab from "pages/feed/create-poll/tabs/step2/StepTwo.tab";
import StepThreeTab from "pages/feed/create-poll/tabs/step3/StepThree.tab";

const CreatePollServices = {
  tabLabels: [
    { id: 1, label: "Step 1" },
    { id: 2, label: "Step 2" },
    { id: 3, label: "Step 3" },
  ],
  tabPanels: [
    {
      id: 1,
      item: <StepOneTab />,
    },
    {
      id: 2,
      item: <StepTwoTab />,
    },
    {
      id: 3,
      item: <StepThreeTab />,
    },
  ],
};

export default CreatePollServices;
