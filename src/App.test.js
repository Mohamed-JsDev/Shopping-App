import { render, screen } from "@testing-library/react";
import App from "./App";

test("E-commerce Store", () => {
  render(<App />);
  const linkElement = screen.getByText(/E-commerce Store/i);
  expect(linkElement).toBeInTheDocument();
});
