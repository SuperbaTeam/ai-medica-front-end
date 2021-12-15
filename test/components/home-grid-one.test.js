import React from "react";
import { render, screen } from "../test-utils";
import HomeGridOne from "../../components/HomeGridOne";
describe("Home page should render the first grid", () => {
  it("should render the heading", () => {
    const text1ToFind = "Stroke"
    const text2ToFind = "Hepatitis"
    const text3ToFind = "Breast Cancer"
    render(<HomeGridOne />);
    const heading1 = screen.getByText(text1ToFind);
    const heading2 = screen.getByText(text2ToFind);
    const heading3 = screen.getByText(text3ToFind);
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();
  });
});