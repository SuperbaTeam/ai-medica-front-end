import React from "react";
import { render, screen } from "../test-utils";
import AboutGrid from "../../components/AboutGrid";
describe("AboutUs", () => {
  it("should render the heading", () => {
    const text1ToFind = "Our Mission"
    const text2ToFind = "Our Vision"
    render(<AboutGrid />);
    const heading1 = screen.getByText(text1ToFind);
    const heading2 = screen.getByText(text2ToFind);
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });
});