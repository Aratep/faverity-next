import React from "react";

// BASE COMPONENTS
import Image from "components/image/Image.component";
// TABS
import SearchUserTab from "./tabs/search-user/SearchUser.tab";
import SearchTagTab from "./tabs/search-tag/SearchTag.tab";
import SearchPollTab from "./tabs/search-poll/SearchPoll.tab";
// IMAGES
import profileIcon from "assets/images/search/profile-icon.png";
import hastagIcon from "assets/images/search/hashtag-icon.png";
import pollIcon from "assets/images/search/poll-icon.png";

const SearchServices = {
  tabLabels: [
    { id: 1, label: <Image src={profileIcon.src} /> },
    { id: 2, label: <Image src={hastagIcon.src} /> },
    { id: 3, label: <Image src={pollIcon.src} /> },
  ],
  tabPanels: [
    {
      id: 1,
      item: <SearchUserTab />,
    },
    {
      id: 2,
      item: <SearchTagTab />,
    },
    {
      id: 3,
      item: <SearchPollTab />,
    },
  ],
};

export default SearchServices;
