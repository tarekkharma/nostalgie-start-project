import { useSelector } from "react-redux";
import "../assets/partiels/items.scss";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import { getCategories } from "../stores/store";
import { useEffect, useMemo, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Items() {
  const [filterStatus, setFilterStatus] = useState("closed");

  const categories = useSelector(getCategories());

  const [mainCategory, setMainCategory] = useState(() => {
    return localStorage.getItem("mainCategory");
  });

  useEffect(() => {
    // Store mainCategory in localStorage whenever it changes
    if (mainCategory) {
      localStorage.setItem("mainCategory", mainCategory);
    } else {
      localStorage.removeItem("mainCategory");
    }
  }, [mainCategory]);

  const handleFilterClick = () => {
    setFilterStatus("closed");
    window.scrollTo(0, 0);
  };

  const listedSubCategories = useMemo(() => {
    if (mainCategory !== null) {
      const mainCategoryObject = categories.find(
        (category) => category.name == mainCategory
      );
      if (mainCategoryObject && mainCategoryObject.subCategories) {
        const subs = mainCategoryObject.subCategories.map((item, index) => {
          return (
            <li key={index} value={item} onClick={() => handleFilterClick()}>
              <NavLink to={item}>{item.toUpperCase()}</NavLink>
            </li>
          );
        });
        return <ul className="sub-category">{subs}</ul>;
      }
    }
    return null;
  }, [mainCategory]);

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
        <div className="filter-content">
          <h3>Filters</h3>
          <CloseIcon
            className="close-icon"
            onClick={() => {
              setFilterStatus("closed");
            }}
          />
          <ul className="categories">
            <li
              className="all-categories"
              onClick={() => {
                setMainCategory(null);
                handleFilterClick();
              }}
            >
              <Link to="">All Categories</Link>
            </li>
            {mainCategory == null ? (
              categories.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      setMainCategory(item.name);
                      handleFilterClick();
                    }}
                    key={index}
                    className="main-category"
                    value={item.name}
                  >
                    <Link to={item.name}>{item.name.toUpperCase()} </Link>
                  </li>
                );
              })
            ) : (
              <li>
                <NavLink
                  to={mainCategory}
                  className="main-category"
                  onClick={() => handleFilterClick()}
                >
                  {mainCategory.toUpperCase()}
                </NavLink>

                {listedSubCategories}
              </li>
            )}
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Items;
