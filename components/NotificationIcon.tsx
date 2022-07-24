import React from "react";

import {
  Flex,
  IconButton,
} from "@chakra-ui/react";

import {
  FiBell
} from "react-icons/fi"

const NotificationIcon = () => {
  return (
    <>
      <IconButton aria-label="" icon={<FiBell />} fontSize="sm" bgColor="#fff" borderRadius="50%" p="10px" />
      <Flex
        w={30}
        h={25}
        bgColor="#B57295"
        borderRadius="50%"
        color="white"
        align="center"
        justify="center"
        ml={-3}
        mt={-2}
        zIndex={100}
        fontSize="xs"
      >
        2
      </Flex>
    </>
  );
};

export default NotificationIcon;
