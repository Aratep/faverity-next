import React from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import Form from "components/form/Form.component";
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Input from "components/input/Input.component";
import Button from "components/button/Button.component";
import Image from "components/image/Image.component";
// EFFECTS
import useInput from "effects/useInput.effect";
// ACTIONS
import { resetPassword } from "redux/auth/auth.actions";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// IMAGES
import logo from "assets/images/starter-screen/preloader-logo.svg";

const PasswordResetPage = () => {
  const {
    inputState,
    handleInput,
    handleInvalidMessage,
    invalidMessages,
  } = useInput();

  const {
    dispatch,
    reduxStore: { authentication: authStore },
  } = useToolkit("authentication");

  const { resetPasswordLoading } = authStore;
  const router = useRouter();

  const handleInputChange = (event) => {
    handleInput(event);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(resetPassword(inputState));
  };

  return (
    <section className="password-reset-page">
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <Form
          onSubmit={onSubmit}
          className="password-reset-page__form"
          heading="Reset Password">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Input
                name="email"
                value={inputState.email}
                error={invalidMessages}
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                autoComplete="on"
                type="text"
                placeholder="Email"
                required
              />
            </GridItem>
          </GridContainer>

          <GridItem xs={12} sm={12} md={12} lg={12} className="fy-flex__center">
            <Button
              className="password-reset-page__button"
              isLoading={resetPasswordLoading}>
              Reset
            </Button>
          </GridItem>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Image
                className="password-reset-page__footer-logo"
                src={logo.src}
                alt="logo"
                onClick={() => router.push("/auth/login")}
              />
            </GridItem>
          </GridContainer>
        </Form>
      </GridItem>
    </section>
  );
};

export default PasswordResetPage;
