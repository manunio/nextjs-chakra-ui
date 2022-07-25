import React, { useState } from "react";

import {
  Icon,
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Button,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell
} from "react-icons/fi"

import MyChart from "../components/MyChart";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserAvatar from "../components/UserAvatar";
import TransactionTable from "../components/TransactionTable";
import SearchBar from "../components/SearchBar";
import NotificationIcon from "../components/NotificationIcon";
import Card from "../components/Card";

export default function Dashboard() {
  const [value, changeValue] = useState(1)

  return (
    <Flex
      h="100vh"
      flexDir="row"
      overflow="hidden"
      maxW="2000px"
    >
      {/* column 1 */}
      <Flex w="15%" flexDir="column" alignItems="center" backgroundColor="#020202" color="#fff">
        <Flex flexDir="column" justifyContent="space-between" h="100vh">
          {/* Header */}
          <Header />
          {/* sidebar items */}
          <Sidebar />
          {/* bottom avatar */}
          <UserAvatar />
        </Flex>
      </Flex>

      {/* column 2 */}
      <Flex
        w="55%"
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Heading fontWeight="normal" mb={4} letterSpacing="tight" >Welcome back, <Flex fontWeight="bold" display="inline-flex" >Calvin</Flex></Heading>
        <Text color="gray" fontSize="sm" >My Balance</Text>
        <Text fontWeight="bold" fontSize="2xl" >$5,750.20</Text>
        <MyChart />
        <Flex justifyContent="space-between" mt={8} >
          <Flex align="flex-end" >
            <Heading as="h2" size="lg" letterSpacing="tight">
              Transactions
            </Heading>
            <Text fontSize="sm" color="gray" ml={4}>
              Apr 2022
            </Text>
          </Flex>
          <IconButton aria-label="calendar" icon={<FiCalendar />} />
        </Flex>
        {/* Transaction Table */}
        <TransactionTable />
      </Flex>

      {/* column 3 */}
      <Flex w="35%" bg="#f5f5f5" p="3%" flexDir="column" overflow="auto" >
        <Flex alignContent="center">
          {/* Search Bar */}
          <SearchBar />
          {/* Notification */}
          <NotificationIcon />
        </Flex>
        <Heading letterSpacing="tight">My Cards</Heading>
        {
          value === 1 &&
          <Card gradient={["#B57295", "#29259A"]} />
        }
        {
          value === 2 &&
          <Card gradient={["yellow.300", "blue.500"]} />
        }
        {
          value === 3 &&
          <Card gradient={["orange.300", "pink.600"]} />
        }
        <Flex justifyContent="center" mt={2}>
          <Button bgColor={value === 1 ? "gray.600" : "gray.400"} onClick={() => changeValue(1)} size="xs" mx={1} />
          <Button bgColor={value === 2 ? "gray.600" : "gray.400"} onClick={() => changeValue(2)} size="xs" mx={1} />
          <Button bgColor={value === 3 ? "gray.600" : "gray.400"} onClick={() => changeValue(3)} size="xs" mx={1} />
        </Flex>
        <Flex flexDir="column" my={4} >
          <Flex justify="space-between" mb={2} >
            <Text>Balance</Text>
            <Text fontWeight="bold">$140.42</Text>
          </Flex>
          <Flex justify="space-between" mb={2} >
            <Text>Credit Limit</Text>
            <Text fontWeight="bold">$150.00</Text>
          </Flex>
        </Flex>
        <Heading letterSpacing="tight" size="md" my={3}>Send money to </Heading>
        <Flex>
          <AvatarGroup size="md" max={3} >
            <Avatar src="avatar-2.jpg" />
            <Avatar src="avatar-3.jpg" />
            <Avatar src="avatar-4.jpg" />
            <Avatar src="avatar-4.jpg" />
            <Avatar src="avatar-4.jpg" />
          </AvatarGroup>
          <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor="gray.300" />
        </Flex>
        <Text color="gray" mt={10} mb={2}>Card Number</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiCreditCard color="gray.700" />
          </InputLeftElement>
          <Input type="number" placeholder="xxxx xxxx xxxx xxx" />
        </InputGroup>
        <Text color="gray" mt={10} mb={2}>Sum</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiDollarSign color="gray.700" />
          </InputLeftElement>
          <Input type="number" placeholder="130.00" />
        </InputGroup>
        <Button mt={4} bgColor="blackAlpha.900" color="#fff" p={7} borderRadius={15} >
          Send Money
        </Button>
      </Flex>
    </Flex >
  )
}
