import React from "react";
import { render, screen } from "../test-utils";
import HomeHero from "../../components/HomeHero";
describe("Home Page Hero Should be rendered as image", () => {
  it("should render the heading", () => {
    render(<HomeHero />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});