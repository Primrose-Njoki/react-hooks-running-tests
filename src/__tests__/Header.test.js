import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  screen.debug(); // This should print the DOM to terminal

  console.log("DEBUG COMPLETE"); // This will help confirm if screen.debug() is running


  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
