import React from "react";
import { render, screen } from "./test-utils";
import Footer from "../components/Footer";
describe("Footer should be rendered with information", () => {
  it("should render the heading", () => {
    const text1ToFind = "Superba Team"
    const text2ToFind = "Visit our github organization where we have our projects set up and ready to share with everyone!"
    const text3ToFind = "All rights reserved by @ SuperbaTeam 2021"
    render(<Footer />);
    const heading1 = screen.getByText(text1ToFind);
    const heading2 = screen.getByText(text2ToFind);
    const heading3 = screen.getByText(text3ToFind);
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();
  });
});