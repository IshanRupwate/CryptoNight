import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

export default function Topnav({ title, onOpen }) {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" h="64px" justify="space-between" px="32">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaRegUserCircle} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Log Out</MenuItem>
            <Link to="/support">
              <MenuItem>Support</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}
