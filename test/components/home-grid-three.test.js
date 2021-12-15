import React from "react";
import { render, screen } from "../test-utils";
import HomeGridThree from "../../components/HomeGridThree";
describe("Home page should render the first grid", () => {
  it("should render the heading", () => {
    const text1ToFind = "AI Medica"
    const text2ToFind = "A better way to detect Diseases"
    const text3ToFind = "Our System able to detect the medical state with these features"
    const text4ToFind = "Start prediction today"
    const text5ToFind = "Get started"
    render(<HomeGridThree />);
    const heading1 = screen.getByText(text1ToFind);
    const heading2 = screen.getByText(text2ToFind);
    const heading3 = screen.getByText(text3ToFind);
    const heading4 = screen.getByText(text4ToFind);
    const heading5 = screen.getByText(text5ToFind);
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();
    expect(heading4).toBeInTheDocument();
    expect(heading5).toBeInTheDocument();
  });
});