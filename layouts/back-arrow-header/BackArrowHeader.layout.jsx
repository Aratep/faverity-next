import React from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import Image from "components/image/Image.component";
import IsVisible from "components/is-visible/IsVisible.component";
// IMAGES
import backArrow from "assets/images/profile/back-arrow.svg";
import logo from "assets/images/starter-screen/preloader-logo.svg";

const BackArrowHeader = ({ isMainPage = false, hasLogo = true, text = "" }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="back-arrow-heading">
      <IsVisible isVisible={!isMainPage}>
        <Image
          src={backArrow.src}
          onClick={goBack}
          imgClassName="back-arrow"
          alt="back-arrow"
        />
      </IsVisible>
      <IsVisible isVisible={hasLogo}>
        <Image
          src={logo.src}
          hasLink={true}
          link="/feed"
          imgClassName="logo"
          alt="logo"
        />
      </IsVisible>
      <IsVisible isVisible={!hasLogo}>
        <h2>{text}</h2>
      </IsVisible>
    </div>
  );
};

export default BackArrowHeader;
