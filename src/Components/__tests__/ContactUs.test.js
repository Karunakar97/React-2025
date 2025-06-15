import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("test should load", () => {
  // render will get us the component
  render(<ContactUs />);

  // screen will have access from the render component
  // getByRole gives by element
  // like there are more methods getBtText like that
  const heading = screen.getByRole("heading");
  const button = screen.getByText("Submit");

  // Assertion
  expect(heading).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("test should load submit text", () => {
  // render will get us the component
  render(<ContactUs />);

  // screen will have access from the render component
  // getByRole gives by element
  // like there are more methods getBtText like that
  const button = screen.getByText("Submit");

  // Assertion
  expect(button).toBeInTheDocument();
});

test("test should load two inputs", () => {
  render(<ContactUs />);
  // if multiple item getAllByRole
  const textBoxes = screen.getAllByRole("textbox");
  console.log(textBoxes, "textBoxes");
  expect(textBoxes.length).toBe(2);
});

// grouping
describe("contact us test cases", () => {
  test("test should load submit text", () => {
    // render will get us the component
    render(<ContactUs />);

    // screen will have access from the render component
    // getByRole gives by element
    // like there are more methods getBtText like that
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("test should load two inputs", () => {
    render(<ContactUs />);
    // if multiple item getAllByRole
    const textBoxes = screen.getAllByRole("textbox");
    console.log(textBoxes, "textBoxes");
    expect(textBoxes.length).toBe(2);
  });
});

//using it

it("Should load two inputs", () => {
  render(<ContactUs />);
  // if multiple item getAllByRole
  const textBoxes = screen.getAllByRole("textbox");
  console.log(textBoxes, "textBoxes");
  expect(textBoxes.length).toBe(2);
});
