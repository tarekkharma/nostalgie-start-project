import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/layouts/ProductsGrid";
import Logo from "../assets/img/logo.jpeg";
import { useSelector } from "react-redux";
import "../assets/partiels/saved-items.scss";

function SavedItems() {
  const savedItems = useSelector((state) => state.savedItems);

  return (
    <div className="wishlist">
      {savedItems.length === 0 ? (
        <p className="no-products-msg">No Saved Items Yet.</p>
      ) : (
        <ProductsGrid title="SAVED ITEMS">
          {savedItems.map((item) => {
            return (
              <ProductCard
                id={item}
                url="/items"
                image={Logo}
                title={"product " + item}
              />
            );
          })}
        </ProductsGrid>
      )}
    </div>
  );
}

export default SavedItems;
