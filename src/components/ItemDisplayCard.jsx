import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/partiels/item-display-card.scss";
import { saveItem, unsaveItem } from "../stores/store";
import { useSelector, useDispatch } from "react-redux";

function ItemDisplayCard(props) {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.savedItems);

  function handleClick() {
    if (savedItems.includes(props.id)) {
      dispatch(unsaveItem(props.id));
    } else {
      dispatch(saveItem(props.id));
    }
  }

  return (
    <div className="card-container">
      <h2 className="item-title">{props.title}</h2>
      <p className="sub-title">{props.subtitle}</p>
      <button className="demand-price" onClick={() => props.showPopUp(true)}>
        DEMAND PRICE
      </button>
      <button
        className="save-item"
        onClick={() => {
          handleClick();
        }}
      >
        {savedItems.includes(props.id) ? "UNSAVE ITEM" : "SAVE ITEM"}
      </button>
      <p className="questions">QUESTIONS ABOUT THIS ITEM?</p>
      <div className="question-or-contact">
        <button className="ask-question" onClick={() => props.showPopUp(true)}>
          ASK A QUESTION
        </button>
        <div className="contact">
          <ul>
            <li>
              <CallIcon /> <span> +4915759397112</span>
            </li>
            <li>
              <EmailIcon /> <span> jnsagljnslgs@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemDisplayCard;
