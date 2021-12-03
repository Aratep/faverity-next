import React, { useEffect } from "react";

// BASE COMPONENTS
import GridItem from "components/grid-item/GridItem.component";
import Input from "components/input/Input.component";
import Button from "components/button/Button.component";
import Form from "components/form/Form.component";
import TextArea from "components/textarea/TextArea.component";
import RadioButtonsGroup from "components/radio-group/RadioGroup.component";
import DatePicker from "components/date-picker/DatePicker.component";
import Select from "components/select/Select.component";
// EFFECTS
import useInput from "effects/useInput.effect";
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { changeAboutTabParam } from "redux/auth-tab-params/auth-tab-params.actions";
import { setSelectedTabIndex } from "redux/common/common.actions";
// SERVICES
import AboutServices from "services/about.services";
// UTILITIES
import { generateCountriesOptions } from "utilities/helper-functions";
// IMAGES
import snapchatIcon from "assets/images/auth/snapchat.svg";
import instaIcon from "assets/images/auth/instagram.svg";

const AboutTab = () => {
  const {
    dispatch,
    reduxStore: { common: commonStore, authTabParams: authTabParamsStore },
  } = useToolkit("common", "authTabParams");

  const { aboutTabParams } = authTabParamsStore;
  const { countries } = commonStore;

  const { radioButtonsList } = AboutServices;
  const countriesOptions = generateCountriesOptions(countries);

  const { handleInput, handleInvalidMessage, invalidMessages } = useInput({
    ...aboutTabParams,
  });

  useEffect(() => {
    dispatch(changeAboutTabParam("countryId", countriesOptions[0].id));
    // eslint-disable-next-line
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    dispatch(changeAboutTabParam(name, value));
    handleInput(event);
  };

  const handleSelectChange = (name, value) => {
    dispatch(changeAboutTabParam(name, value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setSelectedTabIndex(2));
  };

  return (
    <div className="about-tab">
      <Form onSubmit={onSubmit} className="username-tab__form">
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="firstname"
            value={aboutTabParams.firstname}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="text"
            placeholder="First name"
            required
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="lastname"
            value={aboutTabParams.lastname}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="text"
            placeholder="Last name"
            required
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <DatePicker
            id="date"
            placeholder="Birth date"
            name="birthday"
            value={aboutTabParams.birthday}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Select
            name="countryId"
            options={countriesOptions}
            onChange={(event) => handleSelectChange("countryId", event.id)}
            defaultValue={countriesOptions[0]}
            placeholder="Country"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <RadioButtonsGroup
            name="gender"
            formLabel="Gender"
            radioList={radioButtonsList}
            value={aboutTabParams.gender}
            onChange={handleInputChange}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="instagram"
            value={aboutTabParams.instagram}
            error={invalidMessages}
            icon={instaIcon.src}
            id="instagram"
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="text"
            placeholder="Instagram"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Input
            name="snapchat"
            value={aboutTabParams.snapchat}
            error={invalidMessages}
            icon={snapchatIcon.src}
            id="snapchat"
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            type="text"
            placeholder="Snapchat"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <TextArea
            name="bio"
            value={aboutTabParams.bio}
            error={invalidMessages}
            onChange={handleInputChange}
            onInvalid={handleInvalidMessage}
            placeholder="About us"
            minRows={2}
          />
        </GridItem>
        <GridItem className="fy-flex__center" xs={12} sm={12} md={12} lg={12}>
          <Button className="username-tab__form_button">Next</Button>
        </GridItem>
      </Form>
    </div>
  );
};

export default AboutTab;
