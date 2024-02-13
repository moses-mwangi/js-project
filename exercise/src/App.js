// import logo from "./logo.svg";
import { useState } from "react";

function Exer() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const dat = new Date("june 21 2024").toDateString();

  // dat.setDate(dat.getDate() + 1);
  // console.log(dat);

  function addStep() {
    setStep((s) => s + 1);
  }

  function removeStep() {
    setStep((s) => s - 1);
  }

  function fowardDays() {
    setCount((c) => c + step);
  }
  function prevDays() {
    setCount((c) => c - step);
  }
  function handleCl() {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="conta">
      <div className="row">
        <p> step:{step}</p>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
      </div>
      <div className="row">
        <span className="spa" onClick={prevDays}>
          -
        </span>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <span className="spa" onClick={fowardDays}>
          +
        </span>
      </div>
      <p>
        {count === 0
          ? "Today is  "
          : count > 0
          ? `${count} days from today will be on   `
          : `${Math.abs(count)} days ago from today was  `}{" "}
        {dat}
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleCl}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Exer;
