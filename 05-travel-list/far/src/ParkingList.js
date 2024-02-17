import { useState } from "react";
import Item from "./Items";

export default function PackingList({
  items,
  handleDelete,
  handleChecked,
  setItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "descriptio")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  function handleClear() {
    const confirmed = window.confirm("Are sure u want to delete all items");
    if (confirmed) setItems([]);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="descriptio">Sort by description</option>
          <option value="packed">Sort by packed order</option>
        </select>
        <button onClick={() => handleClear()}>Clear List</button>
      </div>
    </div>
  );
}
