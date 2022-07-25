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
  Td,
  IconButton,
  Divider
} from "@chakra-ui/react";

import {
  FiChevronDown,
  FiChevronUp,
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
    avatarImg: "starbucks.png",
    nameOfTransaction: "Starbucks",
    nameOfTransactionText: "Apr 22, 2021 at 2.43pm",
    category: "Card and Restaurant",
    cashback: "+$23",
    amount: "-$32"
  },
  {
    avatarImg: "youtube.png",
    nameOfTransaction: "Youtube",
    nameOfTransactionText: "Apr 13, 2021 at 11.12am",
    category: "Social Media",
    cashback: "+$4",
    amount: "-$112"
  },
]

const generateTableRows = (num: number = 1) => [...Array(num).keys()]
  .map((_) => fakeData.map((data, i) => {
    return (
      <Tr key={i}>
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
  }))

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
            {generateTableRows()}
            {display === "show" && generateTableRows()}
          </Tbody>
        </Table>
      </Flex>
      <Flex align="center">
        <Divider />
        <IconButton
          aria-label=""
          icon={display === "show" ? <FiChevronUp /> : <FiChevronDown />}
          onClick={() => display === "show" ? changeDisplay("none") : changeDisplay("show")}
        />
        <Divider />
      </Flex>
    </Flex>
  );
}

export default TransactionTable;
