import React from "react";

// BASE COMPONENTS
import Input from "components/input/Input.component";
import GridItem from "components/grid-item/GridItem.component";
import Form from "components/form/Form.component";
import Button from "components/button/Button.component";
import CheckBox from "components/checkbox/Checkbox.component";
// EFFECTS
import useInput from "effects/useInput.effect";
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { setSelectedTabIndex } from "redux/common/common.actions";

const UserNameTab = () => {
  const { dispatch } = useToolkit();

  const {
    inputState,
    handleInput,
    handleInvalidMessage,
    invalidMessages,
  } = useInput({ isAgreed: false });

  const handleInputChange = (event) => {
    handleInput(event);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setSelectedTabIndex(1));

    console.log(inputState);
  };

  return (
    <div className="username-tab">
      <Form onSubmit={onSubmit} className="username-tab__form">
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="username"
            value={inputState.username}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="text"
            placeholder="User name"
            required
          />
        </GridItem>
        <CheckBox
          name="isAgreed"
          onChange={handleInputChange}
          value={inputState.isAgreed}
          label="I am older than 14 years and hereby I accept the terms of use and Privacy policy"
        />
        <GridItem className="fy-flex__center" xs={12} sm={12} md={12} lg={12}>
          <Button className="username-tab__form_button">Register</Button>
        </GridItem>
      </Form>
    </div>
  );
};

export default UserNameTab;
