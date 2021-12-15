import React from "react";
import { render, screen } from "../test-utils";
import HomeHero from "../../components/HomeHero";
describe("AboutUs", () => {
  it("should render the heading", () => {
    render(<HomeHero />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});