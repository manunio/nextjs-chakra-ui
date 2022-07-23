import React from "react";

import {
  Flex,
  Icon,
  Link,
  Text
} from "@chakra-ui/react";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox
} from "react-icons/fi"

const Sidebar = () => {
  return (
    <Flex flexDir="column" align="flex-start" justifyContent="center">
      <Flex className="sidebar-items">
        <Link>
          <Icon as={FiHome} fontSize="2xl" className="active-icon" ></Icon>
        </Link>
        <Link _hover={{ textDecore: 'none' }}>
          <Text className="active">Home</Text>
        </Link>
      </Flex>

      <Flex className="sidebar-items">
        <Link>
          <Icon as={FiPieChart} fontSize="2xl"></Icon>
        </Link>
        <Link _hover={{ textDecore: 'none' }}>
          <Text className="active">Credit</Text>
        </Link>
      </Flex>

      <Flex className="sidebar-items">
        <Link>
          <Icon as={FiDollarSign} fontSize="2xl"></Icon>
        </Link>
        <Link _hover={{ textDecore: 'none' }}>
          <Text className="active">Wallet</Text>
        </Link>
      </Flex>

      <Flex className="sidebar-items">
        <Link>
          <Icon as={FiBox} fontSize="2xl" ></Icon>
        </Link>
        <Link _hover={{ textDecore: 'none' }}>
          <Text className="active">Services</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
