import "../assets/partiels/link-image.scss";

function ImageBox(props) {
  return (
    <div className="imageBox">
      <img src={props.imageUrl} alt="category logo" />
      <div className="imageBoxOverlay"></div>
      <h2>{props.text}</h2>
    </div>
  );
}

export default ImageBox;
