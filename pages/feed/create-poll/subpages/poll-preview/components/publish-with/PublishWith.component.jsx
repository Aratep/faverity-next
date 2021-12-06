import React from "react";
import classNames from "classnames";

// BASE COMPONENTS
import Accordion from "components/accordion/Accordion.component";
// COMPONENTS OF PUBLISH WITH PAGE
import ChooseFriends from "./components/choose-friends/ChooseFriends.component";
import ChooseGroup from "./components/choose-gruop/ChooseGroup.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { changeStep2TabParam } from "redux/create-poll/create-poll.actions";
// ICONS
import CheckMarkIcon from "components/icons/CheckmarkIcon";

const PublishWith = () => {
  const {
    dispatch,
    reduxStore: { createPoll: createPollStore },
  } = useToolkit("createPoll");

  const {
    step2TabParams: { showInProfile },
  } = createPollStore;

  const accordionItems = [
    { id: 1, title: "Choose friends", component: <ChooseFriends /> },
    { id: 2, title: "Choose group", component: <ChooseGroup /> },
  ];

  const checkBtnClasses = classNames({
    "check-button__item": true,
    "item-active": showInProfile === true,
  });

  const onCheckClick = () => {
    dispatch(changeStep2TabParam("showInProfile", !showInProfile));
  };

  return (
    <div className="publish-with">
      <h3>Publish with</h3>
      <div className="check-button" onClick={() => onCheckClick()}>
        <div className="check-button__text">Public</div>
        <div className={checkBtnClasses}>
          <CheckMarkIcon />
        </div>
      </div>
      <Accordion accordionItems={accordionItems} expandedPanel="panel-0" />
    </div>
  );
};

export default PublishWith;
