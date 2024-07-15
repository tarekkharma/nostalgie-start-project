import "../assets/partiels/section-title.scss";

const SectionTitle = (props) => {
  return (
    <div className="section-title">
      <span className="h-line"></span>
      <h2>{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
