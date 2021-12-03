import React from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import Button from "components/button/Button.component";
import Image from "components/image/Image.component";
// EFFECTS
import useAuthSession from "effects/useAuthSession.effect";
// IMAGES
import registerSuccess from "assets/images/auth/register-success.png";
import checkIcon from "assets/images/auth/check-icon.svg";

const RegisterSuccess = () => {
  const router = useRouter();
  useAuthSession();

  const goToFeedPage = () => {
    router.push("/feed");
  };

  return (
    <div className="register-success-screen">
      <div className="register-success-screen__main-block">
        <Image src={registerSuccess.src} alt="reg-success" />
        <div className="register-success-screen__main-block_content">
          <Image src={checkIcon.src} alt="checkicon" />
          <h3>You are successfully registered!</h3>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Button onClick={goToFeedPage}>Let's Go</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
