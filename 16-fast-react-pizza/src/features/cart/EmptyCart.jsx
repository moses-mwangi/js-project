import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className=" ml-7 mt-4">
      <Link to="/menu" className=" text-sm text-blue-600">
        &larr; Back to menu
      </Link>

      <p className="mt-7 text-xl font-semibold text-stone-700">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
