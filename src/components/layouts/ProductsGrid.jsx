import { NavLink } from "react-router-dom";
import "../../assets/partiels/products-grid.scss";
import SectionTitle from "../SectionTitle";

function ProductsGrid(props) {
  return (
    <section className={`products-grid ${props.className}`}>
      <div className="title">
        <SectionTitle title={props.title} />
      </div>
      <div className="content">{props.children}</div>
      <div className="grid-footer">
        <NavLink to={"/" + props.url}>{props.footer}</NavLink>
      </div>
    </section>
  );
}

export default ProductsGrid;
