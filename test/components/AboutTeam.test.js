import React from "react";
import { render, screen } from "../test-utils";
import AboutTeam from "../../components/AboutTeam";
describe("AboutUs", () => {
  it("should render the heading", () => {
    const text1ToFind = "Faisal Kushha"
    const text2ToFind = "Jehad Abu Awwad"
    const text3ToFind = "Musa'b Shalaldeh"
    const text4ToFind = "Shahed Alkhatib"
    render(<AboutTeam />);
    const heading1 = screen.getByText(text1ToFind);
    const heading2 = screen.getByText(text2ToFind);
    const heading3 = screen.getByText(text3ToFind);
    const heading4 = screen.getByText(text4ToFind);
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();
    expect(heading4).toBeInTheDocument();
  });
});