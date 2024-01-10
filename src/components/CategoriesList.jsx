import "../assets/partiels/categories-list.scss";
import Link from "../components/Link";
import Logo from "../assets/img/logo.jpeg";

function CategoriesList(props) {
  return (
    <div className="categories-list">
      <div className="categpries-list-header">
        <h2>ANTIQUE CATEGORIES</h2>
      </div>
      <div className="home-categories">
        <div className="row">
          <Link url="/items" styleLink={props.type} text="VASES" image={Logo} />
          <Link
            url="/items"
            styleLink={props.type}
            text="CASKETS & BOXES"
            image={Logo}
          />
          <Link
            url="/items"
            styleLink={props.type}
            text="PERFUME BOTTLES"
            image={Logo}
          />
          <Link
            url="/items"
            styleLink={props.type}
            text="PLATES & DINNERWARE"
            image={Logo}
          />
        </div>
        <div className="row">
          <Link
            url="/items"
            styleLink={props.type}
            text="DRINKWARE"
            image={Logo}
          />
          <Link
            url="/items"
            styleLink={props.type}
            text="CENTERPIECES"
            image={Logo}
          />
          <Link url="/items" styleLink={props.type} text="BOWLS" image={Logo} />
          <Link
            url="/items"
            styleLink={props.type}
            text="HOOKAH BASES"
            image={Logo}
          />
        </div>
      </div>
    </div>
  );
}

export default CategoriesList;
