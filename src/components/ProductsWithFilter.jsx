import { useEffect, useMemo, useState } from "react";
import ProductsGrid from "./layouts/ProductsGrid";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getCategories } from "../stores/store";
import "../assets/partiels/productsWithFilter.scss";

const ProductsWithFilter = () => {
  const { categoryFilter } = useParams();
  const products = useSelector((state) => state.products);
  const categories = useSelector(getCategories());

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProductsList = useMemo(() => {
    if (categoryFilter) {
      const mainCategoryObject = categories.find(
        (category) => category.name === categoryFilter
      );

      if (mainCategoryObject) {
        if (mainCategoryObject.subCategories) {
          return mainCategoryObject.subCategories.flatMap((subCategory) =>
            products.filter((item) => item.categories.includes(subCategory))
          );
        } else {
          return products.filter((product) =>
            product.categories.includes(categoryFilter)
          );
        }
      } else {
        return products.filter((product) =>
          product.categories.includes(categoryFilter)
        );
      }
    } else {
      return products;
    }
  }, [categoryFilter, categories, products]);

  const totalPages = Math.ceil(filteredProductsList.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProductsList]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredProductsList.slice(startIndex, endIndex);

    return currentItems.map(({ id, imageUrl }) => (
      <ProductCard
        key={id}
        id={id}
        url="/item"
        image={imageUrl}
        title={`product ${id}`}
      />
    ));
  }, [currentPage, itemsPerPage, filteredProductsList]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => handlePageClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="page-content">
      {filteredProductsList.length > 0 ? (
        <>
          <ProductsGrid title={categoryFilter ? categoryFilter : "All ITEMS"}>
            {paginatedProducts}
          </ProductsGrid>
          <div className="pagination-controls">
            <ul>
              <li
                onClick={() => handlePageClick(currentPage - 1)}
                className={currentPage === 1 ? "disabled" : ""}
              >
                Prev
              </li>
              {renderPageNumbers()}
              <li
                onClick={() => handlePageClick(currentPage + 1)}
                className={currentPage === totalPages ? "disabled" : ""}
              >
                Next
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="no-items-msg">
          <p>No items found for the selected category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsWithFilter;
