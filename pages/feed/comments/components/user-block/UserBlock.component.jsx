import React from "react";
import ReactEmoji from "react-emoji";

// BASE COMPONENTS
import Image from "components/image/Image.component";
import VerticalMenuIcon from "components/icons/VerticalMenuIcon";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import {
  setSelectedComment,
  toggleCommentReportMenu,
} from "redux/comments/comments.actions";
// UTILITIES
import { generateUserInfo } from "/utilities/feed.utilities";

const UserBlock = ({ owner, comment }) => {
  const { dispatch } = useToolkit();

  const { name, avatar } = generateUserInfo(owner);

  const onMenuClick = () => {
    dispatch(setSelectedComment(comment));
    dispatch(toggleCommentReportMenu(true));
  };

  return (
    <div className="user-block">
      <div className="user-block_owner">
        <div className="user-block_owner__image-container">
          <Image src={avatar} alt="avatar" />
        </div>
        <div className="user-block_owner__info">
          <div className="user-block_owner__info-name">{name}</div>
          <div className="user-block_owner__info-bio">
            {ReactEmoji.emojify(comment?.comment)}
          </div>
        </div>
      </div>
      <div>
        <div className="feed-owner-info__menu-dots">
          <VerticalMenuIcon onClick={onMenuClick} />
        </div>
      </div>
    </div>
  );
};

export default UserBlock;
