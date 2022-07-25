import React from "react";

import {
  Icon,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

import {
  FiCreditCard,
} from "react-icons/fi"

interface CardProps {
  gradient: string[]
}

const Card = (props: CardProps) => {

  let gradient = props.gradient.join(",")

  return (
    <Box
      borderRadius="25px"
      mt={4}
      w="100%"
      h="200px"
      bgGradient={`linear(to-t, ${gradient})`}
    >
      <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
        <Flex justify="space-between" w="100%" align="flex-start" >
          <Flex flexDir="column">
            <Text color="gray.400">Current Balance</Text>
            <Text fontWeight="bold" fontSize="xl">$5,750.20</Text>
          </Flex>
          <Flex align="center" >
            <Icon mr={2} as={FiCreditCard} />
            <Text>Rise.</Text>
          </Flex>
        </Flex>
        <Text mb={4}>**** **** **** 1289</Text>
        <Flex align="flex-end" justify="space-between">
          <Flex>
            <Flex flexDir="column" mr={4} >
              <Text textTransform="uppercase" fontSize="xs">
                Valid Thru
              </Text>
              <Text fontSize="lg">
                12/23
              </Text>
            </Flex>
            <Flex flexDir="column" >
              <Text textTransform="uppercase" fontSize="xs">
                CVV
              </Text>
              <Text fontSize="lg">
                ***
              </Text>
            </Flex>
          </Flex>
          <Icon as={FiCreditCard} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
