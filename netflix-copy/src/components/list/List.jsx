import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowCircleLeftIcon />
        <div className="container"></div>
        <ArrowCircleRightIcon />
      </div>
    </div>
  );
};

export default List;
