import "../assets/partiels/categories-list.scss";
import CategoriesList from "../components/CategoriesList";
import Slider from '../components/Slider';

function Home() {
  return (
    <div>
      <Slider />
      <div className="section-title">
        <h2>Antique Categories</h2>
      </div>
      <CategoriesList type="image" />
    </div>
  );
}

export default Home;
