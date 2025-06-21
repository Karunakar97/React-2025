import { render, screen } from "@testing-library/react";
import { RestaurantCard } from "../ResturantCard";
import RestaurantMock from "../mocks/RestaurantMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should render restaurant card", () => {
  render(
    <BrowserRouter>
      <RestaurantCard restaurant={RestaurantMock} key={1} id={1} />
    </BrowserRouter>
  );
  const name = screen.getByText("The Spice Lounge");
  expect(name).toBeInTheDocument();
});
