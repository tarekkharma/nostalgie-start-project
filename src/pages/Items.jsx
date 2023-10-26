import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/layouts/ProductsGrid";
import { useSelector } from "react-redux";

function Items() {
  const products = useSelector((state) => state.products);

  return (
    <div className="items">
      <ProductsGrid title="ALL ITEMS">
        {products.map((item) => {
          return (
            <ProductCard
              id={item.id}
              url="/item"
              image={item.imageUrl}
              title={"product " + item.id}
            />
          );
        })}
      </ProductsGrid>
    </div>
  );
}

export default Items;
