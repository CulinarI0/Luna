// It needs tailwind config
import "@/app/globals.css";
import React from "react";
import Carousel from "./Carousel";
import { Box } from "./Box";
import { CardList } from "./Card";
import { cocktailList, foodList, wineList } from "@/mock/cardlistitems";

const wineName = wineList.map(x=>x.name);

describe("<Carousel />", () => {
  it("renders and navigates between slides", () => {
    cy.mount(
      <Carousel>
        <Box title="Wine List">
          <CardList items={wineName} />
        </Box>
        <Box title="Cocktail List">
          <CardList items={cocktailList} />
        </Box>
        <Box title="Food List">
          <CardList items={foodList} />
        </Box>
      </Carousel>,
    );

    // Check that the first slide is displayed
    cy.get("div").contains("Wine List").should("be.visible");

    // Navigate to the second slide
    cy.get("button").contains("2").click();

    // Check that the second slide is displayed
    cy.get("div").contains("Cocktail List").should("be.visible");

    // Navigate to the third slide
    cy.get("button").contains("3").click();

    // Check that the third slide is displayed
    cy.get("div").contains("Food List").should("be.visible");
  });
});
