import React, { useState } from "react";
import classNames from "classnames";

// BASE COMPONENTS
import GridItem from "components/grid-item/GridItem.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
// ACTIONS
import { getFeedsByCategoryAsync, setFeedType } from "redux/feed/feeds.actions";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";

const Hashtags = () => {
  const {
    dispatch,
    reduxStore: { authentication: authStore, common: commonStore },
  } = useToolkit("authentication", "common");

  const [selectedTagId, setSelectedTagId] = useState(null);

  const { userInfo } = authStore;
  const { categories, isCategoriesLoading } = commonStore;

  const onHashtagClick = (categoryId) => {
    dispatch(getFeedsByCategoryAsync(userInfo?.accessToken, categoryId));
    setSelectedTagId(categoryId);
    dispatch(setFeedType("category"));
  };

  return (
    <div className="hashtags-component">
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <LoaderWrapper isLoading={isCategoriesLoading}>
          <div className="hashtags-block">
            {categories.map((category) => {
              const hashtagClasses = classNames({
                "hashtags-block__item": true,
                "hashtags-block__selected-item": selectedTagId === category.id,
              });
              return (
                <span
                  onClick={() => onHashtagClick(category?.id)}
                  className={hashtagClasses}
                  key={category?.id}>
                  {category?.name}
                </span>
              );
            })}
          </div>
        </LoaderWrapper>
      </GridItem>
    </div>
  );
};

export default Hashtags;
