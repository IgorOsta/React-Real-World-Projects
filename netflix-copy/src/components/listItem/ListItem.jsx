import "./listItem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 235 - 50 + index * 2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2016/02/Pandemic-630-thumb-630xauto-59566.jpg"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon />
          <ThumbDownAltIcon />
          <ThumbUpAltIcon />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="pg">+16</span>
          <span>1999</span>
        </div>
        <div className="genre">Action</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </div>
      </div>
    </div>
  );
};

export default ListItem;
