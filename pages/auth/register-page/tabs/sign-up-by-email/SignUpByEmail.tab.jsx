import React, { useState } from "react";

// BASE COMPONENTS
import Input from "components/input/Input.component";
import GridItem from "components/grid-item/GridItem.component";
import Form from "components/form/Form.component";
import Button from "components/button/Button.component";
import CheckBox from "components/checkbox/Checkbox.component";
import IsVisible from "components/is-visible/IsVisible.component";
// ACTIONS
import { register } from "redux/auth/auth.actions";
import { changeEmailTabParam } from "redux/auth-tab-params/auth-tab-params.actions";
// EFFECTS
import useInput from "effects/useInput.effect";
import useToolkit from "effects/useToolkit.effect";

const SignUpByEmailTab = () => {
  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      authTabParams: authTabParamsStore,
    },
  } = useToolkit("authentication", "common", "authTabParams");

  const { emailTabParams } = authTabParamsStore;

  const {
    inputState,
    handleInput,
    handleInvalidMessage,
    invalidMessages,
  } = useInput({
    ...emailTabParams,
    isAgreed: false,
  });

  const { isRegister } = authStore;

  const [psswdsNotMatchMessage, setPsswdsNotMatchMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    dispatch(changeEmailTabParam(name, value));
    handleInput(event);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const props = { ...inputState };

    if (emailTabParams?.password === emailTabParams?.rePassword) {
      setPsswdsNotMatchMessage("");
      // temporary remove this params (aren't necessary for this moment)
      delete props.rePassword;
      // delete props.isAgreed;
      props.password = emailTabParams.password;
      dispatch(changeEmailTabParam("password", emailTabParams.password));
      // change tab index after successfully register
      dispatch(register(props));
    } else {
      setPsswdsNotMatchMessage("Passwords do not match");
    }
  };

  return (
    <div className="sign-up-by-email-tab">
      <Form onSubmit={onSubmit} className="sign-up-by-email-tab__form">
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="alias"
            value={inputState.alias}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="text"
            placeholder="User name"
            required
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="email"
            value={inputState.email}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="email"
            placeholder="E-mail"
            required
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="password"
            value={inputState.password}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="password"
            placeholder="Password"
            required
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="rePassword"
            value={inputState.rePassword}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="password"
            placeholder="Confirm password"
            required
          />
          <IsVisible isVisible={psswdsNotMatchMessage}>
            <div className="fy-input__error">{psswdsNotMatchMessage}</div>
          </IsVisible>
        </GridItem>
        <CheckBox
          name="isAgreed"
          onChange={handleInputChange}
          value={inputState.isAgreed}
          label="I am older than 14 years and hereby I accept the terms of use and Privacy policy"
        />
        <GridItem className="fy-flex__center" xs={12} sm={12} md={12} lg={12}>
          <Button
            isLoading={isRegister}
            className="sign-up-by-email-tab__form_button">
            Register
          </Button>
        </GridItem>
      </Form>
    </div>
  );
};

export default SignUpByEmailTab;
