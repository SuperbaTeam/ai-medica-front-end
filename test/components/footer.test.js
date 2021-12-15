import React from "react";
import { render, screen } from "../test-utils";
import Footer from "../../components/Footer";
describe("Footer should be rendered with information", () => {
  it("should render the heading", () => {
    const text1ToFind = "Get Started"
    const text2ToFind = "All rights reserved by @ SuperbaTeam 2021"
    render(<Footer />);
    const heading1 = screen.getByText(text1ToFind);
    const heading2 = screen.getByText(text2ToFind);
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });
});