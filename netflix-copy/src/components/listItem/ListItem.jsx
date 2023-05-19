import "./listItem.scss";

const ListItem = ({ num = 0 }) => {
  return <div className="listItem">Number of Item{num}</div>;
};

export default ListItem;
