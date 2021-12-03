import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Input from "components/input/Input.component";
import Form from "components/form/Form.component";
import Button from "components/button/Button.component";
import Image from "components/image/Image.component";
// AUTH BUTTON
import AuthButton from "../../components/auth-button/AuthButton.component";
// EFFECTS
import useInput from "effects/useInput.effect";
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import { login } from "redux/auth/auth.actions";
// IMAGES
import logo from "assets/images/starter-screen/preloader-logo.svg";
// IMAGES
import fbIcon from "assets/images/auth/fb-icon.png";

const LoginPage = () => {
  const {
    inputState,
    handleInput,
    handleInvalidMessage,
    invalidMessages,
  } = useInput();
  useAuthSession();

  const {
    dispatch,
    reduxStore: { authentication: authStore },
  } = useToolkit("authentication");

  const { isLoading } = authStore;
  const router = useRouter();

  const handleInputChange = (event) => {
    handleInput(event);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(inputState, router));
  };

  return (
    <section className="login-page">
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <Form onSubmit={onSubmit} className="login-page__form" heading="Login">
          <div className="login-page__login-button">
            <GridItem xs={11} sm={11} md={12} lg={12}>
              <AuthButton
                icon={fbIcon.src}
                text="Login with Facebook"
                className="bg-fb"
              />
            </GridItem>
          </div>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className="register-page__separator">― or ―</div>
          </GridItem>
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
                placeholder="User name"
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
          </GridContainer>
          <GridContainer className="fy-flex__center">
            <GridItem
              className="fy-pb__1 login-page__form_forgot-link"
              xs={12}
              sm={12}
              md={12}
              lg={12}>
              <Link href="/auth/reset-password">Forgot your password?</Link>
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="login-page__form_forgot-link">
              <Link href="/auth/register">Register</Link>
            </GridItem>
          </GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12} className="fy-flex__center">
            <Button isLoading={isLoading} className="login-page__form_button">
              Login
            </Button>
          </GridItem>
          <GridContainer className="fy-pb__3">
            <GridItem className="fy-pb__" xs={12} sm={12} md={12} lg={12}>
              <Image
                className="login-page__form_footer-logo"
                src={logo.src}
                alt="logo"
                onClick={() => router.push("/auth/login")}
              />
            </GridItem>
          </GridContainer>
          <div className="">
            <p className="login-page__form_terms-text">
              By proceeding, I accept the Terms of Use and have read and
              understand the Privacy Policy.
            </p>
          </div>
        </Form>
      </GridItem>
    </section>
  );
};

LoginPage.getInitialProps = async () => {
  console.log(" initial prospPPPPPPPPPPPPPPp");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  return { users: json };
};

export default LoginPage;
