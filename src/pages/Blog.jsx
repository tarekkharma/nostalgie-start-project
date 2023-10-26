import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogs } from "../stores/store";
import "../assets/partiels/blog.scss";

function Blog() {
  const { blogId } = useParams();

  const blog = useSelector(getBlogs()).find((element) => element.id == blogId);

  console.log(typeof blogId);
  console.log(typeof blog.id);

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>{blog.title}</h1>
        <img src={blog.cardImage} height="350px" />
      </div>
      <div className="blog-body">
        <p>{blog.introduction}</p>
        {blog.sections.map((section) => {
          return (
            <div className={section.name}>
              <img src={section.image} />
              <p>{section.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
