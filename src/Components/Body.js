import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <h1>Body Component</h1>
      {["rest1", "rest2", "rest3"]?.map((each, idx) => (
        <Link key={idx} to={"/restaurant/" + idx}>
          <div>{each + idx}</div>
        </Link>
      ))}
    </div>
  );
};

export default Body;
