import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "./../../Utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const button = screen.getByRole("button");

  const button = screen.getByRole("button", { name: "Login" }); // button is a element name, name is the class name
  expect(button).toBeInTheDocument();
});

it("cart should be 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByText("Cart 0");
  expect(button).toBeInTheDocument();
});

//we can give regex when we don't need to match exact text
it("cart should be 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByText(/Cart/);
  expect(button).toBeInTheDocument();
});

//click event
it("Should login button change to logout when clicked", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton); //this will fire the event
  const logoutBUtton = screen.getByRole("button", { name: "Logout" });
  expect(logoutBUtton).toBeInTheDocument();
});
