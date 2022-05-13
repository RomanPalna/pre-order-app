import { useState } from "react";
import { toast } from "react-toastify";
import "./markup.css";

export default function Markup() {
  const [percent, setPercent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(percent);
    toast(`Націнка встановлена на рівні ${percent}%`);
    setPercent("");
  };

  const handleChange = (e) => setPercent(e.target.value);

  return (
    <form className="price_markup" onSubmit={handleSubmit}>
      <span className="price_markup--text">Введіть процент націнки</span>
      <input
        className="price_markup--input"
        type="number"
        value={percent}
        onChange={handleChange}
      />
    </form>
  );
}
