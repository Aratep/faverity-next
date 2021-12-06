import React, { useEffect } from "react";
import classNames from "classnames";

// BASE COMPONENTS
import Image from "components/image/Image.component";
import Input from "components/input/Input.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";

// EFFECTS
import useInput from "effects/useInput.effect";
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { getGroupsDataAsync } from "redux/feed/feeds.actions";
import { changeStep2TabParam } from "redux/create-poll/create-poll.actions";
// ICONS
import CheckMarkIcon from "components/icons/CheckmarkIcon";

const ChooseGroup = () => {
  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      feeds: feedStore,
      createPoll: createPollStore,
    },
  } = useToolkit("authentication", "feeds", "createPoll");

  const {
    inputState,
    handleInput,
    handleInvalidMessage,
    invalidMessages,
  } = useInput();

  const { userInfo } = authStore;
  const { groups, groupsLoading } = feedStore;
  const {
    step2TabParams: { privateGroupIds },
  } = createPollStore;

  useEffect(() => {
    dispatch(getGroupsDataAsync(userInfo.accessToken));
    // eslint-disable-next-line
  }, []);

  const handleInputChange = (event) => {
    handleInput(event);
  };

  const onCheck = (userId) => {
    let followersIds = privateGroupIds.slice(0);

    // if id already exists remove from list
    if (followersIds.includes(userId)) {
      followersIds = followersIds.filter((i) => i !== userId);
    } else {
      // otherwise put into list
      followersIds.push(userId);
    }

    dispatch(changeStep2TabParam("privateUserIds", followersIds));
  };

  return (
    <div className="choose-group">
      <Input
        name="searchText"
        value={inputState.searchText}
        error={invalidMessages}
        onChange={handleInputChange}
        onInvalid={handleInvalidMessage}
        type="text"
        placeholder="Search"
      />
      <LoaderWrapper isLoading={groupsLoading}>
        <div className="choose-friends__friends-list">
          {groups.acceptedGroups.length > 0 &&
            groups.acceptedGroups.map((group) => {
              const checkBtnClasses = classNames({
                "check-button__item": true,
                "item-active": privateGroupIds.includes(group.groupId),
              });

              return (
                <div
                  key={group.groupId}
                  className="choose-friends__friends-list__follower">
                  <div className="info-block">
                    <div className="choose-friends__friends-list__follower_img">
                      <Image src={group.groupImageUrl} alt={group.name} />
                    </div>
                    <div className="choose-friends__friends-list__follower_name">
                      {group.name}
                    </div>
                  </div>
                  <div
                    className="check-button"
                    onClick={() => onCheck(group.groupId)}>
                    <div className={checkBtnClasses}>
                      <CheckMarkIcon />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </LoaderWrapper>
    </div>
  );
};

export default ChooseGroup;
