import UserClass from "./UserClass";
import UserFunctional from "./UserFunctoinal";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <UserFunctional name={"Functional Name"} />
      <UserClass name={"Class Name"} />
    </>
  );
};

export default About;
