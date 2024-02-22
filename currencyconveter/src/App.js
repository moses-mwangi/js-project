import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [rates, setRates] = useState(1);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function fetcher() {
      try {
        setLoad(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        if (!res.ok) throw new Error("wrong url request");
        const data = await res.json();
        console.log(res);
        setRates(data.rates[to]);
        setLoad(false);
      } catch (err) {
        console.log(err.message);
        setErr(err.message);
      } finally {
      }
    }

    if (from === to) setRates(1);
    fetcher();
  }, [from, to, amount]);

  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={load}
      ></input>
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={load}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {err && <p> {err} </p>}
      {load && !err && <p>loading</p>}
      {!load && !err && (
        <p>
          {rates} {to}
        </p>
      )}
    </div>
  );
}

export default App;
