import React from "react";

import {
  Heading,
  Flex,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex flexDir="column" as="nav">
      <Heading mt="50" mb="100" fontSize="4xl" alignSelf="center" letterSpacing="tight">
        Rise.
      </Heading>
    </Flex>

  );
};

export default Header;
