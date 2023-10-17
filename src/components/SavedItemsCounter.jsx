import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";

function SavedItemsCounter() {
  const savedItemsNum = useSelector((state) => state.savedItems.length);

  return (
    <div className="counter">
      <FavoriteIcon />
      <p>{savedItemsNum}</p>
    </div>
  );
}

export default SavedItemsCounter;
