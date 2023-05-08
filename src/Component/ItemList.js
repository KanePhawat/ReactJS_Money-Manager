import PropTypes from "prop-types";
import bin from "../delete.png";
import "./ItemList.css";

const ItemList = (props) => {
  const { category, amount, status, delItem, id } = props;

  return (
    <div className="list-item">
      <li className={status}>
        {category}
        <span>฿ {amount.toLocaleString()}</span>
        <img className="bin" src={bin} alt="logo" onClick={() => delItem(id)} />
      </li>
    </div>
  );
};

ItemList.propsTypes = {
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ItemList;
