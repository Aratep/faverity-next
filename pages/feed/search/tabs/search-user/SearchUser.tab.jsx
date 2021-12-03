import React, { useEffect } from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import IsVisible from "components/is-visible/IsVisible.component";
import Image from "components/image/Image.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { searchUsers, changeTabName } from "redux/search/search.actions";
import {
  getFeedOwnerDataAsync,
  setSelectedOwnerID,
} from "redux/feed/feeds.actions";
// IMAGES
import defaultAvatar from "assets/images/profile/avatar-default-icon.png";

const SearchUserTab = () => {
  const {
    dispatch,
    reduxStore: { authentication: authStore, search: searchStore },
  } = useToolkit("authentication", "search");

  const router = useRouter();

  const { userInfo } = authStore;
  const { searchText, users, usersLoading } = searchStore;

  useEffect(() => {
    // must change to tags call
    if (searchText !== "") {
      dispatch(searchUsers(searchText, userInfo.accessToken));
    }
    dispatch(changeTabName("users"));
    //eslint-disable-next-line
  }, []);

  const onUserClick = (userId) => {
    dispatch(getFeedOwnerDataAsync(userInfo.accessToken, userId, router));
    dispatch(setSelectedOwnerID(userId));
  };

  return (
    <div className="serach-user">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <LoaderWrapper isLoading={usersLoading}>
            <IsVisible isVisible={users.length > 0}>
              {users.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="search-user__item"
                    onClick={() => onUserClick(user.id)}>
                    <Image
                      src={user.profileImageUrl || defaultAvatar.src}
                      imgClassName="search-user__item-avatar"
                    />
                    <div className="search-user__item-fullname">
                      {user.alias}
                    </div>
                  </div>
                );
              })}
            </IsVisible>
            <IsVisible isVisible={users.length === 0}>
              <div className="search-user__no-item">No items</div>
            </IsVisible>
          </LoaderWrapper>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SearchUserTab;
