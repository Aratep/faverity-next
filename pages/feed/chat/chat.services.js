import React from "react";

// TABS
import PrivateChatTab from "./tabs/private-chat/PrivateChat.tab";
import GroupChatTab from "./tabs/group-chat/GroupChat.tab";

const ChatServices = {
  tabLabels: [
    { id: 1, label: "Privat" },
    { id: 2, label: "Gruppen" },
  ],
  tabPanels: [
    {
      id: 1,
      item: <PrivateChatTab />,
    },
    {
      id: 2,
      item: <GroupChatTab />,
    },
  ],
};

export default ChatServices;
