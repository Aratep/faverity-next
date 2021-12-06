import React from "react";

// BASE COMPONENTS
import Form from "components/form/Form.component";
import Input from "components/input/Input.component";
import HashtagsBlock from "components/hashtags-block/HashtagsBlock.component";
import TagInput from "components/tag-input/TagInput.component";
import Button from "components/button/Button.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useInput from "effects/useInput.effect";
// ACTIONS
import { changeStep1TabParam } from "redux/create-poll/create-poll.actions";
import { setSelectedTabIndex } from "redux/common/common.actions";

const StepOneTab = () => {
  const {
    dispatch,
    reduxStore: { common: commonStore, createPoll: createPollStore },
  } = useToolkit("common", "createPoll");

  const { handleInput, handleInvalidMessage, invalidMessages } = useInput();

  const { categories, isCategoriesLoading } = commonStore;
  const {
    step1TabParams: { tags, question },
    step1TabParams,
  } = createPollStore;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleInput(event);
    dispatch(changeStep1TabParam(name, value));
  };

  const handleTagInputChange = (name, value) => {
    dispatch(changeStep1TabParam(name, value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setSelectedTabIndex(1));
  };

  return (
    <div className="step-one-tab">
      <Form>
        <Input
          name="question"
          value={question}
          error={invalidMessages}
          onChange={handleInputChange}
          onInvalid={handleInvalidMessage}
          label="Question"
          type="text"
          placeholder="Write a question"
          required
        />
        <TagInput
          inputName="tag"
          tagsListname="tags"
          tags={tags}
          handleTagsChange={handleTagInputChange}
          label="Hashtag"
          placeholder="#"
        />
        <HashtagsBlock
          categories={categories}
          params={step1TabParams}
          isLoading={isCategoriesLoading}
          onParamChange={changeStep1TabParam}
          label="Categories"
          isMultiple={false}
        />
        <div className="fy-flex__center">
          <Button type="button" onClick={onSubmit}>
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StepOneTab;
