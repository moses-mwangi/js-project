import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuntity } from "./cartSlice";

function CartOverview() {
  const quantity = useSelector(getTotalCartQuntity);
  const price = useSelector(getTotalCartPrice);
  if (!quantity) return null;

  return (
    <div className=" flex items-center justify-between bg-stone-700 p-4 text-sm uppercase text-stone-200 sm:px-6  md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{quantity} pizzas</span>
        <span>${price}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
