import React from "react";
import { render, screen } from "./test-utils";
import ResultHero from "../components/ResultHero";
describe("Result Page Hero image should be rendered", () => {
  it("should render the heading", () => {
    render(<ResultHero />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});