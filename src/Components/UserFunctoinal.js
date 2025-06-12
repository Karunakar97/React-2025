import { useState } from "react";

const UserFunctional = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div>
      <h2>{name}</h2>
      <h1>{count}</h1>
      <h2>location</h2>
      <h2>contact</h2>
    </div>
  );
};

export default UserFunctional;
