import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import "../assets/partiels/item.scss";
import ItemSilder from "../components/ItemSlider";
import ItemDisplayCard from "../components/ItemDisplayCard";
import ProductCard from "../components/ProductCard";
import ContactForm from "../components/ContactForm";
import ProductsGrid from "../components/layouts/ProductsGrid";
import { getFeaturedProducts } from "../stores/store";
import { useEffect, useState } from "react";

function Item() {
  const { itemId } = useParams();

  const [popUp, setPopUp] = useState(false);

  const product = useSelector((state) => state.products).find(
    (element) => element.id == itemId
  );

  const featuredProducts = useSelector(getFeaturedProducts(4));

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 120);
  }, [location]);

  return (
    <div className="item">
      <div className="item-display">
        <div className="images">
          <ItemSilder images={product.subImages} />
        </div>
        <div className="info">
          <ItemDisplayCard
            id={product.id}
            title={product.title}
            subtitle={product.subtitle}
            showPopUp={setPopUp}
          />
        </div>
      </div>
      <div className="details">
        <div className="description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="dimentions">
          <h3>Dimensions</h3>

          {product.dimensions.length == 2 ? (
            <ul>
              <li>
                <h4>Height</h4>
                <p>{product.dimensions[0]}</p>
              </li>
              <li>
                <h4>Diameter</h4>
                <p>{product.dimensions[1]}</p>
              </li>
            </ul>
          ) : (
            <ul>
              {" "}
              <li>
                <h4>Height</h4>
                <p>{product.dimensions[0]}</p>
              </li>
              <li>
                <h4>Width</h4>
                <p>{product.dimensions[1]}</p>
              </li>
              <li>
                <h4>Depth</h4>
                <p>{product.dimensions[2]}</p>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="shipping">
        <h3>FREE INTERNATIONAL SHIPPING</h3>
        <p>
          This item qualifies for free international shipping, inclusive of
          professional packing.
        </p>
      </div>
      <ProductsGrid title="OTHER PRODUCTS">
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

      <ContactForm trigger={popUp} showPopUp={setPopUp}>
        <h2>how are you</h2>
      </ContactForm>
    </div>
  );
}

export default Item;
