import { Link } from "react-router-dom";
import Grocery from "./Grocery";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
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
          flexDirection: "column", // Make the list a column
          alignItems: "flex-end", // Align the list to the right
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
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
