import { useEffect } from "react";

function Timer({ dispatch, secondRem }) {
  const min = String(Math.trunc(secondRem / 60)).padStart(2, 0);
  const sec = String(secondRem % 60).padStart(2, 0);
  const labelTimer = `${min}:${sec}`;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{labelTimer} </div>;
}

export default Timer;
