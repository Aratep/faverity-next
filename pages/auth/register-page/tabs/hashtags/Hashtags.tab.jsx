import React from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

// BASE COMPONENTS
import GridItem from "components/grid-item/GridItem.component";
import Form from "components/form/Form.component";
import Button from "components/button/Button.component";
import HashtagsBlock from "components/hashtags-block/HashtagsBlock.component";
// ACTIONS
import { changeAboutTabParam } from "redux/auth-tab-params/auth-tab-params.actions";
import { uploadUserGeneralInfo } from "redux/auth/auth.actions";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";

const HashtagsTab = () => {
  const router = useRouter();

  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      common: commonStore,
      authTabParams: authParamsStore,
    },
  } = useToolkit("authentication", "common", "authTabParams");

  // eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["user"]);

  const { categories, isCategoriesLoading } = commonStore;
  const { aboutTabParams, emailTabParams } = authParamsStore;
  const { registerInfo } = authStore;

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      uploadUserGeneralInfo(
        aboutTabParams,
        emailTabParams,
        registerInfo?.accessToken,
        router,
        setCookie
      )
    );
  };

  return (
    <div className="hashtags-tab">
      <Form onSubmit={onSubmit} className="hashtags-tab__form">
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <HashtagsBlock
            categories={categories}
            params={aboutTabParams}
            isLoading={isCategoriesLoading}
            onParamChange={changeAboutTabParam}
          />
        </GridItem>
        <GridItem className="fy-flex__center" xs={12} sm={12} md={12} lg={12}>
          <Button className="username-tab__form_button">Register</Button>
        </GridItem>
      </Form>
    </div>
  );
};

export default HashtagsTab;
