import ProductCard from "../components/ProductCard";
import ProductsGrid from "../components/layouts/ProductsGrid";
import { useSelector } from "react-redux";
import "../assets/partiels/items.scss";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import { getCategories, getSubCategories } from "../stores/store";
import { useMemo, useState } from "react";

function Items() {
  const [filterStatus, setFilterStatus] = useState("closed");

  const products = useSelector((state) => state.products);
  const categories = useSelector(getCategories());
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    setSelectedCategories((prev) => {
      if (selectedCategories.includes(e.target.value)) {
        const categoryObject = categories.find(
          (category) => category.name == e.target.value
        );
        if (categoryObject !== null && categoryObject !== undefined) {
          if (
            categoryObject.subCategories !== null &&
            categoryObject.subCategories !== undefined
          ) {
            categoryObject.subCategories.map((item) => {
              if (selectedCategories.includes(item)) {
                const index = prev.indexOf(item);
                prev.splice(index, 1);
              }
            });
          }
        } else {
          const fatherCategory = categories.find((category) => {
            if (
              category.subCategories !== null &&
              category.subCategories !== undefined
            ) {
              return category.subCategories.includes(e.target.value);
            }
          });

          const checkedSubCategries = fatherCategory.subCategories.filter(
            (sub) => {
              return selectedCategories.includes(sub);
            }
          );

          if (checkedSubCategries.length <= 1) {
            return prev.filter(
              (item) => item !== fatherCategory.name && item !== e.target.value
            );
          }
        }
        return prev.filter((item) => item !== e.target.value);
      } else {
        const categoryObject = categories.find(
          (category) => category.name == e.target.value
        );
        if (categoryObject !== null && categoryObject !== undefined) {
          if (
            categoryObject.subCategories !== null &&
            categoryObject.subCategories !== undefined
          ) {
            categoryObject.subCategories.map((item) => {
              if (!selectedCategories.includes(item)) {
                selectedCategories.push(item);
              }
            });
          }
        }
        return [...prev, e.target.value];
      }
    });
    setCurrentPage(1);
    setFilterStatus("closed");
    window.scrollTo(0, 0);
  };

  const listedSubCategories = useMemo(() => {
    if (selectedCategories !== null) {
      return selectedCategories.map((item) => {
        const foundCategeoryObject = categories.find(
          (category) => category.name == item
        );
        if (foundCategeoryObject !== undefined) {
          if (foundCategeoryObject.subCategories !== null) {
            const ruru = foundCategeoryObject.subCategories.map(
              (item, index) => {
                return (
                  <li key={index}>
                    <label>
                      <input
                        type="checkbox"
                        checked={
                          selectedCategories.includes(item) ? true : false
                        }
                        onChange={handleChange}
                        value={item}
                      />
                      {item.toUpperCase()}
                    </label>
                  </li>
                );
              }
            );
            return <ul className="sub-categories">{ruru}</ul>;
          } else {
            console.log(foundCategeoryObject);
          }
        }
      });
    }
  }, [selectedCategories]);

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length == 0) {
      const allItems = products.map((item, index) => {
        return (
          <ProductCard
            key={index}
            id={item.id}
            url="/item"
            image={item.imageUrl}
            title={"product " + item.id}
          />
        );
      });
      return allItems;
    } else {
      const filteredObjects = selectedCategories.flatMap((category) => {
        return products.filter((item) => item.categories.includes(category));
      });

      const uniqueObjects = Array.from(
        filteredObjects
          .reduce((map, obj) => map.set(obj.id, obj), new Map())
          .values()
      ).map((item, index) => {
        return (
          <ProductCard
            key={index}
            id={item.id}
            url="/item"
            image={item.imageUrl}
            title={"product " + item.id}
          />
        );
      });

      return uniqueObjects;
    }
  }, [selectedCategories]);

  const itemsPerPage = 18;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const items = filteredProducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredProducts.length / itemsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const updatedPagination = useMemo(() => {
    if (currentPage === 1) {
      return numbers.slice(currentPage - 1, currentPage + 3);
    } else if (currentPage === npage) {
      return numbers.slice(currentPage - 3, currentPage);
    } else {
      return numbers.slice(currentPage - 2, currentPage + 2);
    }
  }, [currentPage]);

  function nextPage() {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  }

  function changePage(id) {
    setCurrentPage(id);
    window.scrollTo(0, 0);
  }

  return (
    <div className="items container">
      <div
        className={"overlay " + filterStatus}
        onClick={() => {
          setFilterStatus("closed");
        }}
      ></div>
      <div
        className="filter-button"
        onClick={() => {
          setFilterStatus("open");
        }}
      >
        <FilterListIcon className="filter-icon" />
        <span>Filter</span>
      </div>

      <div className={"filters " + filterStatus}>
        <div className="content">
          <h3>Filters</h3>
          <CloseIcon
            className="close-icon"
            onClick={() => {
              setFilterStatus("closed");
            }}
          />
          <ul className="categories">
            {categories.map((item, index) => {
              return (
                <li key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        selectedCategories.includes(item.name) ? true : false
                      }
                      onChange={handleChange}
                      value={item.name}
                    />
                    {item.name.toUpperCase()}
                  </label>
                </li>
              );
            })}
          </ul>
          {listedSubCategories}
        </div>
      </div>
      <div className="page-content">
        <ProductsGrid
          title={selectedCategories.length == 0 ? "ALL ITEMS" : "ITEMS"}
        >
          {items}
        </ProductsGrid>
        <nav>
          <ul className="pagination">
            {currentPage !== 1 && (
              <li className="page-item" onClick={prevPage}>
                Prev
              </li>
            )}

            {updatedPagination.map((n, i) => {
              return (
                <li
                  className={`page-item ${currentPage === n && "active"}`}
                  key={i}
                  onClick={() => changePage(n)}
                >
                  {n}
                </li>
              );
            })}
            {currentPage !== npage && items.length !== 0 && (
              <li className="page-item" onClick={nextPage}>
                Next
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Items;
