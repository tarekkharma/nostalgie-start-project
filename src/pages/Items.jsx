import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/layouts/ProductsGrid";
import { useSelector } from "react-redux";
import "../assets/partiels/items.scss";
import { getCategories, getSubCategories } from "../stores/store";
import { useEffect, useMemo, useState } from "react";

function Items() {
  const [checked, setChecked] = useState(false);
  const products = useSelector((state) => state.products);
  const categories = useSelector(getCategories());
  const [subCategories, setSubCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(0);

  const handleChange = (event) => {
    setSubCategories(
      categories.find((item) => item.id == event.target.value).subCategories
    );
  };

  const listedSubCategories = useMemo(() => {
    return subCategories.map((item, index) => {
      return (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              value={item}
            />
            {item}
          </label>
        </li>
      );
    });
  }, [subCategories]);
  return (
    <div className="items">
      <div className="filters">
        <div className="content">
          <h3>Filters</h3>
          <ul className="categories">
            {categories.map((item, index) => {
              return (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={handleChange}
                      value={item.id}
                    />
                    {item.name}
                  </label>
                </li>
              );
            })}
          </ul>
          <ul className="sub-categories">{listedSubCategories}</ul>
        </div>
      </div>
      <ProductsGrid title="ALL ITEMS">
        {products.map((item, index) => {
          return (
            <ProductCard
              key={index}
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
