import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../assets/partiels/product-card.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveItem, unsaveItem } from "../stores/store";

function ProductCard(props) {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.savedItems);

  return (
    <NavLink to={"/items/" + props.id} className="product-card">
      <div className="header">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="body">
        <h3>{props.title}</h3>
      </div>
      <div className="footer">
        {savedItems.find((id) => id === props.id) === props.id ? (
          <FavoriteIcon
            onClick={(e) => {
              e.preventDefault();
              dispatch(unsaveItem(props.id));
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={(e) => {
              e.preventDefault();
              dispatch(saveItem(props.id));
            }}
          />
        )}
      </div>
    </NavLink>
  );
}

export default ProductCard;
