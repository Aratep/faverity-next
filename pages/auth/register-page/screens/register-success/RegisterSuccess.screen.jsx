import React from "react";
import { useHistory } from "react-router-dom";

// BASE COMPONENTS
import Button from "components/button/Button.component";
// IMAGES
import registerSuccess from "assets/images/auth/register-success.png";
import checkIcon from "assets/images/auth/check-icon.svg";

const RegisterSuccess = () => {
  const history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  return (
    <div className="register-success-screen">
      <div className="register-success-screen__main-block">
        <img src={registerSuccess} alt="reg-success" />
        <div className="register-success-screen__main-block_content">
          <img src={checkIcon} alt="checkicon" />
          <h3>You are successfully registered!</h3>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Button onClick={goToFeedPage}>Let's Go</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
