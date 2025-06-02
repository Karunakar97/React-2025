import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";

const heading = React.createElement("h1", {}, "Hello");
const jsxHeading = <h1>Hello JSX</h1>;

const MyComponent = () => {
  return <div>{jsxHeading}</div>;
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
