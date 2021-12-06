import React, { useCallback, useEffect } from "react";
import classNames from "classnames";
import debounce from "lodash.debounce";

// BASE COMPONENTS
import Input from "components/input/Input.component";
import Image from "components/image/Image.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
// EFFECTS
import useInput from "effects/useInput.effect";
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { getUserFollowersDataAsync } from "redux/feed/feeds.actions";
import { changeStep2TabParam } from "redux/create-poll/create-poll.actions";
// UTILITIES
import { generateUserInfo } from "utilities/feed.utilities";
// ICONS
import CheckMarkIcon from "components/icons/CheckmarkIcon";

const ChooseFriends = () => {
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
  const { userFollowers, userFollowersLoading } = feedStore;
  const {
    step2TabParams: { privateUserIds },
  } = createPollStore;

  useEffect(() => {
    dispatch(getUserFollowersDataAsync(userInfo.accessToken, userInfo.id));
    // eslint-disable-next-line
    }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    debouncedFriendsSearch(value);
    handleInput(event);
  };

  /* debounce input handler */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFriendsSearch = useCallback(
    debounce((searchVal) => {
      // send the server request here
      dispatch(
        getUserFollowersDataAsync(userInfo.accessToken, userInfo.id, searchVal)
      );
    }, 900),
    []
  );

  const onCheck = (userId) => {
    let followersIds = privateUserIds.slice(0);

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
    <div className="choose-friends">
      <Input
        name="searchText"
        value={inputState.searchText}
        error={invalidMessages}
        onChange={handleInputChange}
        onInvalid={handleInvalidMessage}
        type="text"
        placeholder="Search"
      />
      <LoaderWrapper isLoading={userFollowersLoading}>
        <div className="choose-friends__friends-list">
          {userFollowers.map((follower) => {
            const { name, avatar } = generateUserInfo(follower);
            const checkBtnClasses = classNames({
              "check-button__item": true,
              "item-active": privateUserIds.includes(follower.userId),
            });

            return (
              <div
                key={follower.userId}
                className="choose-friends__friends-list__follower">
                <div className="info-block">
                  <div className="choose-friends__friends-list__follower_img">
                    <Image src={avatar} alt={name} />
                  </div>
                  <div className="choose-friends__friends-list__follower_name">
                    {name}
                  </div>
                </div>
                <div
                  className="check-button"
                  onClick={() => onCheck(follower.userId)}>
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

export default ChooseFriends;
