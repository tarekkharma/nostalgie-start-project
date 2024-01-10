import Logo from "../../assets/img/footer-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useLocation } from "react-router-dom";
import "../../assets/partiels/header.scss";
import { useState, useEffect } from "react";
import Link from "../Link";
import SavedItemsCounter from "../SavedItemsCounter";

function Header() {
  const [headerStatus, setHeaderStatus] = useState("closed");

  const location = useLocation();

  useEffect(() => {
    setHeaderStatus("closed");
  }, [location]);

  return (
    <header className="App-header">
      <div
        className={"overlay " + headerStatus}
        onClick={() => {
          setHeaderStatus("closed");
        }}
      ></div>
      <div className="container">
        <div className="header-elements ">
          <img src={Logo} alt="logo" />
          <div className="header-icons">
            <MenuIcon
              className="open-icon"
              onClick={() => {
                setHeaderStatus("open");
              }}
            />
          </div>
          <div className={"list " + headerStatus}>
            <div className="close-icon">
              <CloseIcon
                onClick={() => {
                  setHeaderStatus("closed");
                }}
              />
            </div>
            <Link url="/" styleLink="text" text="Home" />
            <Link url="/items" styleLink="text" text="Products" />
            <Link url="/blogs" styleLink="text" text="Blogs" />
          </div>
        </div>
        <form className="search-form">
          <SearchIcon />
          <input
            className="search-box"
            type="text"
            placeholder="Search"
            name="search"
          />
        </form>
        <NavLink to="/saved-items">
          <SavedItemsCounter />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
