import "../assets/partiels/categories-list.scss";
import CategoriesList from "../components/CategoriesList";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import ProductsGrid from "../components/layouts/ProductsGrid";
import { useSelector } from "react-redux";
import { getLatestProducts, getFeaturedProducts } from "../stores/savedItems";

function Home() {
  const latestProducts = useSelector(getLatestProducts(3));
  const featuredProducts = useSelector(getFeaturedProducts(2));

  return (
    <div>
      <Slider />
      <div className="section-title">
        <h2>Antique Categories</h2>
      </div>
      <CategoriesList type="image" />

      <ProductsGrid title="LATEST ITEMS">
        {latestProducts.map((item) => {
          return (
            <ProductCard
              id={item.id}
              image={item.imageUrl}
              title={item.title}
            />
          );
        })}
      </ProductsGrid>

      <ProductsGrid title="FEATURED ITEMS">
        {featuredProducts.map((item) => {
          return (
            <ProductCard
              id={item.id}
              image={item.imageUrl}
              title={item.title}
            />
          );
        })}
      </ProductsGrid>
    </div>
  );
}

export default Home;
