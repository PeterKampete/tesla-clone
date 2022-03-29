import React from "react";
import { Container } from "./Home.styles";
import Section from "../Section/Section.component";
import modelS from "../../assets/images/model-s.jpg";
import modelY from "../../assets/images/model-y.jpg";
import solarPanel from "../../assets/images/solar-panel.jpg"

const Home = () => {
  console.log(modelS);
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelS}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelY}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar New Roofs"
        description="Solar Roof costs Less Than a New Gen"
        backgroundImg={solarPanel}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg={solarPanel}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Accessories"
        description="Money-back guarantee"
        backgroundImg={solarPanel}
        leftBtnText="Shop now"
      />
    </Container>
  );
};

export default Home;
