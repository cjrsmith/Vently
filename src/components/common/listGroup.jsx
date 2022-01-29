import React from "react";
import propTypes from "prop-types";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

ListGroup.propTypes = {
  items: propTypes.array.isRequired,
  textProperty: propTypes.string.isRequired,
  valueProperty: propTypes.string.isRequired,
  onItemSelect: propTypes.func.isRequired,
  selectedItem: propTypes.object,
};

export default ListGroup;
