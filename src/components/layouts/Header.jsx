import Logo from "../../assets/img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import "../../assets/partiels/header.scss";
import { useState, useEffect } from "react";
import Link from "../Link";

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
      <div className="header-elements">
        <img src={Logo} alt="logo" height="75" />
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
          <Link url="/" style="text" text="Home" />
          <Link url="/items" style="text" text="Products" />
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
    </header>
  );
}

export default Header;
