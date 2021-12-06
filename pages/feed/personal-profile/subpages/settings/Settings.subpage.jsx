import React, { useState, useEffect } from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Form from "components/form/Form.component";
import Input from "components/input/Input.component";
import DatePicker from "components/date-picker/DatePicker.component";
import RadioButtonsGroup from "components/radio-group/RadioGroup.component";
import Button from "components/button/Button.component";
import HashtagsBlock from "components/hashtags-block/HashtagsBlock.component";
import ConfirmationModal from "components/confirmation-modal/ConfirmationModal.component";
import Select from "components/select/Select.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useInput from "effects/useInput.effect";
import useAuthSession from "effects/useAuthSession.effect";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
//ACTIONS
import {
  changeSettingsParam,
  getProfileDataAsync,
  setProfileParams,
  updateProfileDataAsync,
  becomeInfluencerAsync,
} from "redux/profile/profile.actions";
import { logout, removeAccountAsync } from "redux/auth/auth.actions";
// SERVICES
import SettingsServices from "services/settings.services";
// UTILITIES
import {
  generateCountriesOptions,
  getCountryById,
} from "utilities/helper-functions";
// IMAGES
import snapchatIcon from "assets/images/auth/snapchat.svg";
import instaIcon from "assets/images/auth/instagram.svg";

const Settings = () => {
  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      profile: profileStore,
      common: commonStore,
    },
  } = useToolkit("authentication", "profile", "common");
  const authToken = useAuthSession("/feed/change-profile/settings");

  const [isRemoveAccountModal, toggleRemoveAccountModal] = useState(false);
  const [isInfluencerModal, toggleInfluencerModal] = useState(false);

  const { removeAccountLoading } = authStore;
  const {
    settingsParams,
    profileData,
    updateProfileDataLoading,
    profileDataLoading,
    becomeInfluencerLoading,
  } = profileStore;
  const { categories, isCategoriesLoading, countries } = commonStore;

  const countriesOptions = generateCountriesOptions(countries);

  const { handleInvalidMessage, invalidMessages } = useInput({
    ...settingsParams,
  });

  useEffect(() => {
    if (authToken) {
      dispatch(getProfileDataAsync(authToken));
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    // set settings params by profile data
    dispatch(setProfileParams(profileData));
    // eslint-disable-next-line
  }, [profileData])

  const { radioButtonsList } = SettingsServices;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    dispatch(changeSettingsParam(name, value));
  };

  const handleSelectChange = (name, value) => {
    dispatch(changeSettingsParam(name, value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProfileDataAsync(authToken, settingsParams));
  };

  const removeAccount = () => {
    dispatch(removeAccountAsync(authToken));
  };

  const becomeAnInfluencer = () => {
    dispatch(becomeInfluencerAsync(authToken));
    // toggleInfluencerModal(false);
  };

  const onRemoveClick = () => {
    toggleRemoveAccountModal(true);
  };

  const onInfluencerClick = () => {
    toggleInfluencerModal(true);
  };

  const logOut = () => {
    dispatch(logout(authToken));
  };

  const actions = [
    {
      id: 1,
      isOpen: isRemoveAccountModal,
      onConfirm: removeAccount,
      isLoading: removeAccountLoading,
      onClose: () => toggleRemoveAccountModal(false),
    },
    {
      id: 2,
      isOpen: isInfluencerModal,
      onConfirm: becomeAnInfluencer,
      isLoading: becomeInfluencerLoading,
      onClose: () => toggleInfluencerModal(false),
      text:
        "Mit diesem Dialog bestätigen Sie die Anfrage sich als Influencer eintragen zu lassen. Nach Absenden der Anfrage überprüft unser Team alles und sie werden danach benachrichtigt sobald sie fertig sind",
    },
  ];

  return (
    <section className="settings-subpage">
      {actions.map((action) => (
        <ConfirmationModal
          key={action.id}
          isOpen={action.isOpen}
          onClick={action.onConfirm}
          isLoading={action.isLoading}
          handleModalClose={action.onClose}
          text={action.text}
        />
      ))}
      <LoaderWrapper isLoading={profileDataLoading}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <BackArrowHeader />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <div className="settings-subpage__heading-text">Settings</div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Form onSubmit={onSubmit} className="settings-subpage__form">
              <Input
                name="firstname"
                value={settingsParams.firstname}
                error={invalidMessages}
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                type="text"
                label="First name"
              />
              <Input
                name="lastname"
                value={settingsParams.lastname}
                error={invalidMessages}
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                type="text"
                label="Last name"
              />
              <Input
                name="alias"
                value={settingsParams.alias}
                error={invalidMessages}
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                type="text"
                label="User name"
                required
              />
              <DatePicker
                id="date"
                placeholder="Birth date"
                name="birthday"
                value={settingsParams.birthday}
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                label="Birth date"
              />
              <Input
                name="email"
                value={settingsParams.email}
                error={invalidMessages}
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                autoComplete="on"
                type="emial"
                label="E-mail"
                required
              />
              <Select
                name="countryId"
                options={countriesOptions}
                onChange={(event) => handleSelectChange("countryId", event.id)}
                defaultValue={getCountryById(
                  settingsParams.countryId,
                  countriesOptions
                )}
                label="Country"
              />
              <Input
                name="instagramName"
                value={settingsParams.instagramName}
                error={invalidMessages}
                icon={instaIcon.src}
                id="instagram"
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                type="text"
                label="Instagram"
              />
              <Input
                name="snapchatName"
                value={settingsParams.snapchatName}
                error={invalidMessages}
                icon={snapchatIcon.src}
                id="snapchat"
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                type="text"
                label="Snapchat"
              />
              <Input
                name="url"
                value={settingsParams.url}
                error={invalidMessages}
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                type="text"
                label="Web site"
              />
              <Input
                name="bio"
                value={settingsParams.bio}
                error={invalidMessages}
                onChange={handleInputChange}
                onInvalid={handleInvalidMessage}
                type="text"
                label="Bio"
              />
              <RadioButtonsGroup
                name="gender"
                formLabel="Gender"
                radioList={radioButtonsList}
                value={settingsParams.gender || "MALE"}
                onChange={handleInputChange}
              />
              <HashtagsBlock
                categories={categories}
                params={settingsParams}
                isLoading={isCategoriesLoading}
                onParamChange={changeSettingsParam}
              />
              <Button
                isLoading={updateProfileDataLoading}
                className="settings-subpage__form-btn">
                Submit
              </Button>
            </Form>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Button
              onClick={onInfluencerClick}
              isLoading={removeAccountLoading}
              className="settings-subpage__influencer-btn">
              Influencer werden
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Button
              onClick={onRemoveClick}
              isLoading={removeAccountLoading}
              className="settings-subpage__delete-btn">
              Remove account
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Button onClick={logOut} className="settings-subpage__logout-btn">
              Logout
            </Button>
          </GridItem>
        </GridContainer>
      </LoaderWrapper>
    </section>
  );
};

export default withToolbar(Settings);
