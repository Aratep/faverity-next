import React from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Tab from "components/tab/Tab.component";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
// SERVICES
import CreatePollServices from "services/create-poll.services";
// EFFECTS
import useAuthSession from "effects/useAuthSession.effect";

const CreatePoll = () => {
  const { tabLabels, tabPanels } = CreatePollServices;
  useAuthSession("/feed/create-poll");

  return (
    <section className="create-poll">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="create-poll__tab-block">
          <Tab
            tabLabels={tabLabels}
            tabPanels={tabPanels}
            resetOnRefresh={true}
          />
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default withToolbar(CreatePoll);
