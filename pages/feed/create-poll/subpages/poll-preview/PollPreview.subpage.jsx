import React from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Button from "components/button/Button.component";
// POLL PREVIEW COMPONENTS
import PollDetails from "./components/poll-details/PollDetails.component";
import PublishWith from "./components/publish-with/PublishWith.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
// ACTIONS
import { createPollAsync } from "redux/create-poll/create-poll.actions";

const PollPreview = () => {
  const {
    dispatch,
    reduxStore: { createPoll: createPollStore },
  } = useToolkit("createPoll");
  const authToken = useAuthSession("/feed/poll-preview");

  const { step2TabParams, step1TabParams, createPollLoading } = createPollStore;
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    if (authToken) {
      dispatch(
        createPollAsync(
          authToken,
          {
            ...step1TabParams,
            ...step2TabParams,
          },
          router
        )
      );
    }
  };

  return (
    <section className="poll-preview-subpage">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <h3>Preview</h3>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <PollDetails
            question={step1TabParams.question}
            hashtags={step1TabParams.tags}
            images={step2TabParams.images}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <PublishWith />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12} className="fy-flex__center">
          <Button onClick={onSubmit} isLoading={createPollLoading}>
            Publish
          </Button>
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default withToolbar(PollPreview);
