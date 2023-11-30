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
import image1 from "../assets/img/DSC_0552.png";
import image2 from "../assets/img/DSC_0397.png";
import image3 from "../assets/img/DSC_0824.png";
import "../assets/partiels/home.scss";
import { useState, useEffect } from "react";

function Home() {
  const latestProducts = useSelector(getLatestProducts(3));
  const featuredProducts = useSelector(getFeaturedProducts(2));
  const featuredBlogs = useSelector(getFeaturedBlogs());

  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const Margin = () => {
    return 28 + mousePosition.x / 100 + "%";
  };

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
      <div className="about-us">
        <h2 className="about-us-title">ABOUT US</h2>
        <p className="about-us-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <div className="about-us-images">
          <div className="image-container">
            <img
              className="first-image"
              src={image1}
              alt=""
              height="270px"
              style={{ left: Margin() }}
            />
            <img className="second-image" src={image2} alt="" height="330px" />
            <img
              className="third-image"
              src={image3}
              alt=""
              height="270px"
              style={{ right: Margin() }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
