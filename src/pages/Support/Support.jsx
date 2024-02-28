import DashboardLayout from "../../components/DashboardLayout";

import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
export default function Support() {
  return (
    <>
      <DashboardLayout title="Support">
        <Stack spacing="5rem" mb="10px">
          <SupportCard
            leftcomponent={<ContactCard />}
            title="Contact Us"
            icon={IoMdMail}
            text="Have a question or just want to know more? Feel free to reach out to
          us."
          />
          <SupportCard
            leftcomponent={
              <InfoCard
                tagText="Chatbot"
                imgUrl="/grid_bg.svg"
                inverted="true"
                text="Chat with us now"
              />
            }
            title="Live Chat"
            icon={AiFillMessage}
            text="Don’t have time to wait for the answer? Chat with us now."
          />
        </Stack>
      </DashboardLayout>
    </>
  );
}
