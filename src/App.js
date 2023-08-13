import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleRestart() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onChange={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service ?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onRestart={handleRestart} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onChange }) {
  console.log(bill);
  return (
    <div>
      <span>How much was the bill</span>
      <input
        type="number"
        value={Number(bill)}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      {children}
      <select
        value={Number(percentage)}
        onChange={(e) => onSelect(+e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <p>
        {" "}
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </p>
    </div>
  );
}

function Reset({ onRestart }) {
  return <button onClick={onRestart}>Reset</button>;
}
