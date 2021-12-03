import React, { useEffect } from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import IsVisible from "components/is-visible/IsVisible.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import Image from "components/image/Image.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { getUserFollowersDataAsync } from "redux/feed/feeds.actions";
import {
  // changeTabName,
  // searchPrivateChatsAsync,
  getCommonPollsAsync,
  setSelectedUser,
} from "redux/chat/chat.actions";
// IMAGES
import defaultAvatar from "assets/images/profile/avatar-default-icon.png";

const PrivateChatTab = () => {
  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      // chat: chatStore,
      feeds: feedsStore,
    },
  } = useToolkit("authentication", "chat", "feeds");

  const router = useRouter();

  const { userInfo } = authStore;
  // const { searchText, privateChats, privateChatsLoading } = chatStore;
  // added temporary
  const { userFollowers, userFollowersLoading } = feedsStore;

  ///////************** remove after fixing **********/////////////
  ///////////////
  useEffect(() => {
    dispatch(getUserFollowersDataAsync(userInfo.accessToken, userInfo.id));
    // eslint-disable-next-line
  }, [])

  //*************** temporary removed /////////////////
  /////////////////////////////////////////////////////
  // useEffect(() => {
  //   if (searchText !== "") {
  //     dispatch(searchPrivateChatsAsync(searchText, userInfo?.accessToken));
  //   }
  //   dispatch(changeTabName("private"));
  //   //eslint-disable-next-line
  // }, [])

  const onUserClick = (user) => {
    console.log(user);
    dispatch(setSelectedUser(user));
    dispatch(
      getCommonPollsAsync(userInfo.accessToken, user, undefined, router)
    );
  };

  return (
    <div className="private-chat-tab">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <LoaderWrapper isLoading={userFollowersLoading}>
            <IsVisible isVisible={userFollowers.length > 0}>
              {userFollowers.map((item) => {
                return (
                  <div
                    key={item.userId}
                    className="private-chat-tab__item"
                    onClick={() => onUserClick(item)}>
                    <Image
                      src={item.profileImageUrl || defaultAvatar.src}
                      imgClassName="private-chat-tab__item-avatar"
                    />
                    <div className="private-chat-tab__item-fullname">
                      {item.fullname || item.alias}
                    </div>
                  </div>
                );
              })}
            </IsVisible>
            <IsVisible isVisible={userFollowers.length === 0}>
              <div className="private-chat-tab__no-item">No items</div>
            </IsVisible>
          </LoaderWrapper>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default PrivateChatTab;
