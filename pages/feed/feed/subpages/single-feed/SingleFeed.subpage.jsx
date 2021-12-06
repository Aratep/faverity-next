import React from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Slider from "components/slider/Slider.component";
// FEED's COMPONENTS
import FeedOwnerInfo from "../../components/feed-preview/owner-info/OwnerInfo.component";
import SliderItem from "./components/slider-item/SliderItem.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import {
  getPollCommentsAsync,
  votePollAsync,
} from "redux/comments/comments.actions";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
import IsVisible from "../../../../../components/is-visible/IsVisible.component";
// UTILITIES
import { isObjectEmpty } from "utilities/helper-functions";

const SingleFeed = () => {
  const {
    dispatch,
    reduxStore: { feeds: feedsStore },
  } = useToolkit("authentication", "feeds");

  const authToken = useAuthSession("/feed/single-feed");

  const { singleFeedData } = feedsStore;
  const router = useRouter();

  const images = [];

  const onHeartClick = (optionId) => {
    dispatch(votePollAsync(authToken, singleFeedData.id, optionId));
  };

  const onChatClick = () => {
    dispatch(getPollCommentsAsync(authToken, singleFeedData.id, router));
  };

  if (!isObjectEmpty(singleFeedData)) {
    singleFeedData?.pollOptions.forEach((option) => {
      images.push({
        id: option?.id,
        item: (
          <SliderItem
            poll={option}
            height="69rem"
            styles={{ borderRadius: "5.5rem" }}
            isSocialButtons={true}
            socialButtonsOptions={{
              onChatClick,
              onHeartClick: () => onHeartClick(option?.id),
            }}
          />
        ),
      });
    });
  }

  return (
    <section className="single-feed">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <IsVisible isVisible={!isObjectEmpty(singleFeedData)}>
          <FeedOwnerInfo feed={singleFeedData} isTags={false} hasMenu={false} />
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Slider items={images} arrows={false} hasDots={true} />
          </GridItem>
        </IsVisible>
      </GridContainer>
    </section>
  );
};

export default withToolbar(SingleFeed);
