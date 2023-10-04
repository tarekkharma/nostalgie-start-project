import Logo from "../../assets/img/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import "../../assets/partiels/header.scss";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [headerStatus, setHeaderStatus] = useState("closed");

  const location = useLocation();

  useEffect(() => {
    setHeaderStatus("closed");
  }, [location]);

  function myFucntion() {
    alert("clicked");
  }

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
          <Link to="/">Home</Link>
          <Link to="/items">Products</Link>
        </div>
      </div>
      <form className="search-form">
        <button className="submit-button" type="submit">
          <img
            src={require("../../assets/img/search-icon.png")}
            alt="search-icon"
          />
        </button>
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
