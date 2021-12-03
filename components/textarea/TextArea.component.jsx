import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import classNames from "classnames";

// CUSTOM COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
// ICONS
import SendMessageIcon from "components/icons/SendMessageIcon";

const TextArea = ({
  onChange,
  value,
  name,
  otherTextareaProps,
  minRows,
  maxRows,
  placeholder,
  onClick,
  label,
  hasSendIcon = false,
}) => {
  const textareaClasses = classNames({
    "width-90": hasSendIcon,
    "width-100": hasSendIcon === false,
  });

  return (
    <div className="custom-textarea">
      {label && <div className="custom-textarea__label">{label}</div>}
      <TextareaAutosize
        className={textareaClasses}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...otherTextareaProps}
        minRows={minRows}
        maxRows={maxRows}
      />
      <IsVisible isVisible={value && hasSendIcon}>
        <SendMessageIcon onClick={onClick} />
      </IsVisible>
    </div>
  );
};

export default TextArea;
