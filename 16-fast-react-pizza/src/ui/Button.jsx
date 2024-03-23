import { Link } from "react-router-dom";

function Button({ children, disable, to, type, onclick }) {
  const base =
    " rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300  focus:ring-offset-2";

  const style = {
    primary: base + " px-4 py-3  md:px-6 md:py-4",
    small: base + "py-3 px-3 md:px-5 md:py-2.5 text-[12px]",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  if (onclick)
    return (
      <button disabled={disable} className={style[type]} onClick={onclick}>
        {children}
      </button>
    );

  return (
    <button disabled={disable} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
