import React, { useEffect, useState } from "react";
// REACT TABS
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
import Input from "components/input/Input.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { setSelectedTabIndex } from "redux/common/common.actions";
// IMAGES
import serchIcon from "assets/images/feed/search-icon.svg";
// STYLES
import "react-tabs/style/react-tabs.css";

const TabComponent = ({
  tabLabels,
  tabPanels,
  isSearchInput = false,
  text = "",
  onSearchTextChange,
  resetOnRefresh = false,
}) => {
  const {
    dispatch,
    reduxStore: { common: commonStore },
  } = useToolkit("common");

  const { selectedTabIndex } = commonStore;

  const [searchText, changeSearchText] = useState(text);

  // reset selected tab index on page refresh;
  useEffect(() => {
    if (window.performance && resetOnRefresh) {
      if (
        window.performance.navigation.type ===
        window.performance.navigation.TYPE_RELOAD
      ) {
        dispatch(setSelectedTabIndex(0));
      }
    }
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    changeSearchText(value);
    onSearchTextChange(value);
  };

  const onTabSelect = (index) => {
    dispatch(setSelectedTabIndex(index));
  };

  return (
    <div className="tab">
      <Tabs
        selectedIndex={selectedTabIndex}
        onSelect={(index) => {
          onTabSelect(index);
        }}>
        <TabList>
          {tabLabels.map((tab, idx) => (
            <Tab key={tab?.id || idx}>{tab.label}</Tab>
          ))}
        </TabList>
        <IsVisible isVisible={isSearchInput}>
          <Input
            name="searchText"
            value={searchText}
            onChange={onChange}
            type="text"
            placeholder="Search"
            icon={serchIcon.src}
          />
        </IsVisible>
        <div className="tab__panels-container">
          {tabPanels.map((panel, idx) => (
            <TabPanel key={panel?.id || idx}>
              <IsVisible isVisible={panel?.heading}>
                <div className="tab__heading">{panel?.heading}</div>
              </IsVisible>
              {panel.item}
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default TabComponent;
