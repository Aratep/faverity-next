import React, { useEffect } from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import IsVisible from "components/is-visible/IsVisible.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { changeTabName, searchTags } from "redux/search/search.actions";
import { getFeedsByTagNameAsync, setFeedType } from "redux/feed/feeds.actions";

const SearchTagTab = () => {
  const {
    dispatch,
    reduxStore: { authentication: authStore, search: searchStore },
  } = useToolkit("authentication", "search");

  const router = useRouter();

  const { userInfo } = authStore;
  const { tags, searchText, tagsLoading } = searchStore;

  useEffect(() => {
    // must change to tags call
    if (searchText !== "") {
      dispatch(searchTags(searchText, userInfo?.accessToken));
    }
    dispatch(changeTabName("tags"));
    //eslint-disable-next-line
  }, []);

  const onTagNameClick = (tagName) => {
    dispatch(getFeedsByTagNameAsync(userInfo?.accessToken, tagName));
    dispatch(setFeedType("tag"));
    router.push("/feed");
  };

  return (
    <div className="serach-tag">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <LoaderWrapper isLoading={tagsLoading}>
            <IsVisible isVisible={tags.length > 0}>
              {tags.map((item) => {
                return (
                  <div key={item.hashTag} className="serach-tag__item">
                    <div
                      className="serach-tag__item-tag"
                      onClick={() =>
                        onTagNameClick(item?.hashTag.substring(1))
                      }>
                      {item.hashTag}
                    </div>
                  </div>
                );
              })}
            </IsVisible>
            <IsVisible isVisible={tags.length === 0}>
              <div className="search-user__no-item">No items</div>
            </IsVisible>
          </LoaderWrapper>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SearchTagTab;
