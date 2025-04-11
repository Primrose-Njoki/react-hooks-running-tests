import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  screen.debug(); // This should print the DOM to terminal

  console.log("DEBUG COMPLETE"); // This will help confirm if screen.debug() is running


  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
