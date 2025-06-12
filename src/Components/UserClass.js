import React from "react";
import UserChild from "./UserChild";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount(prevProps, prevState) {
    // if (this.state.count !== this.prevState.count) {
    //   //happen something
    // }
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }

  render() {
    console.log("render");
    const { name } = this.props;
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h1>{this.state.count}</h1>
        <UserChild name={"child1"} />
        {console.log("after child compo")}
        <h2>location</h2>
        <h2>contact</h2>
        <button
          onClick={() => {
            this.setState((prev) => ({ ...prev, count: prev.count + 1 }));
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default UserClass;
