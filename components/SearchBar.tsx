import React from "react";

import {
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  FiSearch,
} from "react-icons/fi"

const SearchBar = () => {
  return (
    <InputGroup bgColor="#fff" mb={4} border="none" borderColor="#fff" borderRadius="10px" mr={2} >
      <InputLeftElement pointerEvents="none">
        <FiSearch color="gray" />
      </InputLeftElement>
      <Input type="number" pl="Search" borderRadius="10px" />
    </InputGroup>
  );
};

export default SearchBar;
