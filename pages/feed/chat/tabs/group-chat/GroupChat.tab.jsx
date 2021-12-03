import React, { useEffect } from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import IsVisible from "components/is-visible/IsVisible.component";
import Image from "components/image/Image.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { changeTabName, searchGroupChatsAsync } from "redux/chat/chat.actions";
import { getGroupsDataAsync } from "redux/feed/feeds.actions";
// IMAGES
import defaultAvatar from "assets/images/profile/avatar-default-icon.png";

const GroupChatTab = () => {
  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      chat: chatStore,
      feeds: feedsStore,
    },
  } = useToolkit("authentication", "chat", "feeds");

  const { userInfo } = authStore;
  const { searchText } = chatStore;
  const {
    groupsLoading,
    groups: { acceptedGroups, groupInvitations },
  } = feedsStore;

  useEffect(() => {
    if (searchText !== "") {
      dispatch(searchGroupChatsAsync(searchText, userInfo?.accessToken));
    }
    dispatch(changeTabName("group"));
    dispatch(getGroupsDataAsync(userInfo?.accessToken));
    //eslint-disable-next-line
  }, [])

  return (
    <div className="group-chat-tab">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <LoaderWrapper isLoading={groupsLoading}>
            <IsVisible isVisible={acceptedGroups.length > 0}>
              {acceptedGroups.map((item) => {
                return (
                  <div key={item.groupId} className="group-chat-tab__item">
                    <Image
                      src={item.groupImageUrl || defaultAvatar.src}
                      imgClassName="group-chat-tab__item-avatar"
                    />
                    <div className="group-chat-tab__item-fullname">
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </IsVisible>
            <IsVisible isVisible={acceptedGroups.length > 0}>
              {groupInvitations.map((item) => {
                return (
                  <div key={item.groupId} className="group-chat-tab__item">
                    <Image
                      src={item.groupImageUrl || defaultAvatar}
                      imgClassName="group-chat-tab__item-avatar"
                    />
                    <div className="group-chat-tab__item-fullname">
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </IsVisible>
            <IsVisible isVisible={acceptedGroups.length === 0}>
              <div className="group-chat-tab__no-item">No accepted groups</div>
            </IsVisible>
            <IsVisible isVisible={groupInvitations.length === 0}>
              <div className="group-chat-tab__no-item">No invited groups</div>
            </IsVisible>
          </LoaderWrapper>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default GroupChatTab;
