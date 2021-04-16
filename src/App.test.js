import { render, screen } from "@testing-library/react";
import App from "./App";
import "./Components/liste";
test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});

test("Listeda kaç bilgi var", () => {
  render(<Liste />);
  const listElement = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass("Listem");
  expect(listItems.length).toEqual(9);
});
