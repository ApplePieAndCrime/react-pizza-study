import React, { memo } from "react";
import PropTypes from "prop-types";

const Categories = memo(({ activeCategory, items, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              key={index}
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.defaultProps = {
  items: [],
  activeCategory: null,
  onClickCategory: () => {},
};

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.number,
  onClickCategory: PropTypes.func,
};

export default Categories;
