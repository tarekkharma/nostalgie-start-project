import "../assets/partiels/categories-list.scss";
import Link from "../components/Link";
import Logo from "../assets/img/logo.jpeg";

function CategoriesList(props) {
  return (
    <div className="categoriesList">
      <Link url="/items" style={props.type} text="VASES" image={Logo} />
      <Link
        url="/items"
        style={props.type}
        text="CASKETS & BOXES"
        image={Logo}
      />
      <Link
        url="/items"
        style={props.type}
        text="PERFUME BOTTLES"
        image={Logo}
      />
      <Link
        url="/items"
        style={props.type}
        text="PLATES & DINNERWARE"
        image={Logo}
      />
      <Link url="/items" style={props.type} text="DRINKWARE" image={Logo} />
      <Link url="/items" style={props.type} text="CENTERPIECES" image={Logo} />
      <Link url="/items" style={props.type} text="BOWLS" image={Logo} />
      <Link url="/items" style={props.type} text="HOOKAH BASES" image={Logo} />
    </div>
  );
}

export default CategoriesList;
