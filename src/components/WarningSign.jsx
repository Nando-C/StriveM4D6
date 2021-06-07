// Create a component called WarningSign
// which receives some text as a prop. This
// text should be presented inside an
// Alert of type danger.
import { Component } from "react";
import { Alert } from "react-bootstrap";

class WarningSign extends Component {
  state = {};
  render() {
    return (
      <div>
        <Alert variant="danger">{this.props.msg}</Alert>
      </div>
    );
  }
}

export default WarningSign;
