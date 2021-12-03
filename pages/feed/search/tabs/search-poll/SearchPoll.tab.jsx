import React, { useEffect } from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import IsVisible from "components/is-visible/IsVisible.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { changeTabName, searchPolls } from "redux/search/search.actions";

const SearchPollTab = () => {
  const {
    dispatch,
    reduxStore: { authentication: authStore, search: searchStore },
  } = useToolkit("authentication", "search");

  const { userInfo } = authStore;
  const { polls, searchText, pollsLoading } = searchStore;

  useEffect(() => {
    // must change to tags call
    if (searchText !== "") {
      dispatch(searchPolls(searchText, userInfo?.accessToken));
    }
    dispatch(changeTabName("polls"));
    //eslint-disable-next-line
  }, []);

  return (
    <div className="serach-poll">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <LoaderWrapper isLoading={pollsLoading}>
            <IsVisible isVisible={polls.length > 0}>
              {polls.map((item) => {
                return (
                  <div key={item.id} className="search-poll__item">
                    <img src={item.imageURl} alt={item.question} />
                    <div className="search-poll__item-question">
                      {item.question}
                    </div>
                  </div>
                );
              })}
            </IsVisible>
            <IsVisible isVisible={polls.length === 0}>
              <div className="search-poll__no-item">No items</div>
            </IsVisible>
          </LoaderWrapper>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SearchPollTab;
