import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

import styles from "@/styles/Navbar.module.css";

const NavbarMenu = ({
  text,
  icon,
  path,
}: {
  text: string;
  icon: any;
  path: string;
}) => {
  const router = useRouter();
  return (
    <Link
      href={path}
      textDecoration={"none"}
      _hover={{ textDecoration: "none" }}
    >
      <Flex
        alignItems={"center"}
        columnGap={3}
        color={router.pathname === path ? "blue" : "black"}
        paddingX={5}
        paddingY={3}
        className={router.pathname === path ? styles.activeMenu : ""}
      >
        {icon}
        <Text>{text}</Text>
      </Flex>
    </Link>
  );
};

export default NavbarMenu;
