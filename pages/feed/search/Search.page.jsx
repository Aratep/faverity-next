import React, { useCallback } from "react";
import debounce from "lodash.debounce";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Tab from "components/tab/Tab.component";
// LAYOUTS
import { withToolbar } from "pages/feed/layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "pages/feed/layouts/back-arrow-header/BackArrowHeader.layout";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import {
  setSearchText,
  searchUsers,
  searchTags,
  searchPolls,
} from "redux/search/search.actions";
// SERVICES
import SearchServices from "./search.services";

const SearchPage = () => {
  const {
    dispatch,
    reduxStore: {
      // authentication: authStore,
      search: searchStore,
    },
  } = useToolkit("authentication", "search");
  const authToken = useAuthSession();

  // const { userInfo } = authStore;
  const { searchText, tabName } = searchStore;

  const { tabLabels, tabPanels } = SearchServices;

  /* debounce input handler */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUsersSearch = useCallback(
    debounce((searchVal) => {
      // send the server request here
      dispatch(searchUsers(searchVal, authToken));
    }, 900),
    []
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedTagsSearch = useCallback(
    debounce((searchVal) => {
      // send the server request here
      dispatch(searchTags(searchVal, authToken));
    }, 900),
    []
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedPollsSearch = useCallback(
    debounce((searchVal) => {
      // send the server request here
      dispatch(searchPolls(searchVal, authToken));
    }, 900),
    []
  );

  const onSearchTextChange = (text) => {
    dispatch(setSearchText(text));
    if (text !== "") {
      if (tabName === "users") {
        debouncedUsersSearch(text);
      }
      if (tabName === "tags") {
        debouncedTagsSearch(text);
      }
      if (tabName === "polls") {
        debouncedPollsSearch(text);
      }
    }
  };

  return (
    <section className="search-page">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Tab
            tabLabels={tabLabels}
            tabPanels={tabPanels}
            onSearchTextChange={onSearchTextChange}
            text={searchText}
            isSearchInput
            resetOnRefresh={true}
          />
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default withToolbar(SearchPage);
