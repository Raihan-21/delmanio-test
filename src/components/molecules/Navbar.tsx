import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserFriends, FaUserPlus, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [menus, setMenus] = useState([
    {
      text: "Dashboard",
      path: "/",
      icon: <MdSpaceDashboard />,
    },
    {
      text: "Users",
      path: "/users",
      icon: <FaUserFriends />,
    },
    {
      text: "Registration",
      path: "/registration",
      icon: <FaUserPlus />,
    },
    {
      text: "Search",
      path: "/search",
      icon: <FaSearch />,
    },
  ]);
  return (
    <Box backgroundColor={"darkcyan"}>
      {menus.map((menu, i) => (
        <NavbarMenu
          text={menu.text}
          icon={menu.icon}
          path={menu.path}
          key={i}
        />
      ))}
    </Box>
  );
};

export default Navbar;
