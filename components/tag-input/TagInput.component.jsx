import React from "react";

// BASE COMPONENTS
import Input from "components/input/Input.component";
import IsVisible from "components/is-visible/IsVisible.component";
// EFFECTS
import useInput from "effects/useInput.effect";

const TagInput = ({
  inputName,
  tagsListname,
  tags,
  label,
  placeholder,
  handleTagsChange,
}) => {
  const {
    inputState,
    handleInput,
    updateInputState,
    handleInvalidMessage,
    invalidMessages,
  } = useInput({ [inputName]: "" });

  const addTag = () => {
    if (inputState[inputName] !== "") {
      handleTagsChange(tagsListname, [...tags, `#${inputState[inputName]}`]);
    }
    // reset input afer tag was added
    updateInputState({ [inputName]: "" });
  };

  const removeTagById = (indexToRemove) => {
    handleTagsChange(tagsListname, [
      ...tags.filter((_, index) => index !== indexToRemove),
    ]);
  };

  const removeLastTag = () => {
    if (
      (inputState[inputName] === "" || inputState[inputName] === undefined) &&
      tags.length > 0
    ) {
      const tagsCopy = [...tags];
      tagsCopy.pop();
      handleTagsChange(tagsListname, [...tagsCopy]);
    }
  };

  const handleInputChange = (event) => {
    handleInput(event);
  };

  return (
    <div className="tag-input">
      <IsVisible isVisible={label}>
        <div className="tag-input__label">{label}</div>
      </IsVisible>
      <div className="tag-input__wrapper">
        <IsVisible isVisible={tags.length > 0}>
          <ul className="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <span
                  className="tag-close-icon"
                  onClick={() => removeTagById(index)}>
                  x
                </span>
              </li>
            ))}
          </ul>
        </IsVisible>
        <Input
          name={inputName}
          value={inputState[inputName]}
          error={invalidMessages}
          onChange={handleInputChange}
          onInvalid={handleInvalidMessage}
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTag() : null)}
          onKeyDown={(event) =>
            event.key === "Backspace" ? removeLastTag() : null
          }
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TagInput;
