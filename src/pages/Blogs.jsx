import { getBlogs } from "../stores/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ProductsGrid from "../components/layouts/ProductsGrid";
import BlogCard from "../components/BlogCard";
import "../assets/partiels/blogs.scss";

function Blogs() {
  const blogs = useSelector(getBlogs());
  return (
    <div className="container">
      <ProductsGrid title="BLOGS" className="blogs-page-grid">
        {blogs.map((item) => {
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

export default Blogs;
