import AboutImage from "../assets/img/about.jpg";
import "../assets/partiels/about.scss";

const About = () => {
  return (
    <div className="about-page container">
      <div className="about-heading">
        <div className="heading-image">
          <img src={AboutImage} alt="" />
          <div className="about-image-overlay"></div>
        </div>
        <div className="heading-text">
          <h1>ABOUT NOSTALGIA GALLERY</h1>
          <h2>THE PLACE OF LUXURY ANTIQUES AND MASTERPIECES</h2>
        </div>
        <div className="heading-subtext">
          <p>
            SPECIALIZING IN RARE ANTIQUE TREASURES INCLUDING 19th-CENTURY
            BOHEMIAN AND OPALINE GLASS. DISCOVER THE ELEGANCE OF HISTORY.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
