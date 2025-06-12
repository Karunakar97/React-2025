import React from "react";

class UserChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    console.log(`constructor ${this.props.name}`);
  }

  componentDidMount() {
    console.log(`componentDidMount ${this.props.name}`);
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate ${this.props.name}`);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount ${this.props.name}`);
  }

  render() {
    console.log(`render ${this.props.name}`);
    const { name } = this.props;
    return (
      <div>
        <h2>{name}</h2>
      </div>
    );
  }
}

export default UserChild;
