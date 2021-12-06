import React, { useEffect } from "react";
import classNames from "classnames";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import TextArea from "components/textarea/TextArea.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import IsVisible from "components/is-visible/IsVisible.component";
import MenuItemsModal from "components/menu-items/MenuItemsModal.component";
// COMMENTS's COMPONENTS
import UserBlock from "./components/user-block/UserBlock.component";
// EFFECTS
import useInput from "effects/useInput.effect";
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import {
  getPollCommentsAsync,
  addCommentAsync,
  toggleCommentReportMenu,
  reportCommentAsync,
} from "redux/comments/comments.actions";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";

const CommentsPage = () => {
  const {
    dispatch,
    reduxStore: { comments: commentsStore },
  } = useToolkit("authentication", "comments");
  const authToken = useAuthSession("/feed/comments");

  const {
    comments,
    commentsLoading,
    selectedPollId,
    addCommentLoading,
    reportCommentLoading,
    isCommentReportMenu,
    selectedComment,
  } = commentsStore;

  const {
    inputState,
    handleInput,
    handleInvalidMessage,
    invalidMessages,
    updateInputState,
  } = useInput();

  useEffect(() => {
    if (authToken) {
      dispatch(getPollCommentsAsync(authToken, selectedPollId));
    }
    // eslint-disable-next-line
  }, [])

  const handleInputChange = (event) => {
    handleInput(event);
  };

  const addComment = (e) => {
    e.preventDefault();
    dispatch(addCommentAsync(authToken, selectedPollId, inputState.comment));
    updateInputState({ comment: "" });
  };

  const commentContainerClasses = classNames({
    "comments-page__comment-container": true,
    "display-none": comments.length === 0,
  });

  const onMessageReport = () => {
    dispatch(reportCommentAsync(authToken, selectedComment.commentId));
  };

  const menuItemsList = [
    {
      id: 1,
      label: "Report comment",
      onClick: onMessageReport,
      isLoading: reportCommentLoading,
    },
  ];

  return (
    <section className="comments-page">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader hasLogo={false} text="Comments" />
        </GridItem>
        <LoaderWrapper isLoading={commentsLoading || addCommentLoading}>
          <MenuItemsModal
            itemsList={menuItemsList}
            isOpen={isCommentReportMenu}
            toggleOpen={() => dispatch(toggleCommentReportMenu(false))}
          />
          <div className={commentContainerClasses}>
            {comments.map((item) => (
              <GridItem xs={12} sm={12} md={12} lg={12} key={item.commentId}>
                <UserBlock owner={item.owner} comment={item} />
              </GridItem>
            ))}
          </div>
          <IsVisible isVisible={comments.length === 0}>
            <div className="comments-page__nocomment-message">
              No comments yet
            </div>
          </IsVisible>
        </LoaderWrapper>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <TextArea
            name="comment"
            value={inputState.comment}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            placeholder="Write a comment"
            onClick={addComment}
            minRows={1}
            maxRows={2}
            hasSendIcon={true}
          />
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default withToolbar(CommentsPage);
