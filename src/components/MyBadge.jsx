// Create a component called MyBadge which
// receives a text and a color as props.
// This component should render a Badge react-bootstrap
// component with those properties.
import { Badge } from "react-bootstrap";

const MyBadge = ({ text, color, style }) => {
  return (
    <div style={style}>
      <Badge variant={color}>£ {text}</Badge>
    </div>
  );
};

export default MyBadge;
