import React, { useEffect } from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Tab from "components/tab/Tab.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { setSelectedTabIndex } from "redux/common/common.actions";
import { resetTabParams } from "redux/auth-tab-params/auth-tab-params.actions";
// SERVICES
import EmailRegisterServices from "./email-register.services";
// IMAGES
import logo from "assets/images/starter-screen/preloader-logo.svg";

const EmailRegisterPage = () => {
  const { dispatch } = useToolkit();

  const { tabLabels, tabPanels } = EmailRegisterServices;
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
    <section className="email-register">
      <GridContainer className="email-register__tab-block">
        <h4>Sign up with E-mail</h4>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Tab
            tabLabels={tabLabels}
            tabPanels={tabPanels}
            resetOnRefresh={true}
          />
        </GridItem>
      </GridContainer>
      <div className="email-register__footer">
        <img
          src={logo.src}
          alt="footer-logo"
          onClick={() => router.push("/auth/login")}
        />
      </div>
    </section>
  );
};

export default EmailRegisterPage;
