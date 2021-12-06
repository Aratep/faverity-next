import React from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Form from "components/form/Form.component";
import Input from "components/input/Input.component";
import Button from "components/button/Button.component";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
// ACTIONS
import { changePasswordAsync } from "redux/auth/auth.actions";
// EFFECTS
import useInput from "effects/useInput.effect";
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";

const ChangePassword = () => {
  const router = useRouter();

  const {
    inputState,
    handleInput,
    handleInvalidMessage,
    invalidMessages,
  } = useInput();
  const authToken = useAuthSession();

  const {
    dispatch,
    reduxStore: { authentication: authStore },
  } = useToolkit("authentication");

  const { changePasswordLoding } = authStore;

  const handleInputChange = (event) => {
    handleInput(event);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      changePasswordAsync({
        ...inputState,
        token: authToken,
        history: router,
      })
    );
  };

  return (
    <section className="change-password-subpage">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <Form
          onSubmit={onSubmit}
          heading="Change Password"
          className="change-password-subpage__form">
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Input
              name="passwordOld"
              value={inputState.passwordOld}
              error={invalidMessages}
              onChange={handleInputChange}
              onInvalid={handleInvalidMessage}
              label="Old password"
              type="password"
              placeholder="Old password"
              hasEyeIcon={true}
              required
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Input
              name="passwordNew"
              value={inputState.passwordNew}
              error={invalidMessages}
              onChange={handleInputChange}
              onInvalid={handleInvalidMessage}
              label="New password"
              type="password"
              placeholder="New password"
              hasEyeIcon={true}
              required
            />
          </GridItem>
          <GridContainer className="fy-flex__center">
            <Button isLoading={changePasswordLoding}>Confirm</Button>
          </GridContainer>
        </Form>
      </GridContainer>
    </section>
  );
};

export default withToolbar(ChangePassword);
