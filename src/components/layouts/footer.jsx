import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Logo from "../../assets/img/footer-logo.png";
import "../../assets/partiels/footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer container">
        <div className="footer-info">
          <h3>HELP & INFO</h3>
          <ul>
            <li>Contact</li>
            <li>Our Services</li>
            <li>Shipping and Delivery</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <ul>
            <li>
              <LocalPhoneOutlinedIcon /> <p>T. +49(0) 1 57 5939 7112</p>
            </li>
            <li>
              {" "}
              <EmailOutlinedIcon /> <p>E. sjnslg@lnkadf.com</p>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>
      </div>
      <div className="footer-end">
        © 2023 Nostaglia Gallery Limited. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
