import React, { useEffect } from "react";
// import { useRouteMatch } from "react-router-dom";
// import Router from "next/router";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Image from "components/image/Image.component";
// COMPONENTS
import AuthButton from "../../components/auth-button/AuthButton.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { resetTabParams } from "redux/auth-tab-params/auth-tab-params.actions";
import { setSelectedTabIndex } from "redux/common/common.actions";
// import {
// facebookLoginAsync,
// getFacebookLoginInfoAsync,
// } from "redux/auth/auth.actions";
// IMAGES
import logo from "assets/images/starter-screen/preloader-logo.svg";
import fbIcon from "assets/images/auth/fb-icon.png";
import emailIcon from "assets/images/auth/email-icon.png";

const RegisterPage = () => {
  const { dispatch } = useToolkit();
  // const { url } = useRouteMatch();
  const router = useRouter();

  useEffect(() => {
    return () => {
      dispatch(resetTabParams("emailTabParams"));
      dispatch(resetTabParams("aboutTabParams"));
      dispatch(setSelectedTabIndex(0));
    };
    // eslint-disable-next-line
  }, []);

  // const onFbLoginClick = () => {
  //   // dispatch(
  //   //   facebookLoginAsync(
  //   //     "https://faverity-syde.onrender.com/facebook-register-completed"
  //   //   )
  //   // );
  //   dispatch(
  //     getFacebookLoginInfoAsync(
  //       "https://faverity-syde.onrender.com/facebook-register-completed",
  //       "AQCrQ5tq2hqwy6Vnb3Tl4hqOx4z2sfpB-ulFUeCH1zxFoqsZg1UB3ZtvdBxeCcpAc4E1ix-sJcfR6da-0nd4G5L-bRwKALarakP_u9IidBmpLgWe1ktCMFgcvHDf3K3VRh9V8I-diorj8YSV0L4JR-hizA4I9jfElrYWF8XHzbSi9pjAsnCVYdkPS0hRxn-Xp3oL9wplbblQZcNdaVkRZjso9vR2L2Yoot5FB1F8VtKMix6aciv8QoDlxwGpHn8TlTsyNi-6HkZv5BwRnxPXyLR69TYH7H045YTl15tFEiEQaHsY6uwnqBb445J-CRS2OorpCG4aQ81x_CTYvmzRMU7IXecwQ6CP9DRRMZK8Rb97UhPFwAvSKrGehQFhmKKCmPw%23_%3D_"
  //     )
  //   );
  // };

  return (
    <section className="register-page">
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <GridContainer className="fy-flex__center">
          <Image
            className="register-page__logo"
            src={logo.src}
            alt="logo"
            onClick={() => router.push("/auth/login")}
          />
        </GridContainer>
        <GridContainer className="fy-flex__center">
          <h3>Register</h3>
          {/*<button onClick={onFbLoginClick}>login with fb</button>*/}
          <GridItem xs={9} sm={9} md={9} lg={9}>
            <AuthButton
              icon={fbIcon.src}
              text="Sign up with Facebook"
              className="bg-fb"
              onClick={() => router.push(`/auth/register/facebook`)}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className="register-page__separator">― or ―</div>
          </GridItem>
          <GridItem xs={9} sm={9} md={9} lg={9}>
            <AuthButton
              icon={emailIcon.src}
              text="Sign up with E-mail"
              className="bg-email"
              onClick={() => router.push(`/auth/register/email`)}
            />
          </GridItem>
        </GridContainer>
        <div className="fy-bottom__10">
          <p className="register-page__terms-text">
            By proceeding, I accept the Terms of Use and have read and
            understand the Privacy Policy.
          </p>
        </div>
      </GridItem>
    </section>
  );
};

export default RegisterPage;
