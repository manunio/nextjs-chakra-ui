import React, { useState } from "react";


import {
  Avatar,
  Flex,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td
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

const fakeData = [
  {
    avatarImg: "amazon.jpeg",
    nameOfTransaction: "Amazon",
    nameOfTransactionText: "Apr 24, 2021 at 1.40pm",
    category: "Electronic Devices",
    cashback: "+$2",
    amount: "-$240"
  },
  {
    avatarImg: "starbucks.jpeg",
    nameOfTransaction: "Amazon",
    nameOfTransactionText: "Apr 22, 2021 at 2.43pm",
    category: "Electronic Devices",
    cashback: "+$23",
    amount: "-$32"
  },
  {
    avatarImg: "youtube.jpeg",
    nameOfTransaction: "Amazon",
    nameOfTransactionText: "Apr 24, 2021 at 1.40pm",
    category: "Electronic Devices",
    cashback: "+$4",
    amount: "-$112"
  },
]
const Rows = () => fakeData.map(data => {
  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Avatar size="sm" mr={2} src={data.avatarImg} />
          <Flex flexDir="column">
            <Heading size="sm" letterSpacing="tight">{data.nameOfTransaction}</Heading>
            <Text fontSize="sm" color="gray">{data.nameOfTransactionText}</Text>
          </Flex>
        </Flex>
      </Td>
      <Td>{data.category}</Td>
      <Td isNumeric>{data.cashback}</Td>
      <Td isNumeric><Text fontWeight="bold" display="inline-table">{data.amount}</Text>.00</Td>
    </Tr>
  )
})

const TableRow = (num: number) => {
  for (let i = 0; i < num; i++) {
    return ({ Rows });
  }
}


const TransactionTable = () => {
  const [display, changeDisplay] = useState("hide")

  return (
    <Flex flexDir="column">
      <Flex overflow="auto">
        <Table variant="unstyled" mt={4}>
          <Thead>
            <Tr color="gray">
              <Th>Name of transactions</Th>
              <Th>Category</Th>
              <Th isNumeric>Cashback</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Flex align="center">
                  <Avatar size="sm" mr={2} src="amazon.jpeg" />
                  <Flex flexDir="column">
                    <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                    <Text fontSize="sm" color="gray">Apr 24, 2021 at 1.40pm</Text>
                  </Flex>
                </Flex>
              </Td>
              <Td>Electronic Devices</Td>
              <Td isNumeric>+$2</Td>
              <Td isNumeric><Text fontWeight="bold" display="inline-table">-$242</Text>.00</Td>
            </Tr>
            <Tr>
              <Td>
                <Flex align="center">
                  <Avatar size="sm" mr={2} src="starbucks.png" />
                  <Flex flexDir="column">
                    <Heading size="sm" letterSpacing="tight">Starbucks</Heading>
                    <Text fontSize="sm" color="gray">Apr 22, 2021 at 2.43pm</Text>
                  </Flex>
                </Flex>
              </Td>
              <Td>Electronic Devices</Td>
              <Td isNumeric>+$23</Td>
              <Td isNumeric><Text fontWeight="bold" display="inline-table">-$32</Text>.00</Td>
            </Tr>
            <Tr>
              <Td>
                <Flex align="center">
                  <Avatar size="sm" mr={2} src="youtube.png" />
                  <Flex flexDir="column">
                    <Heading size="sm" letterSpacing="tight">Youtube</Heading>
                    <Text fontSize="sm" color="gray">Apr 13, 2021 at 11.23am</Text>
                  </Flex>
                </Flex>
              </Td>
              <Td>Electronic Devices</Td>
              <Td isNumeric>+$4</Td>
              <Td isNumeric><Text fontWeight="bold" display="inline-table">-$112</Text>.00</Td>
            </Tr>

          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}

export default TransactionTable;
