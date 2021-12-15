import React from "react";
import { render, screen } from "../test-utils";
import HelpHero from "../../components/HelpHero";
describe("Help Others render some text", () => {
  it("should render the heading", () => {
    const text1ToFind = "Breast Cancer Organization"
    const text2ToFind = "World Health Organization"
    render(<HelpHero />);
    const heading1 = screen.getByText(text1ToFind);
    const heading2 = screen.getByText(text2ToFind);
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });

  it("Help Others should be rendered as image", () => {
    render(<HelpHero />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});