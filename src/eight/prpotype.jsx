import React, { Component } from "react";
import PropTypes from "prop-types";
class Prpotype extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { numberme } = this.props;
    return <div>{this.props.numberme + 2}</div>;
  }
}
Prpotype.propTypes = { number: PropTypes.number };
//  number moshakhas konanade type prpos k age eshtebah bashe dar console khata mide
export default Prpotype;
