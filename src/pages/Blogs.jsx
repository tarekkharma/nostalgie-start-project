import { getBlogs } from "../stores/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ProductsGrid from "../components/layouts/ProductsGrid";
import BlogCard from "../components/BlogCard";

function Blogs() {
  const blogs = useSelector(getBlogs());
  return (
    <div>
      <ProductsGrid title="BLOGS">
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
