export default function Start({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items to your packing list</em>
      </p>
    );

  const item = items.filter((item) => item.packed).length;
  const numItem = items.length;
  const percent = Math.round((item / numItem) * 100);
  return (
    <footer className="stats">
      {percent !== 100
        ? `you have ${numItem} item in your list,and you already packed ${item}(${percent}
      %)`
        : "You got everything ready to go"}
    </footer>
  );
}
