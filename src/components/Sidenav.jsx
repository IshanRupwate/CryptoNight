import { Box, Icon, Stack, HStack, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

export default function Sidenav() {
  const location = useLocation();

  const isActivelink = (link) => {
    return location.pathname == link;
  };

  const navLinks = [
    {
      icon: RiDashboardLine,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <>
      <Stack
        justify="space-between"
        boxShadow={{
          base: "none",
          lg: "lg",
        }}
        w={{
          base: "full",
          lg: "16rem",
        }}
        h="100vh"
        bg="white"
      >
        <Box>
          <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
            @IshanRupwate
          </Heading>
          <Box mx="12px" mt="24px">
            {navLinks.map((nav) => (
              <Link to={nav.link} key={nav.text}>
                <HStack
                  borderRadius="10px"
                  py="12px"
                  px="16px"
                  bg={isActivelink(nav.link) ? "#F3F3F7" : "transparent"}
                  color={isActivelink(nav.link) ? "#171717" : "#797E82"}
                  _hover={{
                    bg: "#f3f3f7",
                    color: "#171717",
                  }}
                >
                  //We can also write 3 instead of 12px (4 * 3). py - topbottom,
                  px - leftright
                  <Icon as={nav.icon} />
                  <Text fontSize="14px" fontWeight="medium">
                    {nav.text}
                  </Text>
                </HStack>
              </Link>
            ))}
          </Box>
        </Box>

        <Box mx="12px" mt="24px" mb="24px">
          <Link to="/support">
            <HStack
              borderRadius="10px"
              py="12px"
              px="16px"
              bg={isActivelink("/support") ? "#F3F3F7" : "transparent"}
              color={isActivelink("/support") ? "#171717" : "#797E82"}
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
              }}
            >
              //We can also write 3 instead of 12px (4 * 3). py - topbottom, px
              - leftright
              <Icon as={BiSupport} />
              <Text fontSize="14px" fontWeight="medium">
                Support
              </Text>
            </HStack>
          </Link>
        </Box>
      </Stack>
    </>
  );
}
