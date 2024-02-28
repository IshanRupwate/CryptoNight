import { Box, Container, useDisclosure } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { SideDrawer } from "./SideDrawer";

export default function DashboardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav />
      </Box>

      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <Topnav title={title} onOpen={onOpen} />
        <Container
          overflowX="hidden"
          overflowY="auto"
          h="calc(100vh - 88px)"
          mt="6"
          maxW="70rem"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
}
