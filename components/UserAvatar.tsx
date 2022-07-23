import React from "react";

import {
  Flex,
  Text,
  Avatar
} from "@chakra-ui/react";

const UserAvatar = () => {
  return (
    <Flex flexDir="column" alignItems="center" mb={10} mt={5} >
      <Avatar my={2} src="avatar-1.jpg" />
      <Text textAlign="center">Calvin West</Text>
    </Flex>

  );
};

export default UserAvatar;
