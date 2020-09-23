import React, { useState, memo } from "react";

const Categories = memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              key={index}
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
