import {
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const SupportCard = ({ leftcomponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="380px">
        <Icon as={icon} boxSize={6} color="p.purple" />
        <Text as="h1" textStyle="h1" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftcomponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
