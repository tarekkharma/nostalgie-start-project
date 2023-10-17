import { NavLink } from "react-router-dom";
import ImageBox from "./ImageBox";

function Link(props) {
  return (
    <NavLink to={props.url}>
      {props.styleLink === "image" ? (
        <ImageBox imageUrl={props.image} text={props.text} />
      ) : (
        props.text
      )}
    </NavLink>
  );
}

export default Link;
