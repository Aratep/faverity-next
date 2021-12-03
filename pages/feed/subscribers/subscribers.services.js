import React from "react";

import SubscribersTab from "./tabs/subscribers/Subscribers.tab";

const SubscribersServices = {
  generateTabLabels(followers, following) {
    return [
      {
        id: 1,
        label: (
          <div className="tab-list__item">
            <span>{followers}</span> Followers
          </div>
        ),
      },
      {
        id: 2,
        label: (
          <div className="tab-list__item">
            <span>{following}</span> Following
          </div>
        ),
      },
    ];
  },
  tabPanels: [
    {
      id: 1,
      item: <SubscribersTab subscribersType="FOLLOWERS" />,
    },
    {
      id: 2,
      item: <SubscribersTab subscribersType="FOLLOWINGS" />,
    },
  ],
};

export default SubscribersServices;
