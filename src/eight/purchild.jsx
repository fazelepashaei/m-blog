import React, { PureComponent } from "react";
class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "HI",
    };
  }

  render() {
    console.log("child render");
    return (
      <div>
        <h1>welcome{this.props.textchild}</h1>
      </div>
    );
  }
}
export default Child;
