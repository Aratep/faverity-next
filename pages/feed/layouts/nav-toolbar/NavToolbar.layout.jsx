import React from "react";
import NavLink from "components/nav-link/NavLink.component";
// ICONS
import HomeIcon from "components/icons/HomeIcon";
import SearchIcon from "components/icons/SearchIcon";
import PlusIcon from "components/icons/PlusIcon";
import MailIcon from "components/icons/MailIcon";
import ProfileIcon from "components/icons/ProfileIcon";

const NavToolbar = () => {
  const navbarItems = [
    { id: 1, path: "/feed", icon: <HomeIcon />, activeClassName: "svg-active" },
    {
      id: 2,
      path: "/feed/search",
      icon: <SearchIcon />,
      activeClassName: "svg-active",
    },
    {
      id: 3,
      path: "/feed/create-poll",
      icon: <PlusIcon />,
      activeClassName: "svg-active",
    },
    {
      id: 4,
      path: "/feed/chats",
      icon: <MailIcon />,
      activeClassName: "svg-active",
    },
    {
      id: 5,
      path: "/feed/personal-profile",
      icon: <ProfileIcon />,
      activeClassName: "svg-active",
    },
  ];
  return (
    <footer className="toolbar-footer">
      <nav className="toolbar-footer__nav-toolbar">
        {navbarItems.map((item, idx) => {
          return (
            <NavLink
              exact
              href={item.path}
              activeClassnames={item.activeClassName}
              key={item.id || idx}>
              {item.icon}
            </NavLink>
          );
        })}
      </nav>
    </footer>
  );
};

export default NavToolbar;
