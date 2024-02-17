import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./ParkingList";
import Start from "./Start";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 5, description: "Shoes", quantity: 4, packed: true },
  { id: 4, description: "short", quantity: 48, packed: false },
];

export function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(newItem) {
    setItems((item) => [...items, newItem]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleChecked(id) {
    const check = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(check);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        setItems={setItems}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
      />
      <Start items={items} />
    </div>
  );
}

export default App;
