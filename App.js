import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/Components/About";
import ContactUs from "./src/Components/ContactUs";
import ErrorElement from "./src/Components/ErrorElement";
import Cart from "./src/Components/Cart";
import RestaurantMenu from "./src/Components/RestaurantMenu";

const heading = React.createElement("h1", {}, "Hello");
const jsxHeading = <h1>Hello JSX</h1>;

const MyComponent = () => {
  return <div>{jsxHeading}</div>;
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
