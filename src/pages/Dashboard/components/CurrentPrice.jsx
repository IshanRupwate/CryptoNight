import {
  HStack,
  Icon,
  Stack,
  Button,
  Text,
  Flex,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const CurrentPrice = () => {
  const timeStamp = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 26,670.25
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm"></Text>
          </HStack>
          <HStack spacing={4}>
            <HStack fontWeight="medium" color="green.500">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="sm" fontWeight="medium">
                22 %
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon=<Icon as={FaCirclePlus}></Icon>>Buy</Button>
          <Button leftIcon=<Icon as={FaCircleMinus}></Icon>>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt="48px" />
            <HStack justify="space-between">
              {timeStamp.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default CurrentPrice;
