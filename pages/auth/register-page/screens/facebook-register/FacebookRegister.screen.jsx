import React, { useEffect } from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Tab from "components/tab/Tab.component";
import Image from "components/image/Image.component";
// SERVICES
import FacebookRegisterServices from "./facebook-register.services";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import { setSelectedTabIndex } from "redux/common/common.actions";
import { resetTabParams } from "redux/auth-tab-params/auth-tab-params.actions";
// IMAGES
import logo from "assets/images/starter-screen/preloader-logo.svg";

const FacebookRegisterPage = () => {
  const { dispatch } = useToolkit();
  useAuthSession();

  const { tabLabels, tabPanels } = FacebookRegisterServices;
  const router = useRouter();

  useEffect(() => {
    return () => {
      dispatch(resetTabParams("emailTabParams"));
      dispatch(resetTabParams("aboutTabParams"));
      dispatch(setSelectedTabIndex(0));
    };
    // eslint-disable-next-line
  }, []);

  return (
    <section className="fb-register">
      <GridContainer className="fb-register__tab-block">
        <h4>Sign up with Facebook</h4>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Tab
            tabLabels={tabLabels}
            tabPanels={tabPanels}
            resetOnRefresh={true}
          />
        </GridItem>
      </GridContainer>
      <div className="fb-register__footer">
        <Image
          src={logo.src}
          alt="footer-logo"
          onClick={() => router.push("/auth/login")}
        />
      </div>
    </section>
  );
};

export default FacebookRegisterPage;
