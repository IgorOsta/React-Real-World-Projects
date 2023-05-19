import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import { useRef, useState } from "react";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  function handleClick(direction) {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translate(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translate(${-230 + distance}px)`;
    }
  }
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowCircleLeftIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItem num={1} />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem num={12} />
        </div>
        <ArrowCircleRightIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
