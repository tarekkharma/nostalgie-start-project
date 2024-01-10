import { NavLink } from "react-router-dom";
import "../../assets/partiels/products-grid.scss";

function ProductsGrid(props) {
  return (
    <section className={`products-grid ${props.className}`}>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="content">{props.children}</div>
      <div className="blog-footer">
        <NavLink to="blogs">{props.footer}</NavLink>
      </div>
    </section>
  );
}

export default ProductsGrid;
