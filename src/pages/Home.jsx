import Link from "../components/Link";
import Logo from "../assets/img/logo.jpeg";
import "../assets/partiels/categories-list.scss";
import CategoriesList from "../components/CategoriesList";

function Home() {
  return (
    <div>
      <div className="section-title">
        <h2>Antique Categories</h2>
      </div>
      <CategoriesList type="image" />
    </div>
  );
}

export default Home;
