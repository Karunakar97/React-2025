import { Link } from "react-router-dom";
import Grocery from "./Grocery";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const { cartState } = useSelector((state) => state.cart);
  const [login, setLogin] = useState("Login");
  console.log(cartState, "cartState");

  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between", // To align logo left and nav right
        alignItems: "center", // Center vertically
        padding: "0 20px", // Optional: for some padding on the sides
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "#f0f0f0",
      }}
    >
      <div className="logo-container">
        <img
          src="https://img.freepik.com/free-icon/burger_318-532444.jpg"
          alt="logo"
          className="logo"
          style={{
            height: "50px", // Optional: control the logo size
          }}
        />
      </div>
      <div
        className="nav-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end", // Align the list to the right
          columnGap: 10,
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "row", // Make list items appear vertically
            alignItems: "flex-end", // Align list items to the right
            columnGap: 20,
          }}
        >
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart {cartState?.length}</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
        </ul>
        <button
          name="login"
          onClick={() => setLogin(login === "Login" ? "Logout" : "Login")}
        >
          {login}
        </button>
      </div>
    </div>
  );
};

export default Header;
