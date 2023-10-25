import { NavLink } from "react-router-dom";
import "../assets/partiels/blog-card.scss";

function BlogCard(props) {
  return (
    <NavLink to={"/blogs/" + props.id} className="blog-card">
      <div className="header">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="body">
        <h3>{props.title}</h3>
        <p className="summary">{props.description.slice(0, 25) + "..."}</p>
      </div>
      <div className="footer">
        <NavLink to={"/blogs/" + props.id}>Read more</NavLink>
      </div>
    </NavLink>
  );
}

export default BlogCard;
