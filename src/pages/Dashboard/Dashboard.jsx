import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import CurrentPrice from "./components/CurrentPrice";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <CurrentPrice />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dot_bg.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/grid_bg.svg"
            tagText="Contact"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
}
