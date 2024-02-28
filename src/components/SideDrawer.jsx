import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";

export const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <div>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Sidenav />
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
