import "../assets/partiels/categories-list.scss";
import CategoriesList from "../components/CategoriesList";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import ProductsGrid from "../components/layouts/ProductsGrid";
import { useSelector } from "react-redux";
import {
  getLatestProducts,
  getFeaturedProducts,
  getFeaturedBlogs,
} from "../stores/store";
import BlogCard from "../components/BlogCard";
import { NavLink } from "react-router-dom";

function Home() {
  const latestProducts = useSelector(getLatestProducts(3));
  const featuredProducts = useSelector(getFeaturedProducts(2));
  const featuredBlogs = useSelector(getFeaturedBlogs());

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

      <ProductsGrid title="BLOGS" footer="Browse All Blogs">
        {featuredBlogs.map((item) => {
          return (
            <BlogCard
              id={item.id}
              image={item.cardImage}
              title={item.title}
              description={item.sections[0].text}
            />
          );
        })}
      </ProductsGrid>
    </div>
  );
}

export default Home;
