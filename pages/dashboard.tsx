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
      </Flex>
    </Flex >
  )
}
