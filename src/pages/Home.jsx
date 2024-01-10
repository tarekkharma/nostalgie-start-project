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
import aboutUsImage from "../assets/img/about.jpg";
import "../assets/partiels/home.scss";
import { Link } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";

function Home() {
  const latestProducts = useSelector(getLatestProducts(5));
  const featuredProducts = useSelector(getFeaturedProducts(5));
  const featuredBlogs = useSelector(getFeaturedBlogs());

  return (
    <div className="home-page container">
      <HomeSlider />
      <CategoriesList type="image" />

      <div className="about-us">
        <h2 className="about-us-title">ABOUT NOSTALGIA GALLERY</h2>
        <div className="about-us-container">
          <div className="about-us-image">
            <img src={aboutUsImage} alt="" />
          </div>
          <div className="about-us-text">
            <p className="text-first-part">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p className="text-second-part">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <Link to="">DISCOVER MORE</Link>
          </div>
        </div>
      </div>

      <ProductsGrid
        title="NEW LISTINS"
        className="home-products-grid"
        footer="VIEW ALL NEW LISTINGS"
      >
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
      <ProductsGrid
        title="BLOGS"
        footer="BROWSE ALL BLOGS"
        className="home-blogs"
      >
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

      <ProductsGrid
        title="FEATURED ITEMS"
        className="home-products-grid"
        footer="VIEW ALL ITEMS"
      >
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
