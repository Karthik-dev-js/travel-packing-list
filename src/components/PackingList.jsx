import React from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            onToggleItems={onToggleItems}
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
